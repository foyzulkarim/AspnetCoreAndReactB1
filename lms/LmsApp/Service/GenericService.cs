using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Common.Model;
using Common.Repository;
using Common.RequestModel;
using Common.ViewModel;
using Microsoft.EntityFrameworkCore;
using Model.Repo;

namespace Service
{
    public class GenericService<T, TRm, TVm> where T : Entity where TRm : BaseRequestModel<T> where TVm : BaseViewModel<T>
    {
        protected IGenericRepository<T> Repository;

        public GenericService(IGenericRepository<T> repository)
        {
            Repository = repository;
        }

        public virtual bool Add(T entity)
        {
            var add = Repository.Add(entity);
            var save = Repository.Save();
            return save;
        }
        
        public bool Delete(T entity)
        {
            bool deleted = Repository.Delete(entity);
            Repository.Save();
            return deleted;
        }

        public bool Delete(string id)
        {
            var entity = Repository.GetById(id);
            bool deleted = Repository.Delete(entity);
            Repository.Save();
            return deleted;
        }

        public virtual bool Edit(T entity)
        {
            bool edit = Repository.Edit(entity);
            Repository.Save();
            return edit;
        }

        public T GetById(string id)
        {
            return Repository.GetById(id);
        }

        public async Task<List<TVm>> GetAllAsync()
        {
            var queryable = await Repository.Get().ToListAsync();
            var vms = queryable.Select(x => (TVm)Activator.CreateInstance(typeof(TVm), new object[] { x }));
            return vms.ToList();
        }

        public List<DropdownViewModel> GetDropdownList(TRm request)
        {
            IQueryable<T> queryable = Repository.Get();
            queryable = request.GetOrderedData(queryable);
            List<DropdownViewModel> list = queryable.Select(request.Dropdown()).ToList();
            return list;
        }

        public async Task<Tuple<List<DropdownViewModel>, int>> GetDropdownListAsync(TRm request)
        {
            IQueryable<T> queryable = Repository.Get();
            queryable = request.GetOrderedData(queryable);
            List<DropdownViewModel> list = await queryable.Select(request.Dropdown()).ToListAsync();
            return new Tuple<List<DropdownViewModel>, int>(list, list.Count);
        }

        public async Task<Tuple<List<TVm>, int>> SearchAsync(TRm request)
        {
            IQueryable<T> queryable = Repository.Get(); // 1
            var orderedQueryable = request.GetOrderedData(queryable); //3
            int count = orderedQueryable.Count();
            var resultQueryable = request.SkipAndTake(orderedQueryable); //4
            if (request.IsIncludeParents)
            {
                resultQueryable = request.IncludeParents(resultQueryable);
            }
            
            var list = await resultQueryable.ToListAsync(); // 5
            List<TVm> vms = list.ConvertAll(CreateVmInstance);
            return new Tuple<List<TVm>, int>(vms, count);
        }

        private static TVm CreateVmInstance(T x)
        {
            return (TVm)Activator.CreateInstance(typeof(TVm), x);
        }

        public virtual TVm GetDetail(string id)
        {
            var model = Repository.GetById(id);
            if (model == null)
            {
                return null;
            }
            return CreateVmInstance(model);
        }
         
        public Entity AddCommonValues(Entity fromEntity, Entity toEntity)
        {
            toEntity.Id = Guid.NewGuid().ToString();
            toEntity.Created = fromEntity.Created;          
            toEntity.CreatedBy = fromEntity.CreatedBy;
            toEntity.Modified = fromEntity.Modified;
            toEntity.ModifiedBy = fromEntity.ModifiedBy;
            toEntity.IsActive = true;
            return toEntity;
        }
    }

}

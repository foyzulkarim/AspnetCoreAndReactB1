using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Model;
using RequestModel;
using ViewModel;

namespace Service
{
    public interface IGenericService<T,TRm,TVm> where T : Entity where TRm : BaseRequestModel<T> where TVm : BaseViewModel<T>
    {
        bool Add(T entity);

        bool Delete(T entity);

        bool Delete(string id);

        bool Edit(T entity);

        T GetById(string id);

        Task<List<TVm>> GetAllAsync();

        List<DropdownViewModel> GetDropdownList(TRm request);

        Task<Tuple<List<DropdownViewModel>, int>> GetDropdownListAsync(TRm request);

        Task<Tuple<List<TVm>, int>> SearchAsync(TRm request);

        TVm GetDetail(string id);
    }
}
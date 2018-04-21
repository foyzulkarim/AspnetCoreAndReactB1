using System.Collections.Generic;
using System.Linq;
using Common.Model;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace Common.Repository
{
    internal interface IBaseRepository<TEntity> where TEntity : Entity
    {
        IQueryable<TEntity> Get();
        TEntity GetById(string id);
        bool Exists(string id);
        EntityEntry<TEntity> Add(TEntity entity);
        IEnumerable<TEntity> Add(IEnumerable<TEntity> entities);
        bool Delete(TEntity entity);
        bool Delete(string id);
        bool Edit(TEntity entity);
        bool Save();
    }
}
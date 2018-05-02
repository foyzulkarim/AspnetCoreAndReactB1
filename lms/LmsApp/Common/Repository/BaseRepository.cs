using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Common.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace Common.Repository
{
    internal class BaseRepository<TEntity> : IBaseRepository<TEntity> where TEntity : Entity
    {
        public DbContext Db;

        public BaseRepository(DbContext db)
        {
            Db = db;
        }

        public IQueryable<TEntity> Get()
        {
            var query = Db.Set<TEntity>().AsQueryable();
            return query;
        }
        public TEntity GetById(string id)
        {
            return Db.Set<TEntity>().Find(id);
        }

        public virtual bool Exists(string id)
        {
            return Db.Set<TEntity>().Any(x => x.Id == id);
        }

        public virtual EntityEntry<TEntity> Add(TEntity entity)
        {
            return Db.Set<TEntity>().Add(entity);            
        }

        public virtual IEnumerable<TEntity> Add(IEnumerable<TEntity> entities)
        {
            var enumerable = entities as IList<TEntity> ?? entities.ToList();
            Db.Set<TEntity>().AddRange(enumerable);
            return enumerable;
        }

        public virtual bool Delete(TEntity entity)
        {
            var remove = Db.Set<TEntity>().Remove(entity);
            return true;
        }

        public virtual bool Delete(string id)
        {
            TEntity entity = GetById(id);
            if (entity!=null)
            {
                Db.Set<TEntity>().Remove(entity);
            }
            return true;
        }

        public virtual bool Edit(TEntity entity)
        {
            Db.Entry(entity).State = EntityState.Modified;
            return true;
        }

        public virtual bool Save()
        {
            var changes = Db.SaveChanges();
            return changes > 0;
        }
    }
}
using System;
using System.Collections.Generic;
using System.Text;
using Common.Model;

namespace Common.ViewModel
{
    public abstract class BaseViewModel<T> where T : Entity
    {
        public BaseViewModel(Entity entity)
        {
            Id = entity.Id;
            Created =entity.Created;
            CreatedBy = entity.CreatedBy;
            Modified=entity.Modified;
            ModifiedBy=entity.ModifiedBy;
            IsActive =entity.IsActive;
            IsDeleted = entity.IsDeleted;
        }

        public string Id { get; set; }

        public DateTime Created { get; set; }

        public string CreatedBy { get; set; }

        public DateTime Modified { get; set; }

        public string ModifiedBy { get; set; }

        public bool IsActive { get; set; }

        public bool IsDeleted { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Text;
using Model;

namespace ViewModel
{
    public class TeacherViewModel : BaseViewModel<Teacher>
    {
        public TeacherViewModel(Teacher entity) : base(entity)
        {
            Name = entity.Name;
            Phone = entity.Phone;
            DepartmentId = entity.DepartmentId;
        }

        public string DepartmentId { get; set; }

        public string Name { get; set; }

        public string Phone { get; set; }
    }
}

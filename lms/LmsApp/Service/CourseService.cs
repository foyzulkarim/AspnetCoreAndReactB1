using System;
using System.Collections.Generic;
using System.Text;
using Common.Repository;
using Common.Service;
using Model;
using Model.Repo;
using RequestModel;
using ViewModel;

namespace Service
{
    public class CourseService  : GenericService<Course,CourseRequestModel, CourseViewModel>
    {
        public CourseService(IGenericRepository<Course> repository) : base(repository)
        {

        }


    }
}

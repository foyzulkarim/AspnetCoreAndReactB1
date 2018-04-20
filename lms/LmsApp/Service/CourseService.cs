using System;
using System.Collections.Generic;
using System.Text;
using Common.Repository;
using Common.Service;
using Model;
using RequestModel;
using ViewModel;

namespace Service
{
    public class CourseService  : BaseService<Course,CourseRequestModel, CourseViewModel>
    {
        public CourseService(BaseRepository<Course> repository) : base(repository)
        {

        }


    }
}

using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Model;
using Model.Repo;
using RequestModel;
using Service;
using ViewModel;

namespace LmsApp.Server.Controllers
{
    [Produces("application/json")]
    [Route("api/Courses")]
    public class CoursesController : BaseController<Course, CourseRequestModel, CourseViewModel>
    {        
        public CoursesController(IGenericService<Course, CourseRequestModel, CourseViewModel> service) : base(service)
        {
        }         
    }
}
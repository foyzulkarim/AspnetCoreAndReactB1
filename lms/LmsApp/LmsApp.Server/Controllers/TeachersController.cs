using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Model;
using RequestModel;
using Service;
using ViewModel;

namespace LmsApp.Server.Controllers
{
    [Produces("application/json")]
    [Route("api/Teachers")]
    public class TeachersController : BaseController<Teacher, TeacherRequestModel, TeacherViewModel>
    {
        public TeachersController(IGenericService<Teacher, TeacherRequestModel, TeacherViewModel> service) : base(service)
        {

        }
    }
}
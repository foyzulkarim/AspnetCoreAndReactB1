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
    public class TeachersController : Controller
    {
        private IGenericService<Teacher, TeacherRequestModel, TeacherViewModel> _service;

        public TeachersController(IGenericService<Teacher,TeacherRequestModel,TeacherViewModel> service)
        {
            _service = service;
        }

        [HttpPost]
        [Route("Search")]
        public async Task<IActionResult> GetTeachers([FromBody] TeacherRequestModel request)
        {
            var items = await _service.SearchAsync(request);
            return Ok(items);
        }

        [HttpPost]
        [Route("Add")]
        public IActionResult AddTeacher([FromBody] Teacher teacher)
        {
            teacher.Id = Guid.NewGuid().ToString();

            bool add = this._service.Add(teacher);
            return this.Ok(teacher.Id);
        }
    }
}
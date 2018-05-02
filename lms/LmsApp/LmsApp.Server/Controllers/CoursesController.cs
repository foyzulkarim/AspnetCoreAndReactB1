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
    public class CoursesController : Controller
    {
        private GenericService<Course,CourseRequestModel,CourseViewModel> _service;

        public CoursesController(IGenericService<Course,CourseRequestModel,CourseViewModel> service)
        {            
            _service = service as GenericService<Course, CourseRequestModel, CourseViewModel>;
        }

        [HttpPost]
        [Route("Search")]
        public async Task<IActionResult> GetCourses([FromBody] CourseRequestModel request)
        {
            var courses = await _service.SearchAsync(request);
            return Ok(courses);
        }

        [HttpPost]
        [Route("Add")]
        public IActionResult AddCourse([FromBody] Course course)
        {
            course.Id = Guid.NewGuid().ToString();
            course.Created= DateTime.Now;
            course.Modified= DateTime.Now;
            course.CreatedBy = "system";
            course.ModifiedBy = "system";
            course.IsActive = true;

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            bool added = _service.Add(course);
            if (added)
            {
                return Ok(course.Id);
            }

            return BadRequest("Couldn't save course.");
        }
    }
}
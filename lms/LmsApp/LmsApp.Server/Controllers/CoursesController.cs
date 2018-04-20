using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Common.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Model;
using RequestModel;
using Service;
using ViewModel;

namespace LmsApp.Server.Controllers
{
    [Produces("application/json")]
    [Route("api/Courses")]
    public class CoursesController : Controller
    {
        private LmsDbContext _db;
        private BaseRepository<Course> _repository;
        private CourseService _service;

        public CoursesController(LmsDbContext db)
        {
            _db = db;
            _repository = new BaseRepository<Course>(_db);
            _service  = new CourseService(_repository);
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
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApiApp.Controllers
{
    using Microsoft.Extensions.Logging;

    using WebApiApp.Models;

    [Produces("application/json")]
    [Route("api/Students")]
    public class StudentsController : Controller
    {
        private ILogger _logger;
        private AppDbContext _db;

        public StudentsController(ILoggerFactory factory, AppDbContext db)
        {
            this._logger = factory.CreateLogger<StudentsController>();
            _db = db;
        }

        [HttpGet]
        [Route("GetStudents")]
        public IActionResult GetStudents(int skip = 0, int take = 10, string orderBy = "Name", bool isAscending = true)
        {
            IQueryable<Student> dbStudents = _db.Students.AsQueryable();

            // dbStudents.OrderBy(orderBy,isAscending);

            if (orderBy == "Name")
            {
                dbStudents = isAscending ? dbStudents.OrderBy(x => x.Name).AsQueryable() : dbStudents.OrderByDescending(x => x.Name).AsQueryable();
            }

            if (orderBy == "Phone")
            {
                dbStudents = isAscending ? dbStudents.OrderBy(x => x.Phone).AsQueryable() : dbStudents.OrderByDescending(x => x.Phone).AsQueryable();
            }
            
            dbStudents = dbStudents.Skip(skip).Take(take).AsQueryable();
            List<Student> students = dbStudents.ToList();
            return this.Ok(students);
        }

        [HttpPost]
        [Route("SaveStudent")]
        public IActionResult SaveStudent([FromBody] Student student)
        {
            student.Id = Guid.NewGuid().ToString();
            _db.Students.Add(student);
            _db.SaveChanges();
            return this.Ok(student);
        }

        [HttpPut]
        [Route("EditStudent")]
        public IActionResult EditStudent([FromBody] Student student)
        {
            Student dbStudent = _db.Students.Find(student.Id);
            if (dbStudent == null)
            {
                return NotFound("Student not found");
            }

            _db.Students.Update(student);
            _db.SaveChanges();
            return Ok(true);
        }

        [HttpDelete]
        [Route("DeleteStudent")]
        public IActionResult DeleteStudent(string id)
        {
            Student student = _db.Students.Find(id);
            if (student == null)
            {
                return NotFound("Object not found");
            }

            _db.Students.Remove(student);
            _db.SaveChanges();
            return this.Ok(id);
        }
    }
}
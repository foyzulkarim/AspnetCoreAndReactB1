using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using Model;

namespace RequestModel
{
    public class TeacherRequestModel : BaseRequestModel<Teacher>
    {
        public TeacherRequestModel(string keyword, string orderBy = "Modified", string isAscending = "False") : base(keyword, orderBy, isAscending)
        {
        }

        protected override Expression<Func<Teacher, bool>> GetExpression()
        {
            Keyword = Keyword.ToLower();
            ExpressionObj = x => x.Name.ToLower().Contains(Keyword) || x.Phone.ToLower().Contains(Keyword) || x.Courses.ToLower().Contains(Keyword);

           return ExpressionObj;
        }
    }
}

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PilotPracticeApi.Data;

namespace PilotPracticeApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        private readonly Context _context;
        private readonly ILogger<QuestionController> _logger;

        public QuestionController( Context context, ILogger<QuestionController> logger )
        {
            this._context = context;
            this._logger = logger;
        }

        // GET: api/<QuestionController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<QuestionController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<QuestionController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<QuestionController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<QuestionController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

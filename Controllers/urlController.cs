using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SiteJump.Models;

namespace SiteJump.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class urlController : ControllerBase
    {
        [HttpGet]
        [Produces("application/xml")]
        public ActionResult<List<url>> Get()
        {
            List<url> sitemaps = new List<url>();

            sitemaps.Add(new url()
            {
                loc = "http://jumplabel.com.br/",
                changefreq = "daily",
                priority = "1.00"
            });

            sitemaps.Add(new url()
            {
                loc = "http://jumplabel.com.br/NavItems/Solucoes",
                changefreq = "daily",
                priority = "0.85"
            });
            sitemaps.Add(new url()
            {
                loc = "http://jumplabel.com.br/NavItems/Consultoria",
                changefreq = "daily",
                priority = "0.85"
            });
            sitemaps.Add(new url()
            {
                loc = "http://jumplabel.com.br/NavItems/Treinamentos",
                changefreq = "daily",
                priority = "0.85"
            });
            sitemaps.Add(new url()
            {
                loc = "http://jumplabel.com.br/NavItems/Tecnologias",
                changefreq = "daily",
                priority = "0.85"
            });
            sitemaps.Add(new url()
            {
                loc = "http://jumplabel.com.br/NavItems/OneTrustLGPD",
                changefreq = "daily",
                priority = "0.85"
            });

            return sitemaps;
        }
        /*
        // GET: api/url
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }
        */
        // GET: api/url/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/url
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/url/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using CataEchange.Models;

namespace CataEchange.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ComerciaController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<Comercia> Get()
        {
            GestorComercia comerceGestor = new GestorComercia();
            return comerceGestor.ListaComercia();
        }

        // GET api/<controller>/5
        public Comercia Get(int id)
        {
            return new Comercia();
        }

        // POST api/<controller>
        public void Post([FromBody] Comercia value)
        {
        }

        // PUT api/<controller>/5
        public void Put([FromBody] Comercia value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}
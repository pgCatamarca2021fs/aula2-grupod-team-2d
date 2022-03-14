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
    public class OperaCriptoController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<OperaCripto> Get()
        {
            GestorOperaCripto gestorOpCripto = new GestorOperaCripto();
            return gestorOpCripto.ListaOpCripto();
        }

        // GET api/<controller>/5
        public OperaCripto Get(int id)
        {
            return new OperaCripto();
        }

        // POST api/<controller>
        public void Post([FromBody] OperaCripto value)
        {
        }

        // PUT api/<controller>/5
        public void Put([FromBody] OperaCripto value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}
using CataExchange2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CataExchange2.Controllers
{
    public class OperaCriptoController : ApiController
    {
        CataExchangeEntities db = new CataExchangeEntities();
        // GET: api/OperaCripto
        [HttpGet]
        public List<OperaCripto> ListarOperaCripto()
        {
            List<OperaCripto> operaC = db.OperaCripto.ToList();
            return operaC;
        }

        // GET: api/OperaCripto/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/OperaCripto
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/OperaCripto/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/OperaCripto/5
        public void Delete(int id)
        {
        }
    }
}

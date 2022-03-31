using CataExchange2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CataExchange2.Controllers
{
    public class estadoCuentaController : ApiController
    {
        CataExchangeEntities db = new CataExchangeEntities();
        // GET: api/estadoCuenta
        [HttpGet]
        public List<estadoCuenta> ListarEstadoCuenta()
        {
            List<estadoCuenta> estadoCuentas = db.estadoCuenta.ToList();
            return estadoCuentas;
        }

        // GET: api/estadoCuenta/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/estadoCuenta
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/estadoCuenta/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/estadoCuenta/5
        public void Delete(int id)
        {
        }
    }
}

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
    public class CuentaPesoController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<CuentaPeso> Get()
        {
            GestorCuentaPeso gestorPeso = new GestorCuentaPeso();
            return gestorPeso.ListaCuentaPeso();
        }

        // GET api/<controller>/5
        public CuentaPeso Get(int id)
        {
            return new CuentaPeso();
        }

        // POST api/<controller>
        public void Post([FromBody] CuentaPeso value)
        {
        }

        // PUT api/<controller>/5
        public void Put([FromBody] CuentaPeso value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}
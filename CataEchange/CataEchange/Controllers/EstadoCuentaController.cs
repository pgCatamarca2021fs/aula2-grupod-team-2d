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
    public class EstadoCuentaController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<EstadoCuentaP> Get()
        {
            GestorEstadoCuenta gestorEstado = new GestorEstadoCuenta();
            return gestorEstado.ListaEstadoCuenta();
        }

        // GET api/<controller>/5
        public EstadoCuentaP Get(int id)
        {
            return new EstadoCuentaP();
        }

        // POST api/<controller>
        public void Post([FromBody] EstadoCuentaP value)
        {
        }

        // PUT api/<controller>/5
        public void Put([FromBody] EstadoCuentaP value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}
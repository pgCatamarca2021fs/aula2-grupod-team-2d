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
    public class CriptoMonedaController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<CriptoMoneda> Get()
        {
            GestorCriptoMoneda gestorCripto = new GestorCriptoMoneda();
            return gestorCripto.ListaCriptoMoneda();
        }

        // GET api/<controller>/5
        public CriptoMoneda Get(int id)
        {
            return new CriptoMoneda();
        }

        // POST api/<controller>
        public void Post([FromBody] CriptoMoneda value)
        {
        }

        // PUT api/<controller>/5
        public void Put([FromBody] CriptoMoneda value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}
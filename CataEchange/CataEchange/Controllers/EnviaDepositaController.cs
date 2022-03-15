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
    public class EnviaDepositaController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<EnviaDeposita> Get()
        {
            GestorEnviaDeposita gestorEnviaDeposita = new GestorEnviaDeposita();
            return gestorEnviaDeposita.ListaEnviaDeposita();
        }

        // GET api/<controller>/5
        public EnviaDeposita Get(int id)
        {
            return new EnviaDeposita();
        }

        // POST api/<controller>
        public void Post([FromBody] EnviaDeposita value)
        {
        }

        // PUT api/<controller>/5
        public void Put([FromBody] EnviaDeposita value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}
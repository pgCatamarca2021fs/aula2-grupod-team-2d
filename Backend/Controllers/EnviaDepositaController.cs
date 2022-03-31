using CataExchange2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CataExchange2.Controllers
{
    public class EnviaDepositaController : ApiController
    {
        CataExchangeEntities db = new CataExchangeEntities();
        // GET: api/EnviaDeposita
        [HttpGet]
        public List<enviaDeposita> ListarEnviaDeposita()
        {
            List<enviaDeposita> enviaDeposita = db.enviaDeposita.ToList();
            return enviaDeposita;
        }

        // GET: api/EnviaDeposita/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/EnviaDeposita
        public void Post([FromBody]enviaDeposita oEnviaDeposita)
        {
            if (!ModelState.IsValid)
            {
                return;
            }

            db.enviaDeposita.Add(oEnviaDeposita);
            db.SaveChanges();
        }

        // PUT: api/EnviaDeposita/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/EnviaDeposita/5
        public void Delete(int id)
        {
        }
    }
}

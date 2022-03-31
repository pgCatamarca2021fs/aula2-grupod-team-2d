using CataExchange2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CataExchange2.Controllers
{
    public class CriptoMonedaController : ApiController
    {
        CataExchangeEntities db = new CataExchangeEntities();
        // GET: api/CriptoMoneda
        [HttpGet]
        public List<criptoMonedas> ListarCriptoMonedas()
        {
            List<criptoMonedas> listaCriptoM = db.criptoMonedas.ToList();
            return listaCriptoM;
        }

        // GET: api/CriptoMoneda/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/CriptoMoneda
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/CriptoMoneda/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/CriptoMoneda/5
        public void Delete(int id)
        {
        }
    }
}

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

    public class BilleteraController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<Billetera> Get()
        {
            GestorBilletera walletGestor = new GestorBilletera();
            return walletGestor.ListaBilletera();
        }

        // GET api/<controller>/5
        public Billetera Get(int id)
        {
            return new Billetera();
        }

        // POST api/<controller>
        public void Post([FromBody] Billetera value)
        {
        }

        // PUT api/<controller>/5
        public void Put([FromBody] Billetera value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}
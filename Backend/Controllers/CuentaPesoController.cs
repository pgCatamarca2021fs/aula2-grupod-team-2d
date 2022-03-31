using CataExchange2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CataExchange2.Controllers
{
    public class CuentaPesoController : ApiController
    {
        CataExchangeEntities db = new CataExchangeEntities();
        // GET: api/CuentaPeso
        [HttpGet]
        public List<cuentaPesos> ListarCuentaPesos()
        {
            List<cuentaPesos> cuentaPesos = db.cuentaPesos.ToList();

            return cuentaPesos;
        }

        // GET: api/CuentaPeso/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/CuentaPeso
        public void Post([FromBody]cuentaPesos oCuentaPeso)
        {
            if (!ModelState.IsValid)
            {
                return;
            }

            db.cuentaPesos.Add(oCuentaPeso);
            db.SaveChanges();
        }

        // PUT: api/CuentaPeso/5

        public void Put(int id, [FromBody]cuentaPesos oCuentaPeso)
        {
            cuentaPesos oCuentaPesoAModificar = db.cuentaPesos.Where(a => a.idUsuario == id).FirstOrDefault();
            oCuentaPesoAModificar.saldo = oCuentaPeso.saldo;


            db.cuentaPesos.Attach(db.cuentaPesos.Single(a => a.idUsuario == id));
            db.Entry(oCuentaPesoAModificar).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();
        }

        // DELETE: api/CuentaPeso/5
        public void Delete(int id)
        {
        }
    }
}

using CataExchange2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CataExchange2.Controllers
{
    public class BilleteraController : ApiController
    {
        CataExchangeEntities db = new CataExchangeEntities();
        // GET: api/Billetera
        [HttpGet]
        public List<Billetera> ListarBilleteras()
        {
            List<Billetera> listaBilletera = db.Billetera.ToList();
            return listaBilletera;
        }

        // GET: api/Billetera/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Billetera
        //[HttpPost]
        public void Post([FromBody]Billetera oBilletera)
        {
            if (!ModelState.IsValid)
            {
                return;
            }

            db.Billetera.Add(oBilletera);
            db.SaveChanges();
        }

        // PUT: api/Billetera/5
        public void Put(int id, string nombreMoneda, [FromBody]Billetera oBilleteraNuevo)
        {
            Billetera oBilleteraAModificar = db.Billetera.Where(a => a.idUsuario == id && a.nombreCripto == nombreMoneda).FirstOrDefault();

            oBilleteraAModificar.cantidadCripto = oBilleteraNuevo.cantidadCripto;
            
            db.Billetera.Attach(db.Billetera.Single(a => a.idUsuario == id && a.nombreCripto == nombreMoneda));
            db.Entry(oBilleteraAModificar).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();
        }

        // DELETE: api/Billetera/5
        public void Delete(int id)
        {
        }
    }
}

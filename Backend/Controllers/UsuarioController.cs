using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CataExchange2.Models;
using System.ComponentModel.DataAnnotations;

namespace CataExchange2.Controllers
{
    public class UsuarioController : ApiController
    {

        CataExchangeEntities db = new CataExchangeEntities();

        [Route("api/Usuario/GetLogin")]
        public Usuarios Get([FromBody] Login datosEntrada)
        {
            Usuarios oUsuarios = db.Usuarios.Where(a => a.Email == datosEntrada.email && a.Clave == datosEntrada.clave).FirstOrDefault();
            return oUsuarios;
        }

        // GET api/<controller>
        //[Authorize]
        [HttpGet]
        public List<Usuarios> ListarUsuario()
        {
            List<Usuarios> listaUsuarios = db.Usuarios.ToList();

            return listaUsuarios;
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        //[HttpPost]
        public void Post([FromBody] Usuarios oUsuario)
        {
            if (!ModelState.IsValid)
            {
                return;
            }

            db.Usuarios.Add(oUsuario);            
            db.SaveChanges();
        }

        // PUT api/<controller>/5
        [HttpPut]
        public void Put(int id, [FromBody] Usuarios oUsuarioNuevo)
        {
            Usuarios oUsuarioAModificar = db.Usuarios.Where(a => a.idUsuario == id).FirstOrDefault();
            oUsuarioAModificar.Nombre = oUsuarioNuevo.Nombre;
            oUsuarioAModificar.Apellido = oUsuarioNuevo.Apellido;
            oUsuarioAModificar.fechaNacimiento = oUsuarioNuevo.fechaNacimiento;
            oUsuarioAModificar.Email = oUsuarioNuevo.Email;
            oUsuarioAModificar.Clave = oUsuarioNuevo.Clave;
            oUsuarioAModificar.dni = oUsuarioNuevo.dni;

            db.Usuarios.Attach(db.Usuarios.Single(a => a.idUsuario == id));
            db.Entry(oUsuarioAModificar).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();
        }

        // DELETE api/<controller>/5

        public void Delete(int id)
        {
            if(!ModelState.IsValid)
            {
                return;
            }

            Usuarios oUsuario = db.Usuarios.Where(a => a.idUsuario == id).FirstOrDefault();
            db.Usuarios.Remove(oUsuario);
            db.SaveChanges();
        }
    }

    public class Login
    {
        [Required]
        public string email { get; set; }

        [Required]
        public string clave { get; set; }
    }
}
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
    public class UsuarioController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<Usuario> Get()
        {
            GestorUsuario gestor = new GestorUsuario();
            return gestor.ListarUsuarios();
        }

        // GET api/<controller>/5
        public Usuario Get(int id)
        {
            return new Usuario();
        }

        // POST api/<controller>
        public void Post([FromBody] Usuario value)
        {
            GestorUsuario gestor = new GestorUsuario();
            gestor.CrearUsuario(value);
        }

        // PUT api/<controller>/5
        public void Put([FromBody] Usuario value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}
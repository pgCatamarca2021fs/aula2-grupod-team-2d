using CataExchange2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CataExchange2.Controllers
{
    [AllowAnonymous]
    public class AccountController : ApiController
    {
        CataExchangeEntities db = new CataExchangeEntities();
        /// <summary>
        /// METODO ENCARGADO DE REALIZAR LA AUTENTICACION
        /// </summary>
        /// <param name="login"></param>
        /// <returns></returns>
        /// 
        [HttpPost]
        
        public IHttpActionResult Login(Login login)
        {
           

            

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            //bool isCredentialValid = (login.clave == "123");
            bool isCredentialValid = db.Usuarios.Any(a => a.Email == login.email && a.Clave == login.clave);

            if (isCredentialValid)
            {
                var token = TokenGenerator.GenerateTokenJwt(login.email);
                return Ok(token);
                
            }
            else
                return Unauthorized();//STATUS CODE 401
                      
        }
    }
}

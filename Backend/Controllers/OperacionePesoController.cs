﻿using CataExchange2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CataExchange2.Controllers
{
    public class OperacionePesoController : ApiController
    {
        CataExchangeEntities db = new CataExchangeEntities();
        // GET: api/OperacionePeso
        [HttpGet]
        public List<operacionesPesos> ListarOperacionesPesos()
        {
            List<operacionesPesos> operaciones = db.operacionesPesos.ToList();
            return operaciones;
        }

        // GET: api/OperacionePeso/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/OperacionePeso
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/OperacionePeso/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/OperacionePeso/5
        public void Delete(int id)
        {
        }
    }
}

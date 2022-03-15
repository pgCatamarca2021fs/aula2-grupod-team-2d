﻿using System;
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
    public class OperacionePesoController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<OperacionePeso> Get()
        {
            GestorOperacionePeso gestorOp = new GestorOperacionePeso();
            return gestorOp.ListaOperacionesP();
        }

        // GET api/<controller>/5
        public OperacionePeso Get(int id)
        {
            return new OperacionePeso();
        }

        // POST api/<controller>
        public void Post([FromBody] OperacionePeso value)
        {
        }

        // PUT api/<controller>/5
        public void Put([FromBody] OperacionePeso value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}
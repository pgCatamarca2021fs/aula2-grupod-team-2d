using CataExchange2.App_Start;
using CataExchange2.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace CataExchange2
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Configuración y servicios de API web

            // Rutas de API web
            config.MapHttpAttributeRoutes();

            config.MessageHandlers.Add(new TokenValidationHandler()); 

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            config.EnableCors(new AccessPolicyCors());
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CataEchange.Models
{
    public class Billetera
    {
        // ATRIBUTOS
        private int idBilletera;
        private int idUsuario;
        private string clavePublica;
        private string nombreCripto;
        private float cantidadCripto;
        private float cotizacion;
        
        //CONTRUCTOR
        public Billetera(int idBilletera, int idUsuario, string clavePublica, string nombreCripto, float cantidadCripto, float cotizacion)
        {
            this.idBilletera = idBilletera;
            this.idUsuario = idUsuario;
            this.clavePublica = clavePublica;
            this.nombreCripto = nombreCripto;
            this.cantidadCripto = cantidadCripto;
            this.cotizacion = cotizacion;
        }

        public Billetera()
        {

        }

        //GETTER Y SETTER
        public int IdBilletera { get => idBilletera; set => idBilletera = value; }
        public int IdUsuario { get => idUsuario; set => idUsuario = value; }
        public string ClavePublica { get => clavePublica; set => clavePublica = value; }
        public string NombreCripto { get => nombreCripto; set => nombreCripto = value; }
        public float CantidadCripto { get => cantidadCripto; set => cantidadCripto = value; }
        public float Cotizacion { get => cotizacion; set => cotizacion = value; }
    }
}
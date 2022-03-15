using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CataEchange.Models
{
    public class CriptoMoneda
    {
        // ATRIBUTOS
        private int idCriptoMoneda;
        private string nombreCripto;
        private string abreviatura;
        private float cotizacionCripto;

        //CONSTRUCTOR
        public CriptoMoneda(int idCriptoMoneda, string nombreCripto, string abreviatura, float cotizacionCripto)
        {
            this.idCriptoMoneda = idCriptoMoneda;
            this.nombreCripto = nombreCripto;
            this.abreviatura = abreviatura;
            this.cotizacionCripto = cotizacionCripto;
        }

        public CriptoMoneda()
        {

        }

        // GETTER Y SETTER
        public int IdCriptoMoneda { get => idCriptoMoneda; set => idCriptoMoneda = value; }
        public string NombreCripto { get => nombreCripto; set => nombreCripto = value; }
        public string Abreviatura { get => abreviatura; set => abreviatura = value; }
        public float CotizacionCripto { get => cotizacionCripto; set => cotizacionCripto = value; }
    }
}
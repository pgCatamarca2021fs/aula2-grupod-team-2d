using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CataEchange.Models
{
    public class OperaCripto
    {
        //ATRIBUTOS
        private int idOperaCripto;
        private int idBilletera;
        private int idCriptoMoneda;
        private float cantidadCripto;
        private string tipoOperacion;
        private DateTime fechaHora;
        private float importe;

        // CONSTRUCTOR
        public OperaCripto(int idOperaCripto, int idBilletera, int idCriptoMoneda, float cantidadCripto, string tipoOperacion, DateTime fechaHora, float importe)
        {
            this.idOperaCripto = idOperaCripto;
            this.idBilletera = idBilletera;
            this.idCriptoMoneda = idCriptoMoneda;
            this.cantidadCripto = cantidadCripto;
            this.tipoOperacion = tipoOperacion;
            this.fechaHora = fechaHora;
            this.importe = importe;
        }
        public OperaCripto()
        {

        }

        //GETTER Y SETTER
        public int IdOperaCripto { get => idOperaCripto; set => idOperaCripto = value; }
        public int IdBilletera { get => idBilletera; set => idBilletera = value; }
        public int IdCriptoMoneda { get => idCriptoMoneda; set => idCriptoMoneda = value; }
        public float CantidadCripto { get => cantidadCripto; set => cantidadCripto = value; }
        public string TipoOperacion { get => tipoOperacion; set => tipoOperacion = value; }
        public DateTime FechaHora { get => fechaHora; set => fechaHora = value; }
        public float Importe { get => importe; set => importe = value; }
    }
}
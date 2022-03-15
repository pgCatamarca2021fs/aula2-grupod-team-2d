using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CataEchange.Models
{
    public class Comercia
    {
        //ATRIBUTOS
        private int idComercia;
        private int idCuentaPesos;
        private int idCriptoMoneda;
        private int idBilletera;
        private float cantidadCripto;
        private float cantidadPesos;
        private string tipoOperacion;
        private DateTime fechaHora;

        // GETTER Y SETTER
        public int IdComercia { get => idComercia; set => idComercia = value; }
        public int IdCuentaPesos { get => idCuentaPesos; set => idCuentaPesos = value; }
        public int IdCriptoMoneda { get => idCriptoMoneda; set => idCriptoMoneda = value; }
        public int IdBilletera { get => idBilletera; set => idBilletera = value; }
        public float CantidadCripto { get => cantidadCripto; set => cantidadCripto = value; }
        public float CantidadPesos { get => cantidadPesos; set => cantidadPesos = value; }
        public string TipoOperacion { get => tipoOperacion; set => tipoOperacion = value; }
        public DateTime FechaHora { get => fechaHora; set => fechaHora = value; }

        //CONSTRUCTOR
        public Comercia(int idComercia, int idCuentaPesos, int idCriptoMoneda, int idBilletera, float cantidadCripto, float cantidadPesos, string tipoOperacion, DateTime fechaHora)
        {
            this.idComercia = idComercia;
            this.idCuentaPesos = idCuentaPesos;
            this.idCriptoMoneda = idCriptoMoneda;
            this.idBilletera = idBilletera;
            this.cantidadCripto = cantidadCripto;
            this.cantidadPesos = cantidadPesos;
            this.tipoOperacion = tipoOperacion;
            this.fechaHora = fechaHora;
        }

        public Comercia()
        {

        }
    }
}
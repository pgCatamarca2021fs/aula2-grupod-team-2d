using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CataEchange.Models
{
    public class CuentaPeso
    {
        // ATRIBUTOS
        private int idCuentaPeso;
        private int idUsuario;
        private string cbu;
        private float saldo;

        //CONSTRUCTOR
        public CuentaPeso(int idCuentaPeso, int idUsuario, string cbu, float saldo)
        {
            this.idCuentaPeso = idCuentaPeso;
            this.idUsuario = idUsuario;
            this.cbu = cbu;
            this.saldo = saldo;
        }
        public CuentaPeso()
        {

        }

        //GETTER Y SETTER
        public int IdCuentaPeso { get => idCuentaPeso; set => idCuentaPeso = value; }
        public int IdUsuario { get => idUsuario; set => idUsuario = value; }
        public string Cbu { get => cbu; set => cbu = value; }
        public float Saldo { get => saldo; set => saldo = value; }
    }
}
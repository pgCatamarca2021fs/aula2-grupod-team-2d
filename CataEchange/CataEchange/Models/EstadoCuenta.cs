using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CataEchange.Models
{
    public class EstadoCuenta
    {
        //ATRIBUTOS
        private int idEstadoCuenta;
        private int idCuentaPesos;
        private string estadoCuenta;

        //CONSTRUCTOR
        public EstadoCuenta(int idEstadoCuenta, int idCuentaPesos, string estadoCuenta)
        {
            this.idEstadoCuenta = idEstadoCuenta;
            this.idCuentaPesos = idCuentaPesos;
            this.estadoCuenta = estadoCuenta;
        }
        public EstadoCuenta()
        {

        }

        //GETTER Y SETTER
        public int IdEstadoCuenta { get => idEstadoCuenta; set => idEstadoCuenta = value; }
        public int IdCuentaPesos { get => idCuentaPesos; set => idCuentaPesos = value; }
        public string EstadoCuenta { get => estadoCuenta; set => estadoCuenta = value; }
    }
}
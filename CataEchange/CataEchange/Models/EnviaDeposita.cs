using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CataEchange.Models
{
    public class EnviaDeposita
    {
        // ATRIBUTOS
        private int idEnviaDeposita;
        private int idUsuario;
        private int idCuentaPesos;
        private float monto;
        private string tipoOperacion;

        // CONSTRUCTOR
        public EnviaDeposita(int idEnviaDeposita, int idUsuario, int idCuentaPesos, float monto, string tipoOperacion)
        {
            this.idEnviaDeposita = idEnviaDeposita;
            this.idUsuario = idUsuario;
            this.idCuentaPesos = idCuentaPesos;
            this.monto = monto;
            this.tipoOperacion = tipoOperacion;
        }
        public EnviaDeposita()
        {

        }

        //GETTER Y SETTER
        public int IdEnviaDeposita { get => idEnviaDeposita; set => idEnviaDeposita = value; }
        public int IdUsuario { get => idUsuario; set => idUsuario = value; }
        public int IdCuentaPesos { get => idCuentaPesos; set => idCuentaPesos = value; }
        public float Monto { get => monto; set => monto = value; }
        public string TipoOperacion { get => tipoOperacion; set => tipoOperacion = value; }
    }
}
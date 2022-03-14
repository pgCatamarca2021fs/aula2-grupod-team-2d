using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CataEchange.Models
{
    public class OperacionePeso
    {
        // ATRIBUTOS
        private int idOperacionesP;
        private int idCuentaPesos;
        private string tipoOperacion;
        private float importe;

        // CONSTRUCTOR
        public OperacionePeso(int idOperacionesP, int idCuentaPesos, string tipoOperacion, float importe)
        {
            this.idOperacionesP = idOperacionesP;
            this.idCuentaPesos = idCuentaPesos;
            this.tipoOperacion = tipoOperacion;
            this.importe = importe;
        }
        public OperacionePeso()
        {

        }

        //GETTER Y SETTER
        public int IdOperacionesP { get => idOperacionesP; set => idOperacionesP = value; }
        public int IdCuentaPesos { get => idCuentaPesos; set => idCuentaPesos = value; }
        public string TipoOperacion { get => tipoOperacion; set => tipoOperacion = value; }
        public float Importe { get => importe; set => importe = value; }
    }
}
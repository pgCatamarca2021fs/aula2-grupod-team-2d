using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CataEchange.Models
{
    public class Usuario
    {
        // ATRIBUTOS
        private int idUsuario;
        private string nombre;
        private string apellido;
        private DateTime fechaNacimiento;
        private string email;
        private string clave;

        // GETTER Y SETTER
        public int IdUsuario { get => idUsuario; set => idUsuario = value; }
        public string Nombre { get => nombre; set => nombre = value; }
        public string Apellido { get => apellido; set => apellido = value; }
        public DateTime FechaNacimiento { get => fechaNacimiento; set => fechaNacimiento = value; }
        public string Email { get => email; set => email = value; }
        public string Clave { get => clave; set => clave = value; }

        // CONSTRUCTOR
        public Usuario(int idUsuario, string nombre, string apellido, DateTime fechaNacimiento, string email, string clave)
        {
            this.idUsuario = idUsuario;
            this.nombre = nombre;
            this.apellido = apellido;
            this.fechaNacimiento = fechaNacimiento;
            this.email = email;
            this.clave = clave;
        }

        public Usuario()
        {
        }
    }
}
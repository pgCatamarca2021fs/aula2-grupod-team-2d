using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;

namespace CataEchange.Models
{
    public class GestorUsuario
    { 
            string conectionString = ConfigurationManager.ConnectionStrings["CataExchange"].ToString();

            public List<Usuario> ListarUsuarios()
            {
                List<Usuario> lista = new List<Usuario>();

                using (SqlConnection connection = new SqlConnection(this.conectionString))
                {
                    connection.Open();

                    SqlCommand command = connection.CreateCommand();
                    command.CommandText = "listarUsuarios";
                    command.CommandType = CommandType.StoredProcedure;
                    SqlDataReader dataReader = command.ExecuteReader();

                    while (dataReader.Read())
                    {
                        Usuario usuario = new Usuario();
                        usuario.IdUsuario = dataReader.GetInt32(0);
                        usuario.Nombre = dataReader.GetString(1);
                        usuario.Apellido = dataReader.GetString(2);
                        usuario.FechaNacimiento = dataReader.GetDateTime(3);
                        usuario.Email = dataReader.GetString(4);
                        usuario.Clave = dataReader.GetString(5);
                        
                        lista.Add(usuario);
                    }
                }
                return lista;
            }

        public void CrearUsuario(Usuario usuario)
        {
            using (SqlConnection connection = new SqlConnection(this.conectionString))
            {
                connection.Open();

                SqlCommand command = connection.CreateCommand();
                command.CommandText = "crearUsuario";
                command.CommandType = CommandType.StoredProcedure;

                command.Parameters.Add(new SqlParameter("@nombre", usuario.Nombre));
                command.Parameters.Add(new SqlParameter("@apellido", usuario.Apellido));
                command.Parameters.Add(new SqlParameter("@fechaNacimiento", usuario.FechaNacimiento));
                command.Parameters.Add(new SqlParameter("@email", usuario.Email));
                command.Parameters.Add(new SqlParameter("@clave", usuario.Clave));

                command.ExecuteNonQuery();
            }


        }

        public void EliminarUsuario(Usuario usuario) 
        {
            using (SqlConnection connection = new SqlConnection(this.conectionString))
            {
                connection.Open();

                SqlCommand command = connection.CreateCommand();
                command.CommandText = "eliminarUsuario";
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.RemoveAt("@idUsuario");

                command.ExecuteNonQuery();
            }
        }

        public void ModificarUsuario(Usuario usuario)
        {
            using (SqlConnection connection = new SqlConnection(this.conectionString))
            {
                connection.Open();

                SqlCommand command = connection.CreateCommand();
                command.CommandText = "modificarUsuario";
                command.CommandType = CommandType.StoredProcedure;

                command.Parameters.Add(new SqlParameter("@nombre", usuario.Nombre));
                command.Parameters.Add(new SqlParameter("@apellido", usuario.Apellido));
                command.Parameters.Add(new SqlParameter("@fechaNacimiento", usuario.FechaNacimiento));
                command.Parameters.Add(new SqlParameter("@email", usuario.Email));
                command.Parameters.Add(new SqlParameter("@clave", usuario.Clave));

                command.ExecuteNonQuery();
            }


        }
    }

}


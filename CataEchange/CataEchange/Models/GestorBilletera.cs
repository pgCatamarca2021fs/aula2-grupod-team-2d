using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;

namespace CataEchange.Models
{
    public class GestorBilletera
    {
        string conectionString = ConfigurationManager.ConnectionStrings["CataExchange"].ToString();

        public List<Billetera> ListaBilletera()
        {
            List<Billetera> listado = new List<Billetera>();

            using (SqlConnection connection = new SqlConnection(this.conectionString))
            {
                connection.Open();

                SqlCommand command = connection.CreateCommand();
                command.CommandText = "listaBilletera";
                command.CommandType = CommandType.StoredProcedure;
                SqlDataReader dataReader = command.ExecuteReader();

                while (dataReader.Read())
                {
                    Billetera wallet = new Billetera();
                    wallet.IdBilletera = dataReader.GetInt32(0);
                    wallet.IdUsuario = dataReader.GetInt32(1);
                    wallet.ClavePublica = dataReader.GetString(2);
                    wallet.NombreCripto = dataReader.GetString(3);
                    wallet.CantidadCripto = dataReader.GetFloat(4);
                    wallet.Cotizacion = dataReader.GetFloat(5);

                    listado.Add(wallet);
                }
            }
            return listado;
        }

        public void CrearBilletera(Billetera billetera)
        {
            using (SqlConnection connection = new SqlConnection(this.conectionString))
            {
                connection.Open();

                SqlCommand command = connection.CreateCommand();
                command.CommandText = "crearBilletera";
                command.CommandType = CommandType.StoredProcedure;

                command.Parameters.Add(new SqlParameter("@idUsuario", billetera.IdUsuario ));
                command.Parameters.Add(new SqlParameter("@clavePublica", billetera.ClavePublica ));
                command.Parameters.Add(new SqlParameter("@nombreCripto", billetera.NombreCripto));
                command.Parameters.Add(new SqlParameter("@cantidadCripto", billetera.CantidadCripto ));
                command.Parameters.Add(new SqlParameter("@cotizacion", billetera.Cotizacion));

                command.ExecuteNonQuery();
            }

        }

        

        



    }
}

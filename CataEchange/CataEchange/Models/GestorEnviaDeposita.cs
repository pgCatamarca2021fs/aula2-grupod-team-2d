using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;

namespace CataEchange.Models
{
    public class GestorEnviaDeposita
    {
        string conectionString = ConfigurationManager.ConnectionStrings["CataExchange"].ToString();

        public List<EnviaDeposita> ListaEnviaDeposita()
        {
            List<EnviaDeposita> listaEnDe = new List<EnviaDeposita>();

            using (SqlConnection connection = new SqlConnection(this.conectionString))
            {
                connection.Open();

                SqlCommand command = connection.CreateCommand();
                command.CommandText = "listaEnviaDeposita";
                command.CommandType = CommandType.StoredProcedure;
                SqlDataReader dataReader = command.ExecuteReader();

                while (dataReader.Read())
                {
                    EnviaDeposita enDe = new EnviaDeposita();
                    enDe.IdEnviaDeposita = dataReader.GetInt32(0);
                    enDe.IdUsuario = dataReader.GetInt32(1);
                    enDe.IdCuentaPesos = dataReader.GetInt32(2);
                    enDe.Monto = dataReader.GetFloat(3);
                    enDe.TipoOperacion = dataReader.GetString(4);

                    listaEnDe.Add(enDe);
                }
            }
            return listaEnDe;
        }


        public void ModificarEnviaDeposita(EnviaDeposita enviaDeposita)
        {
            using (SqlConnection connection = new SqlConnection(this.conectionString))
            {
                connection.Open();

                SqlCommand command = connection.CreateCommand();
                command.CommandText = "modificarEnviaDeposita";
                command.CommandType = CommandType.StoredProcedure;

                command.Parameters.Add(new SqlParameter("@idUsuario", enviaDeposita.IdUsuario));
                command.Parameters.Add(new SqlParameter("@idCuentaPesos", enviaDeposita.IdCuentaPesos));
                command.Parameters.Add(new SqlParameter("@monto", enviaDeposita.Monto));
                command.Parameters.Add(new SqlParameter("@tipoOperacion", enviaDeposita.TipoOperacion));


                command.ExecuteNonQuery();
            }
        }
    }
}
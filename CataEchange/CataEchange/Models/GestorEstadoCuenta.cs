using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;

namespace CataEchange.Models
{
    public class GestorEstadoCuenta
    {
        string conectionString = ConfigurationManager.ConnectionStrings["CataExchange"].ToString();

        public List<EstadoCuentaP> ListaEstadoCuenta()
        {
            List<EstadoCuentaP> listaEstadoCuenta = new List<EstadoCuentaP>();

            using (SqlConnection connection = new SqlConnection(this.conectionString))
            {
                connection.Open();

                SqlCommand command = connection.CreateCommand();
                command.CommandText = "listaEstadoCuenta";
                command.CommandType = CommandType.StoredProcedure;
                SqlDataReader dataReader = command.ExecuteReader();

                while (dataReader.Read())
                {
                    EstadoCuentaP estadoCuenta = new EstadoCuentaP();
                    estadoCuenta.IdEstadoCuenta = dataReader.GetInt32(0);
                    estadoCuenta.IdCuentaPesos = dataReader.GetInt32(1);
                    estadoCuenta.EstadoCuenta = dataReader.GetString(2);

                    listaEstadoCuenta.Add(estadoCuenta);
                }
            }
            return listaEstadoCuenta;
        }

        public void ModificarEstadoCuenta(EstadoCuentaP estadoCuenta)
        {
            using (SqlConnection connection = new SqlConnection(this.conectionString))
            {
                connection.Open();

                SqlCommand command = connection.CreateCommand();
                command.CommandText = "modificarEstadoCuenta";
                command.CommandType = CommandType.StoredProcedure;

                command.Parameters.Add(new SqlParameter("@idCuentaPesos", estadoCuenta.IdCuentaPesos));
                command.Parameters.Add(new SqlParameter("@estadoCuenta", estadoCuenta.EstadoCuenta));



                command.ExecuteNonQuery();
            }
        }


    }
}
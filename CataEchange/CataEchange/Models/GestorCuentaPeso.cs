using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;

namespace CataEchange.Models
{
    public class GestorCuentaPeso
    {
        string conectionString = ConfigurationManager.ConnectionStrings["CataExchange"].ToString();

        public List<CuentaPeso> ListaCuentaPeso()
        {
            List<CuentaPeso> listaPeso = new List<CuentaPeso>();

            using (SqlConnection connection = new SqlConnection(this.conectionString))
            {
                connection.Open();

                SqlCommand command = connection.CreateCommand();
                command.CommandText = "listaCuentaPeso";
                command.CommandType = CommandType.StoredProcedure;
                SqlDataReader dataReader = command.ExecuteReader();

                while (dataReader.Read())
                {
                    CuentaPeso peso = new CuentaPeso();
                    peso.IdCuentaPeso = dataReader.GetInt32(0);
                    peso.IdUsuario = dataReader.GetInt32(1);
                    peso.Cbu = dataReader.GetString(2);
                    peso.Saldo = dataReader.GetFloat(3);

                    listaPeso.Add(peso);
                }
            }
            return listaPeso;
        }

        public void CrearCuentaPeso(CuentaPeso cuentaPeso)
        {
            using (SqlConnection connection = new SqlConnection(this.conectionString))
            {
                connection.Open();

                SqlCommand command = connection.CreateCommand();
                command.CommandText = "crearCuentaPeso";
                command.CommandType = CommandType.StoredProcedure;

                command.Parameters.Add(new SqlParameter("@idUsuario", cuentaPeso.IdUsuario));
                command.Parameters.Add(new SqlParameter("@cbu", cuentaPeso.Cbu));
                command.Parameters.Add(new SqlParameter("@saldo", cuentaPeso.Saldo));


                command.ExecuteNonQuery();
            }

        }
        public void ModificarCuentaPeso(CuentaPeso cuentaPeso)
        {
            using (SqlConnection connection = new SqlConnection(this.conectionString))
            {
                connection.Open();

                SqlCommand command = connection.CreateCommand();
                command.CommandText = "modificarCuentaPesos";
                command.CommandType = CommandType.StoredProcedure;

                command.Parameters.Add(new SqlParameter("@idUsuario", cuentaPeso.IdUsuario));
                command.Parameters.Add(new SqlParameter("@cbu", cuentaPeso.Cbu));
                command.Parameters.Add(new SqlParameter("@saldo", cuentaPeso.Saldo));


                command.ExecuteNonQuery();
            }


        }
    }

    
}
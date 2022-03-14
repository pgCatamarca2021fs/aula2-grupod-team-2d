using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;

namespace CataEchange.Models
{
    public class GestorComercia
    {
        string conectionString = ConfigurationManager.ConnectionStrings["CataExchange"].ToString();

        public List<Comercia> ListaComercia()
        {
            List<Comercia> listadoComerce = new List<Comercia>();

            using (SqlConnection connection = new SqlConnection(this.conectionString))
            {
                connection.Open();

                SqlCommand command = connection.CreateCommand();
                command.CommandText = "listaComercia";
                command.CommandType = CommandType.StoredProcedure;
                SqlDataReader dataReader = command.ExecuteReader();

                while (dataReader.Read())
                {
                    Comercia comerce = new Comercia();
                    comerce.IdComercia = dataReader.GetInt32(0);
                    comerce.IdCuentaPesos = dataReader.GetInt32(1);
                    comerce.IdCriptoMoneda = dataReader.GetInt32(2);
                    comerce.IdBilletera = dataReader.GetInt32(3);
                    comerce.CantidadCripto = dataReader.GetFloat(4);
                    comerce.CantidadPesos = dataReader.GetFloat(5);
                    comerce.TipoOperacion = dataReader.GetString(6);
                    comerce.FechaHora = dataReader.GetDateTime(7);

                    listadoComerce.Add(comerce);
                }
            }
            return listadoComerce;
        }

        public void ModificarComercia(Comercia Comercia)
        {
            using (SqlConnection connection = new SqlConnection(this.conectionString))
            {
                connection.Open();

                SqlCommand command = connection.CreateCommand();
                command.CommandText = "modificarGestorComercia";
                command.CommandType = CommandType.StoredProcedure;

                command.Parameters.Add(new SqlParameter("@idCuentaPesos",Comercia.IdCuentaPesos));
                command.Parameters.Add(new SqlParameter("@idCriptoMoneda", Comercia.IdCriptoMoneda));
                command.Parameters.Add(new SqlParameter("@idBilletera", Comercia.IdBilletera));
                command.Parameters.Add(new SqlParameter("@cantidadCripto", Comercia.CantidadCripto));
                command.Parameters.Add(new SqlParameter("@cantidadPesos", Comercia.CantidadPesos));
                command.Parameters.Add(new SqlParameter("@tipoDeOperacion", Comercia.TipoOperacion));
                command.Parameters.Add(new SqlParameter("@fechaHora", Comercia.FechaHora));


                command.ExecuteNonQuery();
            }
        }


    }
}
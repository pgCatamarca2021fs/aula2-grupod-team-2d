using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;

namespace CataEchange.Models
{
    public class GestorOperaCripto
    {
        string conectionString = ConfigurationManager.ConnectionStrings["CataExchange"].ToString();

        public List<OperaCripto> ListaOpCripto()
        {
            List<OperaCripto> listaOperaCripto = new List<OperaCripto>();

            using (SqlConnection connection = new SqlConnection(this.conectionString))
            {
                connection.Open();

                SqlCommand command = connection.CreateCommand();
                command.CommandText = "listaOpCripto";
                command.CommandType = CommandType.StoredProcedure;
                SqlDataReader dataReader = command.ExecuteReader();

                while (dataReader.Read())
                {
                    OperaCripto opCripto = new OperaCripto();
                    opCripto.IdOperaCripto = dataReader.GetInt32(0);
                    opCripto.IdBilletera = dataReader.GetInt32(1);
                    opCripto.IdCriptoMoneda = dataReader.GetInt32(2);
                    opCripto.CantidadCripto = dataReader.GetFloat(3);
                    opCripto.TipoOperacion = dataReader.GetString(4);
                    opCripto.FechaHora = dataReader.GetDateTime(5);
                    opCripto.Importe = dataReader.GetFloat(6);

                    listaOperaCripto.Add(opCripto);
                }
            }
            return listaOperaCripto;
        }

        public void ModificarOperaCripto(OperaCripto operaCripto)
        {
            using (SqlConnection connection = new SqlConnection(this.conectionString))
            {
                connection.Open();

                SqlCommand command = connection.CreateCommand();
                command.CommandText = "modificarOperaCripto";
                command.CommandType = CommandType.StoredProcedure;

                command.Parameters.Add(new SqlParameter("@idBilletera", operaCripto.IdBilletera));
                command.Parameters.Add(new SqlParameter("@idCriptoMoneda", operaCripto.IdCriptoMoneda ));
                command.Parameters.Add(new SqlParameter("@cantidadCripto", operaCripto.CantidadCripto));
                command.Parameters.Add(new SqlParameter("@tipoOperacion", operaCripto.TipoOperacion));
                command.Parameters.Add(new SqlParameter("@fechaHora", operaCripto.FechaHora));
                command.Parameters.Add(new SqlParameter("@importe", operaCripto.Importe));



                command.ExecuteNonQuery();
            }
        }

    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;

namespace CataEchange.Models
{
    public class GestorOperacionePeso
    {
        string conectionString = ConfigurationManager.ConnectionStrings["CataExchange"].ToString();

        public List<OperacionePeso> ListaOperacionesP()
        {
            List<OperacionePeso> listaOperacionP = new List<OperacionePeso>();

            using (SqlConnection connection = new SqlConnection(this.conectionString))
            {
                connection.Open();

                SqlCommand command = connection.CreateCommand();
                command.CommandText = "listaOperacionesP";
                command.CommandType = CommandType.StoredProcedure;
                SqlDataReader dataReader = command.ExecuteReader();

                while (dataReader.Read())
                {
                    OperacionePeso op = new OperacionePeso();
                    op.IdOperacionesP = dataReader.GetInt32(0);
                    op.IdCuentaPesos = dataReader.GetInt32(1);
                    op.TipoOperacion = dataReader.GetString(2);
                    op.Importe = dataReader.GetFloat(3);

                    listaOperacionP.Add(op);
                }
            }
            return listaOperacionP;
        }


        public void ModificarOperacionePeso(OperacionePeso operacionePeso)
        {
            using (SqlConnection connection = new SqlConnection(this.conectionString))
            {
                connection.Open();

                SqlCommand command = connection.CreateCommand();
                command.CommandText = "modificarOperacionePeso";
                command.CommandType = CommandType.StoredProcedure;

                command.Parameters.Add(new SqlParameter("@idCuentaPesos", operacionePeso.IdCuentaPesos));
                command.Parameters.Add(new SqlParameter("@tipoOperacion", operacionePeso.TipoOperacion));
                command.Parameters.Add(new SqlParameter("@importe", operacionePeso.Importe));



                command.ExecuteNonQuery();
            }
        }
    }
}
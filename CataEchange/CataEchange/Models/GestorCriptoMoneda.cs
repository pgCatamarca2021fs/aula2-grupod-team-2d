using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;

namespace CataEchange.Models
{
    public class GestorCriptoMoneda
    {
        string conectionString = ConfigurationManager.ConnectionStrings["CataExchange"].ToString();

        public List<CriptoMoneda> ListaCriptoMoneda()
        {
            List<CriptoMoneda> listaCripto = new List<CriptoMoneda>();

            using (SqlConnection connection = new SqlConnection(this.conectionString))
            {
                connection.Open();

                SqlCommand command = connection.CreateCommand();
                command.CommandText = "listaCriptoMoneda";
                command.CommandType = CommandType.StoredProcedure;
                SqlDataReader dataReader = command.ExecuteReader();

                while (dataReader.Read())
                {
                    CriptoMoneda criptoMoney = new CriptoMoneda();
                    criptoMoney.IdCriptoMoneda = dataReader.GetInt32(0);
                    criptoMoney.NombreCripto = dataReader.GetString(1);
                    criptoMoney.Abreviatura = dataReader.GetString(2);
                    criptoMoney.CotizacionCripto = dataReader.GetFloat(3);

                    listaCripto.Add(criptoMoney);
                }
            }
            return listaCripto;
        }
    }
}
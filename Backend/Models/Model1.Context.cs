﻿//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace CataExchange2.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class CataExchangeEntities : DbContext
    {
        public CataExchangeEntities()
            : base("name=CataExchangeEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Billetera> Billetera { get; set; }
        public virtual DbSet<Comercia> Comercia { get; set; }
        public virtual DbSet<criptoMonedas> criptoMonedas { get; set; }
        public virtual DbSet<cuentaPesos> cuentaPesos { get; set; }
        public virtual DbSet<enviaDeposita> enviaDeposita { get; set; }
        public virtual DbSet<estadoCuenta> estadoCuenta { get; set; }
        public virtual DbSet<operacionesPesos> operacionesPesos { get; set; }
        public virtual DbSet<OperaCripto> OperaCripto { get; set; }
        public virtual DbSet<Usuarios> Usuarios { get; set; }
    }
}

USE [CataExchange]
GO
/****** Object:  StoredProcedure [dbo].[agregarBilletera]    Script Date: 3/18/2022 10:58:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER procedure [dbo].[agregarBilletera]

  @idBilletera int,
  @idUsuario int,
  @clavePublica varchar(500),
  @nombreCripto varchar(50),
  @cantidadCripto float,
  @cotizacion float
  

 as

 Begin

  select idBilletera, idUsuario, clavePublica, nombreCripto, cantidadCripto, cotizacion from dbo.billeteras


   where idBilletera = @idBilletera and idUsuario = @idUsuario and clavePublica = @clavePublica and nombreCripto = @nombreCripto and cantidadCripto = @cantidadCripto and cotizacion = @cotizacion

   END

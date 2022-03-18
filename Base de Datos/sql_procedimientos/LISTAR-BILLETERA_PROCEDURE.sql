USE [CataExchange]
GO
/****** Object:  StoredProcedure [dbo].[listarBilletera]    Script Date: 3/18/2022 11:00:23 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER procedure [dbo].[listarBilletera]

  @idBilletera int

 as

 Begin

  select idBilletera, idUsuario, clavePublica, nombreCripto, cantidadCripto, cotizacion from dbo.billeteras


   where idBilletera = @idBilletera

   END



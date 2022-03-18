USE [CataExchange]
GO
/****** Object:  StoredProcedure [dbo].[agregarCuentaPesos]    Script Date: 3/18/2022 10:59:08 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER procedure [dbo].[agregarCuentaPesos]

  @idUsuario int,
  @cbu varchar(100),
  @saldo money
  
 as
  
 Begin

INSERT INTO dbo.cuentaPesos
	([idUsuario],
	[cbu],
	[saldo])

	VALUES 
	(@idUsuario,
	@cbu,
	@saldo)

   END

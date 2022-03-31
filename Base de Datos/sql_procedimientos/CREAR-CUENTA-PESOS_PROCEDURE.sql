USE [CataExchange]
GO
/****** Object:  StoredProcedure [dbo].[crearCuentaPesos]    Script Date: 3/18/2022 10:59:49 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[crearCuentaPesos]
	@idCuentaPesos int,
	@idUsuario int,
	@cbu varchar(100),
	@saldo money
	
AS
BEGIN
	INSERT INTO dbo.cuentaPesos
	([idUsuario],
	[cbu],
	[saldo])

	VALUES 
	(@idUsuario,
	@cbu,
	@saldo)
END

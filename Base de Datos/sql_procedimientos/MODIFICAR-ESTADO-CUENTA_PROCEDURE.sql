USE [CataExchange]
GO
/****** Object:  StoredProcedure [dbo].[modificarEstadoCuenta]    Script Date: 3/18/2022 11:16:17 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[modificarEstadoCuenta]
	@idEstadoCuenta int,
	@idCuentaPesos int,
	@estadoCuenta varchar(10)
	
AS
BEGIN
	UPDATE estadoCuenta
	SET idCuentaPesos = @idCuentaPesos,
		estadoCuenta = @estadoCuenta

	WHERE idEstadoCuenta = @idEstadoCuenta
END

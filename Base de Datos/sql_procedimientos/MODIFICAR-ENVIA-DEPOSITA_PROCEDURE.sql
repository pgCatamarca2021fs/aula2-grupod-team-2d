USE [CataExchange]
GO
/****** Object:  StoredProcedure [dbo].[modificarEnviaDeposita]    Script Date: 3/18/2022 11:16:05 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[modificarEnviaDeposita]
	@idEnviaDeposita int,
	@idUsuario int,
	@idCuentaPesos int,
	@monto money,
	@tipoOperacion varchar(20)
AS
BEGIN
	UPDATE enviaDeposita

	SET idUsuario = @idUsuario,
		idCuentaPesos = @idCuentaPesos,
		monto = @monto,
		tipoOperacion = @tipoOperacion

	WHERE idEnviaDeposita = @idEnviaDeposita
END

USE [CataExchange]
GO
/****** Object:  StoredProcedure [dbo].[modificarCuentaPesos]    Script Date: 3/18/2022 11:15:47 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[modificarCuentaPesos]
	@idCuentaPesos int,
	@idUsuario int,
	@cbu varchar(100),
	@saldo money
AS
BEGIN
	UPDATE cuentaPesos
	SET idUsuario = @idUsuario,
		cbu = @cbu,
		saldo = @saldo

	WHERE idCuentaPesos = @idCuentaPesos
END

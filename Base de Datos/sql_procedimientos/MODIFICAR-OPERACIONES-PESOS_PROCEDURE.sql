USE [CataExchange]
GO
/****** Object:  StoredProcedure [dbo].[modificarOperacionesPesos]    Script Date: 3/18/2022 11:16:30 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[modificarOperacionesPesos]
	@idOperacionesP int,
	@idCuentaPesos int,
	@tipoOperacion varchar(20),
	@importe money
AS
BEGIN
	UPDATE operacionesPesos
	SET idCuentaPesos = @idCuentaPesos,
		tipoOperacion = @tipoOperacion,
		importe = @importe

	WHERE idOperacionesP = @idOperacionesP
END

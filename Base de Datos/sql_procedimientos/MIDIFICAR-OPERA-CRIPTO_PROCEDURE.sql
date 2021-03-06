USE [CataExchange]
GO
/****** Object:  StoredProcedure [dbo].[modificarOperaCripto]    Script Date: 3/18/2022 11:16:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[modificarOperaCripto]
	@idOperaCripto int,
	@idBilletera int,
	@idCriptoMoneda int,
	@cantidadCripto float,
	@tipoOperacion varchar(20),
	@fechaHora dateTime,
	@importe money
AS
BEGIN
	UPDATE OperaCripto
	SET idBilletera = @idBilletera,
		idCriptoMoneda = @idCriptoMoneda,
		cantidadCripto = @cantidadCripto,
		tipoOperacion = @tipoOperacion,
		fechaHora = @fechaHora,
		importe = @importe

	WHERE idOperaCripto = @idOperaCripto
END

USE [CataExchange]
GO
/****** Object:  StoredProcedure [dbo].[modificarComercia]    Script Date: 3/18/2022 11:10:38 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[modificarComercia]
	@idComercia int,
	@idCuentaPesos int,
	@idCriptoMoneda int,
	@idBilletera int,
	@cantidadCripto float,
	@cantidadPesos money,
	@tipoOperacion varchar(20),
	@fechaHora dateTime
AS
BEGIN
	UPDATE Comercia
	SET idCuentaPesos = @idCuentaPesos,
		idCriptoMoneda = @idCriptoMoneda,
		idBilletera = @idBilletera,
		cantidadCripto = @cantidadCripto,
		tipoOperacion = @tipoOperacion,
		fechaHora = @fechaHora

	WHERE idComercia = @idComercia
END

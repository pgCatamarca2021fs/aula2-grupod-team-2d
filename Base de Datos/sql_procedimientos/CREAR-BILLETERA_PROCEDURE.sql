USE [CataExchange]
GO
/****** Object:  StoredProcedure [dbo].[crearBilletera]    Script Date: 3/18/2022 10:59:22 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[crearBilletera] 
	@idUsuario int,
	@clavePublica varchar(500),
	@nombreCripto varchar(50),
	@cantidadCripto float,
	@cotizacion float
AS
BEGIN
	INSERT INTO dbo.Billetera
	([idUsuario],
	[clavePublica],
	[nombreCripto],
	[cantidadCripto],
	[cotizacion])

	VALUES 
	(@idUsuario,
	@clavePublica,
	@nombreCripto,
	@cantidadCripto,
	@cotizacion)
END

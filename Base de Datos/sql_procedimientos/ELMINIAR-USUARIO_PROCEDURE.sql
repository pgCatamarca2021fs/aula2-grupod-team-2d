USE [CataExchange]
GO
/****** Object:  StoredProcedure [dbo].[eliminarUsuario]    Script Date: 3/18/2022 10:43:44 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[eliminarUsuario]
	@idUsuario int,
	@nombre varchar(20),
	@apellido varchar(20),
	@dni varchar(8),
	@fechaNacimiento date,
	@email varchar(50),
	@clave varchar(15)
AS
BEGIN
	DELETE FROM Usuarios 
	
	WHERE idUsuario = @idUsuario
	
END

USE [CataExchange]
GO
/****** Object:  StoredProcedure [dbo].[modificarUsuario]    Script Date: 3/18/2022 10:34:39 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[modificarUsuario]
	@idUsuario int,
	@nombre varchar(20),
	@apellido varchar(20),
	@dni varchar(8),
	@fechaNacimiento date,
	@email varchar(50),
	@clave varchar(15)
AS
BEGIN
	
	UPDATE Usuarios
	SET    Nombre = @nombre,
           Apellido = @apellido,
		   dni = @dni,
           fechaNacimiento = @fechaNacimiento,
           email = @email,
		   clave = @clave

		WHERE idUsuario = @idUsuario
END



USE [CataExchange]
GO
/****** Object:  StoredProcedure [dbo].[crearUsuario]    Script Date: 3/18/2022 10:47:17 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[crearUsuario]
	@nombre varchar(20),
	@apellido varchar(20),
	@dni varchar(8),
	@fechaNacimiento date,
	@email varchar (50),
	@clave varchar(15)
	
AS
BEGIN
	INSERT INTO dbo.Usuarios
	([Nombre],
	[Apellido],
	[dni],
	[fechaNacimiento],
	[email],
	[clave])

	VALUES 
	(@nombre,
	@apellido,
	@dni,
	@fechaNacimiento,
	@email,
	@clave)
END

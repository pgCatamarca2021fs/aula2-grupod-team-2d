USE [CataExchange]
GO
/****** Object:  StoredProcedure [dbo].[listarEstadoCuenta]    Script Date: 3/18/2022 11:09:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
	
ALTER PROCEDURE [dbo].[listarEstadoCuenta]
	
AS
BEGIN
	
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT * FROM estadoCuenta

END

USE [CataExchange]
GO
/****** Object:  StoredProcedure [dbo].[listarUsuarios]    Script Date: 3/18/2022 11:04:26 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
	
ALTER PROCEDURE [dbo].[listarUsuarios]
	
AS
BEGIN
	
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT * FROM Usuarios

END

USE [CataExchange]
GO
/****** Object:  StoredProcedure [dbo].[listarCuentaPesos]    Script Date: 3/18/2022 11:07:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[listarCuentaPesos]
	
AS
BEGIN
		SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT * FROM cuentaPesos
	
END

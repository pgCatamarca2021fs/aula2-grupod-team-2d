USE [CataExchange]
GO
/****** Object:  StoredProcedure [dbo].[listarOperaCripto]    Script Date: 3/18/2022 11:10:08 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
	
ALTER PROCEDURE [dbo].[listarOperaCripto]
	
AS
BEGIN
	
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT * FROM OperaCripto

END

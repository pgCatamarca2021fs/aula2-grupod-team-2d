USE [CataExchange]
GO
/****** Object:  StoredProcedure [dbo].[listarEnviaDeposita]    Script Date: 3/18/2022 11:09:28 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
	
ALTER PROCEDURE [dbo].[listarEnviaDeposita]
	
AS
BEGIN
	
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT * FROM enviaDeposita

END

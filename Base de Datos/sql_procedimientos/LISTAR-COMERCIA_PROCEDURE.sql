USE [CataExchange]
GO
/****** Object:  StoredProcedure [dbo].[listarComercia]    Script Date: 3/18/2022 11:00:34 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[listarComercia]
	
AS
BEGIN
	
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT * FROM Comercia

END

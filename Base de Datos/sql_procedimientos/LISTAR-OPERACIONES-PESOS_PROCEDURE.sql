USE [CataExchange]
GO
/****** Object:  StoredProcedure [dbo].[listarOperacionesPesos]    Script Date: 3/18/2022 11:09:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
	
ALTER PROCEDURE [dbo].[listarOperacionesPesos]
	
AS
BEGIN
	
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT * FROM operacionesPesos

END

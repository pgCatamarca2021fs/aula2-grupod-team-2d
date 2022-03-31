create database CataExchange

use CataExchange


CREATE TABLE Usuarios(
idUsuario INT PRIMARY KEY IDENTITY(1, 1) NOT NULL,
Nombre VARCHAR(20) NOT NULL,
Apellido VARCHAR(20) NOT NULL,
DNI varchar(8) NOT NULL,
fechaNacimiento date NOT NULL,
email varchar(50) not null,
clave varchar(15) not null
)

create table cuentaPesos (
idCuentaPesos int primary key identity(1,1) not null,
idUsuario int,
cbu varchar(100) not null,
saldo money
)

create table estadoCuenta(
idEstadoCuenta int primary key identity(1,1) not null,
idCuentaPesos int ,
estadoCuenta varchar(10) not null
)

create table enviaDeposita(
idEnviaDeposita int primary key identity(1,1) not null,
idUsuario int FOREIGN KEY REFERENCES Usuarios(idUsuario),
idCuentaPesos int FOREIGN KEY REFERENCES cuentaPesos(idCuentaPesos),
monto money not null,
tipoOperacion varchar(20) not null,
)

create table billeteras(
idBilletera int primary key identity(1,1) not null,
idUsuario int,
clavePublica varchar(500) not null,
nombreCripto varchar(50),
cantidadCripto float,
cotizacion float
)

create table operacionesPesos(
idOperacionesP int primary key identity(1,1) not null,
idCuentaPesos int,
tipoOperacion varchar(20),
importe money not null
)

create table criptoMonedas(
idCriptoMoneda int primary key identity(1,1) not null,
nombreCripto varchar(500),
abreviatura varchar(50),
cotizacion_cripto float
)

create table operaCripto(
idOperaCripto int primary key identity(1,1) not null,
idBilletera int FOREIGN KEY REFERENCES Billeteras(idBilletera),
idCriptoMoneda int FOREIGN KEY REFERENCES Criptomonedas(idCriptoMoneda),
cantidadCripto float,
tipoOperacion varchar(20),
fechaHora datetime,
importe money
)

create table comercia(
idComercia int primary key identity(1,1) not null,
idCuentaPesos int FOREIGN KEY REFERENCES cuentaPesos(idCuentaPesos),
idCriptoMoneda int FOREIGN KEY REFERENCES Criptomonedas(idCriptoMoneda),
idBilletera int FOREIGN KEY REFERENCES Billeteras(idBilletera),
cantidadCripto float,
cantidadPesos money,
tipoOperacion varchar(20),
fechaHora datetime
)

-----------DELETE RULE AND UPDATE RULE--------------------------------------------------------------

ALTER TABLE [dbo].[CuentaPesos]  WITH CHECK ADD  CONSTRAINT [FK_CuentaPesos_Usuarios] FOREIGN KEY([idUsuario])
REFERENCES [dbo].[usuarios] ([idusuario])
ON DELETE CASCADE
on UPDATE CASCADE
GO

ALTER TABLE [dbo].[cuentaPesos] CHECK CONSTRAINT [FK_CuentaPesos_Usuarios]
GO



ALTER TABLE [dbo].[estadoCuenta]  WITH CHECK ADD  CONSTRAINT [FK_EstadoCuenta_CuentaPesos] FOREIGN KEY([idCuentaPesos])
REFERENCES [dbo].[cuentaPesos] ([idCuentaPesos])
ON DELETE CASCADE
on UPDATE CASCADE
GO

ALTER TABLE [dbo].[estadoCuenta] CHECK CONSTRAINT [FK_EstadoCuenta_CuentaPesos]
GO




ALTER TABLE [dbo].[operacionesPesos]  WITH CHECK ADD  CONSTRAINT [FK_OperacionesPesos_CuentaPesos] FOREIGN KEY([idCuentaPesos])
REFERENCES [dbo].[cuentaPesos] ([idCuentaPesos])
ON DELETE CASCADE
on UPDATE CASCADE
GO

ALTER TABLE [dbo].[operacionesPesos] CHECK CONSTRAINT [FK_OperacionesPesos_CuentaPesos]
GO

ALTER TABLE [dbo].[billeteras]  WITH CHECK ADD  CONSTRAINT [FK_Billeteras_Usuarios] FOREIGN KEY([idUsuario])
REFERENCES [dbo].[usuarios] ([idUsuario])
ON DELETE CASCADE
on UPDATE CASCADE
GO

ALTER TABLE [dbo].[billeteras] CHECK CONSTRAINT [FK_Billeteras_Usuarios]
GO


----------------delete and update rules de 'enviaDeposita'
-- ALTER TABLE [dbo].[enviaDeposita]  WITH CHECK ADD  CONSTRAINT [FK_EnviaDeposita_Usuarios] FOREIGN KEY([idUsuario])
-- REFERENCES [dbo].[usuarios] ([idusuario])
-- ON DELETE CASCADE
-- GO

-- ALTER TABLE [dbo].[enviaDeposita] CHECK CONSTRAINT [FK_EnviaDeposita_Usuarios]
-- GO
-- -------------
-- ALTER TABLE [dbo].[enviaDeposita]  WITH CHECK ADD  CONSTRAINT [FK_EnviaDeposita_CuentaPesos] FOREIGN KEY([idCuentaPesos])
-- REFERENCES [dbo].[cuentaPesos] ([idCuentaPesos])
-- ON DELETE CASCADE
-- GO

-- ALTER TABLE [dbo].[enviaDeposita] CHECK CONSTRAINT [FK_EnviaDeposita_CuentaPesos]
-- GO
------------fin eviaDeposita



----------------delete and update rules de 'operaCripto'
-- ALTER TABLE [dbo].[operaCripto]  WITH CHECK ADD  CONSTRAINT [FK_OperaCripto_Billeteras] FOREIGN KEY([idBilletera])
-- REFERENCES [dbo].[billeteras] ([idBilletera])
-- ON DELETE CASCADE
-- GO

-- ALTER TABLE [dbo].[operaCripto] CHECK CONSTRAINT [FK_OperaCripto_Billeteras]
-- GO
-- ---------------
-- ALTER TABLE [dbo].[operaCripto]  WITH CHECK ADD  CONSTRAINT [FK_OperaCripto_CriptoMoneda] FOREIGN KEY([idCriptoMoneda])
-- REFERENCES [dbo].[criptoMonedas] ([idCriptoMoneda])
-- ON DELETE CASCADE
-- GO

-- ALTER TABLE [dbo].[operaCripto] CHECK CONSTRAINT [FK_OperaCripto_CriptoMoneda]
-- GO
------------fin operaCripto


----------------delete and update rules de 'comercia'

-- ALTER TABLE [dbo].[comercia]  WITH CHECK ADD  CONSTRAINT [FK_Comercia_CuentaPesos] FOREIGN KEY([idCuentaPesos])
-- REFERENCES [dbo].[cuentaPesos] ([idCuentaPesos])
-- ON DELETE CASCADE
-- GO

-- ALTER TABLE [dbo].[comercia] CHECK CONSTRAINT [FK_Comercia_CuentaPesos]
-- GO
-- -----------
-- ALTER TABLE [dbo].[comercia]  WITH CHECK ADD  CONSTRAINT [FK_Comercia_CriptoMonedas] FOREIGN KEY([idCriptoMoneda])
-- REFERENCES [dbo].[criptoMonedas] ([idCriptoMoneda])
-- ON DELETE CASCADE
-- GO

-- ALTER TABLE [dbo].[comercia] CHECK CONSTRAINT [FK_Comercia_CriptoMonedas]
-- GO
-- -----------

-- ALTER TABLE [dbo].[comercia]  WITH CHECK ADD  CONSTRAINT [FK_Comercia_Billetera] FOREIGN KEY([idBilletera])
-- REFERENCES [dbo].[billeteras] ([idBilletera])
-- ON DELETE CASCADE
-- GO

-- ALTER TABLE [dbo].[comercia] CHECK CONSTRAINT [FK_Comercia_Billetera]
-- GO
------------fin comercia

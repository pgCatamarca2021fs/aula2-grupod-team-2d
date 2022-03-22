import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainIndexComponent } from './main-index/main-index.component';
import { SectionIndexComponent } from './section-index/section-index.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';


// RUTAS
import { AppRoutingModule } from './app-routing.module';
import { NavbarLateralComponent } from './navbar-lateral/navbar-lateral.component';
import { CardInfoCriptoComponent } from './card-info-cripto/card-info-cripto.component';
import { WalletComponent } from './wallet/wallet.component';
import { MercadoCryptoComponent } from './mercado-crypto/mercado-crypto.component';
import { SwapComponent } from './swap/swap.component';
import { FormRegistroComponent } from './form-registro/form-registro.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { BitcoinComponent } from './criptomonedas/bitcoin/bitcoin.component';
import { DogecoinComponent } from './criptomonedas/dogecoin/dogecoin.component';
import { BinancecoinComponent } from './criptomonedas/binancecoin/binancecoin.component';
import { EthereumComponent } from './criptomonedas/ethereum/ethereum.component';
import { CardanoComponent } from './criptomonedas/cardano/cardano.component';
import { DaiComponent } from './criptomonedas/dai/dai.component';
import { SolanaComponent } from './criptomonedas/solana/solana.component';
import { SmoothLovePotionComponent } from './criptomonedas/smooth-love-potion/smooth-love-potion.component';
import { UsdtComponent } from './criptomonedas/usdt/usdt.component';
import { UsuarioComponent } from './componente/usuario/usuario.component';
import { BilleteraComponent } from './componente/billetera/billetera.component';
import { CriptoMonedaComponent } from './componente/cripto-moneda/cripto-moneda.component';
import { ComerciaComponent } from './componente/comercia/comercia.component';
import { CuentaPesoComponent } from './componente/cuenta-peso/cuenta-peso.component';
import { EnviaDepositaComponent } from './componente/envia-deposita/envia-deposita.component';
import { EstadoCuentaComponent } from './componente/estado-cuenta/estado-cuenta.component';
import { OperaCriptoComponent } from './componente/opera-cripto/opera-cripto.component';
import { OperacionePesoComponent } from './componente/operacione-peso/operacione-peso.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PerfilComponent } from './perfil/perfil.component';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainIndexComponent,
    SectionIndexComponent,
    DashboardComponent,
    HomeComponent,
    NavbarLateralComponent,
    CardInfoCriptoComponent,
    WalletComponent,
    MercadoCryptoComponent,
    SwapComponent,
    FormRegistroComponent,
    PruebasComponent,
    FormLoginComponent,
    SobreNosotrosComponent,
    QuienesSomosComponent,
    BitcoinComponent,
    DogecoinComponent,
    BinancecoinComponent,
    EthereumComponent,
    CardanoComponent,
    DaiComponent,
    SolanaComponent,
    SmoothLovePotionComponent,
    UsdtComponent,
    UsuarioComponent,
    BilleteraComponent,
    CriptoMonedaComponent,
    ComerciaComponent,
    CuentaPesoComponent,
    EnviaDepositaComponent,
    EstadoCuentaComponent,
    OperaCriptoComponent,
    OperacionePesoComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    MatGridListModule

  ],
  providers: [
      AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

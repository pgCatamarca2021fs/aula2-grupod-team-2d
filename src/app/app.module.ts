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

// RUTAS
import { AppRoutingModule } from './app-routing.module';
import { NavbarLateralComponent } from './navbar-lateral/navbar-lateral.component';
import { CardInfoCriptoComponent } from './card-info-cripto/card-info-cripto.component';
import { WalletComponent } from './wallet/wallet.component';
import { MercadoCryptoComponent } from './mercado-crypto/mercado-crypto.component';
import { SwapComponent } from './swap/swap.component';
import { PruebasComponent } from './pruebas/pruebas.component';

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
    PruebasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainIndexComponent } from './main-index/main-index.component';
import { SectionIndexComponent } from './section-index/section-index.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
//import { ReactiveFormsModule } from '@angular/forms';

// RUTAS
import { AppRoutingModule } from './app-routing.module';
import { NavbarLateralComponent } from './navbar-lateral/navbar-lateral.component';
import { CardInfoCriptoComponent } from './card-info-cripto/card-info-cripto.component';
//import { FormRegistroComponent } from './form-registro/form-registro.component';

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
    //FormRegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    //ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

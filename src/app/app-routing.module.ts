import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WalletComponent } from './wallet/wallet.component';
import { PruebasComponent } from './pruebas/pruebas.component';

import { MercadoCryptoComponent } from './mercado-crypto/mercado-crypto.component';
import { SwapComponent } from './swap/swap.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'swap', component: SwapComponent },
  { path: 'billetera', component: WalletComponent },
  { path: 'criptos', component: MercadoCryptoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  { path: 'prueba', component: PruebasComponent },
  { path: 'bitcoin', component: BitcoinComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

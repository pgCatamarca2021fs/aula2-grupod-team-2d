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
import { BitcoinComponent } from './criptomonedas/bitcoin/bitcoin.component';
import { EthereumComponent } from './criptomonedas/ethereum/ethereum.component';
import { DaiComponent } from './criptomonedas/dai/dai.component';
import { SmoothLovePotionComponent } from './criptomonedas/smooth-love-potion/smooth-love-potion.component';
import { DogecoinComponent } from './criptomonedas/dogecoin/dogecoin.component';
import { UsdtComponent } from './criptomonedas/usdt/usdt.component';
import { BinancecoinComponent } from './criptomonedas/binancecoin/binancecoin.component';
import { CardanoComponent } from './criptomonedas/cardano/cardano.component';
import { SolanaComponent } from './criptomonedas/solana/solana.component';
import {PerfilComponent} from './perfil/perfil.component';
import {AuthGuard} from './auth/auth.guard';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'swap', component: SwapComponent, canActivate: [AuthGuard] },
  { path: 'billetera', component: WalletComponent, canActivate: [AuthGuard] },
  { path: 'criptos', component: MercadoCryptoComponent, canActivate: [AuthGuard] },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  { path: 'prueba', component: PruebasComponent },
  { path: 'bitcoin', component: BitcoinComponent },
  { path: 'dogecoin', component: DogecoinComponent },
  { path: 'ethereum', component: EthereumComponent },
  { path: 'binancecoin', component: BinancecoinComponent },
  { path: 'solana', component: SolanaComponent },
  { path: 'cardano', component: CardanoComponent },
  { path: 'usdt', component: UsdtComponent },
  { path: 'dai', component: DaiComponent },
  { path: 'slp', component: SmoothLovePotionComponent },
  { path: 'perfil', component: PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, relativeLinkResolution: 'legacy', scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

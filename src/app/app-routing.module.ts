import { MainNavComponent } from './pages/main-nav/main-nav.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [

  { path: '', component : MainNavComponent, children: [
    { path: 'tarifs', loadChildren: () => import('./pages/price/price.module').then(m => m.PriceModule) }, ]
  },
  { path: 'auth', loadChildren: () =>  import('./components/auth/auth.module').then(m  => m.AuthModule) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

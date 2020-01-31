import { PresentationComponent } from './pages/presentation/presentation.component';
import { MainNavComponent } from './pages/main-nav/main-nav.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [

  { path: '', component : MainNavComponent, children: [
    { path: '', redirectTo: 'presentation', pathMatch: 'full'},
    { path: 'presentation', component: PresentationComponent},
    { path: 'tarifs', loadChildren: () => import('./pages/price/price.module').then(m => m.PriceModule) },
    { path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule) },
    { path: 'representations', loadChildren:
    () => import('./pages/representation/representation.module').then(m => m.RepresentationModule) },
    { path: 'artistes', loadChildren: () => import('./pages/artist/artist.module').then(m => m.ArtistModule) }, ] },
    { path: 'auth', loadChildren: () =>  import('./components/auth/auth.module').then(m  => m.AuthModule) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

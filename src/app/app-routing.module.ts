import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { MensagemComponent } from './mensagem/mensagem.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroiDetalheComponent } from './heroi-detalhe/heroi-detalhe.component';

const routes: Routes = [
	{path: '',redirectTo:'/dashboard', pathMatch: 'full'},
	{path:'herois',component:HeroComponent},
	{path:'dashboard', component:DashboardComponent},

	//:id e' um placeholder para um id que vier pela url
	{path:'detail/:id',component:HeroiDetalheComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}


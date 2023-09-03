import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
	{
		path: 'auth',
	  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
	},
	{
		path: '',
		//canActivate: [AuthGuard],
		//canLoad: [AuthGuard],
		loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
	},
	
	{
		path: 'landig',
		loadChildren: () => import('./pages/landing-page/landing-page.module').then(m => m.LandingPageModule)
	},
	{
		path: '**',
		loadChildren: () => import('./pages/not-found-page/not-found-page.module').then(m => m.NotFoundPageModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {
		preloadingStrategy: PreloadAllModules,
		scrollPositionRestoration: 'enabled'
	})],
	exports: [RouterModule]
})
export class AppRoutingModule { }
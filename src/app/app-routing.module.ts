import { PreloadAllModules, RouterModule, Routes, mapToCanActivate } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '@shared/guards/auth.guard';
import { AppNotfoundComponent } from './pages/app.notfound.component';
import { AppErrorComponent } from './pages/app.error.component';
import { AppAccessdeniedComponent } from './pages/app.accessdenied.component';

const routes: Routes = [
	{
		path: 'auth',
	  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
	},
	{
		path: '',
		canActivate: mapToCanActivate([AuthGuard]),
		//canLoad: [AuthGuard],
		loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
	},

	{
		path: 'admin',
		loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
	},
	
	// {
	// 	path: 'landing',
	// 	loadChildren: () => import('./pages/landing-page/landing-page.module').then(m => m.LandingPageModule)
	// },
	{ path: 'error', component: AppErrorComponent },
	{ path: 'access', component: AppAccessdeniedComponent },
	{
		path: '**',
		component: AppNotfoundComponent
		//loadChildren: () => import('./pages/not-found-page/not-found-page.module').then(m => m.NotFoundPageModule)
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
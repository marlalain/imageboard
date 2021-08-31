import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardComponent,
	},
	{
		path: 'posts',
		pathMatch: 'full',
		loadChildren: () =>
			import('./pages/post/post.module').then((module) => module.PostModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}

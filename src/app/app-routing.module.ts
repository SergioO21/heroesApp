import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundPageComponent } from "./shared/pages";
import {
	canActivateAuth,
	canActivatePublic,
	canMatchAuth,
} from "./auth/guards";

const routes: Routes = [
	{
		path: "auth",
		loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
		canActivate: [canActivatePublic],
	},
	{
		path: "heroes",
		loadChildren: () =>
			import("./heroes/heroes.module").then((m) => m.HeroesModule),
		canActivate: [canActivateAuth],
		canMatch: [canMatchAuth],
	},
	{
		path: "404",
		component: NotFoundPageComponent,
	},
	{
		path: "",
		redirectTo: "heroes",
		pathMatch: "full",
	},
	{
		path: "**",
		redirectTo: "404",
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}

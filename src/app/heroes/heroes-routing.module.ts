import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
	HeroPageComponent,
	LayoutPageComponent,
	ListPageComponent,
	NewHeroPageComponent,
	SearchPageComponent,
} from "./pages";

const routes: Routes = [
	{
		path: "",
		component: LayoutPageComponent,
		children: [
			{
				path: "new-hero",
				component: NewHeroPageComponent,
			},
			{
				path: "edit/:id",
				component: NewHeroPageComponent,
			},
			{
				path: "list",
				component: ListPageComponent,
			},
			{
				path: "search",
				component: SearchPageComponent,
			},
			{
				path: ":id",
				component: HeroPageComponent,
			},
			{
				path: "**",
				redirectTo: "list",
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class HeroesRoutingModule {}

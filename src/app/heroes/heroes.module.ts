import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroesRoutingModule } from "./heroes-routing.module";
import {
	HeroPageComponent,
	LayoutPageComponent,
	SearchPageComponent,
	ListPageComponent,
	NewHeroPageComponent,
} from "./pages";

@NgModule({
	declarations: [
		HeroPageComponent,
		LayoutPageComponent,
		ListPageComponent,
		NewHeroPageComponent,
		SearchPageComponent,
	],
	imports: [CommonModule, HeroesRoutingModule],
})
export class HeroesModule {}

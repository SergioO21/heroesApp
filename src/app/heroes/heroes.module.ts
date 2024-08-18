import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material/material.module";

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
	imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
  ],
})
export class HeroesModule {}

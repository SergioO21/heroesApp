import { NgModule } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { MaterialModule } from "../material/material.module";
import { HeroesRoutingModule } from "./heroes-routing.module";
import {
	HeroPageComponent,
	LayoutPageComponent,
	SearchPageComponent,
	ListPageComponent,
	NewHeroPageComponent,
} from "./pages";
import { CardComponent } from "./components/card/card.component";
import { HeroImagePipe } from "./pipes/hero-image.pipe";
import { SharedModule } from "../shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { ConfirmDialogComponent } from "./components/confirm-dialog/confirm-dialog.component";

@NgModule({
	declarations: [
		CardComponent,
		HeroPageComponent,
		LayoutPageComponent,
		ListPageComponent,
		NewHeroPageComponent,
		SearchPageComponent,

		// Pipes
		HeroImagePipe,
		ConfirmDialogComponent,
	],
	imports: [
		CommonModule,
		HeroesRoutingModule,
		MaterialModule,
		NgOptimizedImage,
		ReactiveFormsModule,
		SharedModule,
	],
})
export class HeroesModule {}

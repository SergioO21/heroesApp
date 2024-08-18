import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthRoutingModule } from "./auth-routing.module";
import { MaterialModule } from "../material/material.module"

import {
	LayoutPageComponent,
	LoginPageComponent,
	RegisterPageComponent,
} from "./pages";

@NgModule({
	declarations: [
		LayoutPageComponent,
		LoginPageComponent,
		RegisterPageComponent,
	],
	imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
  ],
})
export class AuthModule {}

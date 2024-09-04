import { NgModule } from "@angular/core";
import { NotFoundPageComponent } from "./pages";
import { LoaderComponent } from "./components/loader/loader.component";

@NgModule({
	declarations: [NotFoundPageComponent, LoaderComponent],
	exports: [NotFoundPageComponent, LoaderComponent],
})
export class SharedModule {}

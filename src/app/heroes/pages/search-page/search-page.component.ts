import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Hero } from "../../interfaces";
import { HeroesService } from "../../services";
import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";

@Component({
	selector: "app-search-page",
	templateUrl: "./search-page.component.html",
	styles: ``,
})
export class SearchPageComponent {
	public searchInput = new FormControl("");
	public heroes: Hero[] = [];
	public selectedHero?: Hero;

	constructor(private heroesService: HeroesService) {}

	searchHero(): void {
		const value: string = this.searchInput.value ?? "";

		this.heroesService
			.getSuggestions(value)
			.subscribe((heroes) => (this.heroes = heroes));
	}

	onSelectedHero(event: MatAutocompleteSelectedEvent) {
		if (!event.option.value) return;

		const hero: Hero = event.option.value;

		this.selectedHero = hero;
		this.searchInput.setValue(hero.superhero ?? "");
	}
}

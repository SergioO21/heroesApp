import { Component, OnInit } from "@angular/core";
import { Hero } from "../../interfaces";
import { HeroesService } from "../../services";

@Component({
	selector: "app-list-page",
	templateUrl: "./list-page.component.html",
	styles: ``,
})
export class ListPageComponent implements OnInit {
	public heroes: Hero[] = [];

	constructor(private heroesService: HeroesService) {}

	ngOnInit(): void {
		this.heroesService
			.getHeroes()
			.subscribe((heroes) => (this.heroes = heroes));
	}
}

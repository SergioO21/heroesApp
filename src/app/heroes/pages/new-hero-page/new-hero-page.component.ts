import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

import { filter, switchMap } from "rxjs";

import { ConfirmDialogComponent } from "../../components/confirm-dialog/confirm-dialog.component";
import { Hero, Publisher } from "../../interfaces";
import { HeroesService } from "../../services";

@Component({
	selector: "app-new-hero-page",
	templateUrl: "./new-hero-page.component.html",
	styles: ``,
})
export class NewHeroPageComponent implements OnInit {
	public heroForm = new FormGroup({
		alt_img: new FormControl<string>(""),
		alter_ego: new FormControl<string>(""),
		characters: new FormControl<string>(""),
		first_appearance: new FormControl<string>(""),
		id: new FormControl<string>(""),
		publisher: new FormControl<Publisher>(Publisher.DCComics),
		superhero: new FormControl<string>("", { nonNullable: true }),
	});

	public publishers = [
		{ id: "DC Comics", name: "DC Comics" },
		{ id: "Marvel Comics", name: "Marvel Comics" },
	];

	constructor(
		private activatedRoute: ActivatedRoute,
		private dialog: MatDialog,
		private heroesService: HeroesService,
		private router: Router,
		private snackbar: MatSnackBar
	) {}

	ngOnInit() {
		if (!this.router.url.includes("edit")) return;

		this.activatedRoute.params
			.pipe(switchMap(({ id }) => this.heroesService.getHeroById(id)))
			.subscribe((hero) => {
				if (!hero) return this.router.navigateByUrl("/");

				this.heroForm.reset(hero);
				return;
			});
	}

	get currentHero(): Hero {
		return this.heroForm.value as Hero;
	}

	onSubmit(): void {
		if (this.heroForm.invalid) return;

		if (this.currentHero.id) {
			this.heroesService.updateHero(this.currentHero).subscribe((hero) => {
				this.showSnackbar(`${hero.superhero} updated!`);
			});
			return;
		}

		this.heroesService.addHero(this.currentHero).subscribe((hero) => {
			this.router.navigate(["heroes/edit", hero.id]);
			this.showSnackbar(`${hero.superhero} created!`);
		});
	}

	onDeleteHero(): void {
		if (!this.currentHero.id) throw new Error("Hero id is required.");

		const dialogRef = this.dialog.open(ConfirmDialogComponent, {
			data: this.heroForm.value,
		});

		dialogRef
			.afterClosed()
			.pipe(
				filter((result: boolean) => result),
				switchMap(() =>
					this.heroesService.deleteHeroById(this.currentHero.id!)
				),
				filter((wasDeleted: boolean) => wasDeleted)
			)
			.subscribe(() => this.router.navigate(["/heroes/list"]));
	}

	showSnackbar(message: string): void {
		this.snackbar.open(message, "Done", {
			duration: 2500,
		});
	}
}

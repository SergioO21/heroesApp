import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, delay, map, Observable, of } from "rxjs";
import { Hero } from "../interfaces";
import { environments } from "../../../environments/environments";

@Injectable({
	providedIn: "root",
})
export class HeroesService {
	private baseUrl: string = environments.baseUrl;

	constructor(private http: HttpClient) {}

	getHeroes(): Observable<Hero[]> {
		return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
	}

	getHeroById(id: string): Observable<Hero | undefined> {
		return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`).pipe(
			delay(500),
			catchError(() => of(undefined))
		);
	}

	getSuggestions(query: string): Observable<Hero[]> {
		return this.http.get<Hero[]>(`${this.baseUrl}/heroes`, {
			params: {
				q: query,
				_limit: 5,
			},
		});
	}

	addHero(hero: Hero): Observable<Hero> {
		return this.http.post<Hero>(`${this.baseUrl}/heroes`, hero);
	}

	updateHero(hero: Partial<Hero>): Observable<Hero> {
		if (!hero.id) throw new Error("Hero id is required");
		return this.http.patch<Hero>(`${this.baseUrl}/heroes/${hero.id}`, hero);
	}

	deleteHeroById(id: string): Observable<boolean> {
		if (!id) throw new Error("Hero id is required");

		return this.http.delete(`${this.baseUrl}/heroes/${id}`).pipe(
			map(() => true),
			catchError(() => of(false))
		);
	}
}

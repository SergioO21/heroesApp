import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environments } from "../../../environments/environments";
import { User } from "../interfaces";
import { catchError, map, Observable, of, tap } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	private baseUrl = environments.baseUrl;
	private user?: User;

	constructor(private http: HttpClient) {}

	get currentUser(): User | undefined {
		if (!this.user) return undefined;
		return structuredClone(this.user);
	}

	login(email: string, password: string): Observable<User> {
		console.log({ email, password });
		return this.http.get<User>(`${this.baseUrl}/users/1`).pipe(
			tap((user) => (this.user = user)),
			tap(() => localStorage.setItem("token", "KJHWGBHKJ234GRKJ3G5KJ3G5"))
		);
	}

	checkAuth(): Observable<boolean> {
		if (!localStorage.getItem("token")) return of(false);

		const token = localStorage.getItem("token");

		return this.http.get<User>(`${this.baseUrl}/users/1`).pipe(
			tap((user) => (this.user = user)),
			map((user) => !!user),
			catchError(() => of(false))
		);
	}

	logout() {
		this.user = undefined;
		localStorage.removeItem("token");
	}
}

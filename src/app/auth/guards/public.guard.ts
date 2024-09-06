import { CanActivateFn, Router } from "@angular/router";
import { map, Observable, tap } from "rxjs";
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";

const checkAuth = (): Observable<boolean> => {
	const authService: AuthService = inject(AuthService);
	const router: Router = inject(Router);

	return authService.checkAuth().pipe(
		tap((isAuthenticated) => {
			if (isAuthenticated) {
				router.navigate(["./"]);
			}
		}),
		map((isAuthenticated) => !isAuthenticated)
	);
};

export const canActivatePublic: CanActivateFn = () => checkAuth();

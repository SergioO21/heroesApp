import { CanActivateFn, CanMatchFn, Router } from "@angular/router";
import { Observable, tap } from "rxjs";
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";

const checkAuth = (): Observable<boolean> => {
	const authService: AuthService = inject(AuthService);
	const router: Router = inject(Router);

	return authService.checkAuth().pipe(
		tap((isAuthenticated) => {
			if (!isAuthenticated) {
				router.navigate(["/auth/login"]);
			}
		})
	);
};

export const canMatchAuth: CanMatchFn = () => checkAuth();

export const canActivateAuth: CanActivateFn = () => checkAuth();

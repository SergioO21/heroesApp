import { Component, inject } from "@angular/core";
import { Hero } from "../../interfaces";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
	selector: "app-confirm-dialog",
	templateUrl: "./confirm-dialog.component.html",
	styles: ``,
})
export class ConfirmDialogComponent {
	readonly dialogRef = inject(MatDialogRef<ConfirmDialogComponent>);
	readonly hero: Hero = inject<Hero>(MAT_DIALOG_DATA);

	onNoClick(): void {
		this.dialogRef.close(false);
	}

	onConfirm(): void {
		this.dialogRef.close(true);
	}
}

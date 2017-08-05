import { Component, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material';
import { BaseDialog, BaseDialogData } from '../BaseDialog';

@Component({
  selector: 'custom-dialog',
  templateUrl: 'custom-dialog.component.html',
  styleUrls: ['custom-dialog.component.css']
})
export class CustomDialog extends BaseDialog{
	protected data: CustomDialogData;

	constructor(public dialogRef: MdDialogRef<any>,
		@Inject(MD_DIALOG_DATA) public dialogConfig: MdDialogConfig){
		super(dialogRef, dialogConfig);
	}
}

export class CustomDialogData extends BaseDialogData{
	// The Dialog Title
	title: string;
	// The Dialog Content
	content: string;

	constructor(title: string, content: string){
		super();
		this.title = title;
		this.content = content;
	}
}
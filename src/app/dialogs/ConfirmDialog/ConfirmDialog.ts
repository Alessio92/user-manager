import { Component, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material';
import { BaseDialog, BaseDialogData } from '../BaseDialog';

@Component({
  selector: 'confirm-dialog',
  templateUrl: 'confirm-dialog.component.html',
  styleUrls: ['confirm-dialog.component.css']
})
export class ConfirmDialog extends BaseDialog{
	public data: ConfirmDialogData;

	constructor(public dialogRef: MdDialogRef<any>,
		@Inject(MD_DIALOG_DATA) public dialogConfig: MdDialogConfig){
		super(dialogRef, dialogConfig);
	}

	showCancelButton(){
		return this.data.showDefaultOptions && (this.data.option == ConfirmDialogOption.CANCEL ||
			 this.data.option == ConfirmDialogOption.OK_CANCEL);
	}

	showOkButton(){
		return this.data.showDefaultOptions && (this.data.option == ConfirmDialogOption.OK ||
			 this.data.option == ConfirmDialogOption.OK_CANCEL);
	}

	setCustomOptions(){
		this.data.showDefaultOptions = false;
	}
}

export enum ConfirmDialogOption{
	OK,
	OK_CANCEL,
	CANCEL
}


export class ConfirmDialogData extends BaseDialogData{
	// The Dialog Title
	title: string;
	// The Dialog Content
	content: string;

	// Region Options
	showDefaultOptions: boolean = true;
	option: ConfirmDialogOption = ConfirmDialogOption.OK_CANCEL;
	// End Region Options

	constructor(title: string, content: string){
		super();
		this.title = title;
		this.content = content;
	}
}
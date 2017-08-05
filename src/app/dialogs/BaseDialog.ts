import {Component, Inject} from '@angular/core';

import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material';

import {} from '@angular/material';

export abstract class BaseDialog{
	protected data: BaseDialogData;
	constructor(public dialogRef: MdDialogRef<any>,
		@Inject(MD_DIALOG_DATA) public dialogConfig: MdDialogConfig){
		this.data = dialogConfig;
	}
}

export abstract class BaseDialogData {
}
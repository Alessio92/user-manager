import { Component, Inject, ViewChild } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material';
import { User } from '../../data/model/User';
import { BaseDialog, BaseDialogData } from '../BaseDialog';
import { EditUserFormComponent } from '../../edit-user-form/edit-user-form.component';

@Component({
  selector: 'edit-user-dialog',
  templateUrl: 'edit-user-dialog.component.html',
  styleUrls: ['edit-user-dialog.component.css']
})

export class EditUserDialog extends BaseDialog{
	public user: User;

	@ViewChild('edituserformcomponent') public edituserform: EditUserFormComponent;
	
	public data: EditUserDialog;

	constructor(public dialogRef: MdDialogRef<any>,
		@Inject(MD_DIALOG_DATA) public dialogConfig: MdDialogConfig){
		super(dialogRef, dialogConfig);
	}

	checkNestedFormIsValid(){
		return this.edituserform.isFormValid();
	}

	getUser(){
		return this.edituserform.getModifiedUser();
	}
}

export class EditUserDialogData extends BaseDialogData{
	user: User;

	constructor(user: User){
		super();
		this.user = user;
	}
}
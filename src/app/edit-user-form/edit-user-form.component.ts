import { ElementRef, Component, Input, Output, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { User } from './../data/model/User';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'edit-user-form',
	templateUrl: './edit-user-form.component.html',
	styleUrls: ['./edit-user-form.component.css']
})

export class EditUserFormComponent implements OnInit {
	@Input() user: User;
	modifiedUser: User;

	@ViewChild('edituserform') public edituserform: NgForm;

	constructor() {
	}

	ngOnInit() {
		this.modifiedUser = { ...this.user };
	};

	isFormValid(){
		return this.edituserform.valid;
	};

	getModifiedUser(){
		return this.modifiedUser;
	};
}
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

import { RequestManagerService } from '../http/RequestManagerService';

import { User } from '../data/model/User';

import { GetUsersRequest } from '../http/request/Users/GetUsersRequest';
import { DeleteUserRequest } from '../http/request/Users/DeleteUserRequest';
import { CreateUserRequest } from '../http/request/Users/CreateUserRequest';
import { EditUserRequest } from '../http/request/Users/EditUserRequest';

import { BaseResponse } from '../http/response/BaseResponse';
import { GetUsersResponse } from '../http/response/Users/GetUsersResponse';
import { CreateUserResponse } from '../http/response/Users/CreateUserResponse';
import { EditUserResponse } from '../http/response/Users/EditUserResponse';


import { Utils } from '../utils/utils';

import { BaseDataSource } from '../data/datasource/BaseDataSource';

import { UserDBTable } from '../data/database/UserDBTable';

import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { ConfirmDialog, ConfirmDialogData } from '../dialogs/ConfirmDialog/ConfirmDialog';
import { EditUserDialog, EditUserDialogData } from '../dialogs/EditUserDialog/EditUserDialog';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
  providers: [RequestManagerService]
})

export class ListUsersComponent implements OnInit {
	private getHeaders()
	{
		return User.getHeaders().concat(['action']);
	}

	userDatabase: UserDBTable;
	userDataSource: BaseDataSource<User> | null;
	displayedColumns: string[] = this.getHeaders();

	private loadUsers(){
		let request = new GetUsersRequest();
		this.RMService.Send(request)
		.subscribe(
			result => {
				this.userDatabase.addAll((result as GetUsersResponse).result);
			}
		);
	}

	constructor(private RMService: RequestManagerService,
		public dialog: MdDialog) {
		this.userDatabase = new UserDBTable();
		this.loadUsers();
	}

	isEmptyDataSource(){
		return this.userDatabase.count() == 0;
	}

	ngOnInit() {
		this.userDataSource = new BaseDataSource(this.userDatabase);
	};

	delete(userId){
		let user = this.userDatabase.getUserById(userId);
		let dialogConfig = new MdDialogConfig();
		let dialogData = new ConfirmDialogData('Please confirm', `Do you want to remove ${user.name} from system?`);
		dialogConfig.data = dialogData;

		let dialogRef = this.dialog.open(ConfirmDialog, dialogConfig);
		dialogRef.afterClosed().subscribe(confirmed => {
			if(confirmed){
				let request = new DeleteUserRequest();
				request.userId  = userId;
				this.RMService.Send(request)
				.subscribe(
					result => {
						this.userDatabase.removeByProperty(User.ID_FIELD, userId);
					}
				);
			}
		});
	};

	edit(userId){
		let user = this.userDatabase.getUserById(userId);
		let dialogConfig = new MdDialogConfig();
		let dialogData = new EditUserDialogData(user);
		dialogConfig.data = dialogData;

		let dialogRef = this.dialog.open(EditUserDialog, dialogConfig);
		dialogRef.afterClosed().subscribe(user => {
			if(!user){ return; }
			
			let request = new EditUserRequest(user);
			this.RMService.Send(request)
			.subscribe(
				result => {
					let user = (result as EditUserResponse).result;
					this.userDatabase.updateByProperty(User.ID_FIELD, user.id, user);
				}
			);
		});
	};

	add(){
		let user = new User();
		let dialogConfig = new MdDialogConfig();
		let dialogData = new EditUserDialogData(user);
		dialogConfig.data = dialogData;

		let dialogRef = this.dialog.open(EditUserDialog, dialogConfig);
		dialogRef.afterClosed().subscribe(user => {
			if(!user){ return; }
			
			let request = new CreateUserRequest(user);
			this.RMService.Send(request)
			.subscribe(
				result => {
					this.userDatabase.add((result as CreateUserResponse).result);
				}
			);
		});
	};
}
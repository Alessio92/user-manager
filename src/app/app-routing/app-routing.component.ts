import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditUserFormComponent } from '../edit-user-form/edit-user-form.component';
import { ListUsersComponent } from '../list-users/list-users.component';

export const routes: Routes = [
{
	path: '',
	component: ListUsersComponent
}
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);
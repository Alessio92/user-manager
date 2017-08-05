import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http'; 
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { CdkTableModule } from '@angular/cdk';


// region Meterial
import {
	MdButtonModule,
	MdCheckboxModule,
  MdTableModule,
  MdIconModule,
  MdDialogModule
} from '@angular/material';
// endregion Meterial

// region Custom UI Components
import { EditUserFormComponent } from './edit-user-form/edit-user-form.component';
import { ListUsersComponent } from './list-users/list-users.component';

  // region Dialogs
  import { BaseDialog } from './dialogs/BaseDialog';
  import { ConfirmDialog } from './dialogs/ConfirmDialog/ConfirmDialog';
  import { EditUserDialog } from './dialogs/EditUserDialog/EditUserDialog';
  // endregion Dialogs */
// endregion Custom UI Components */

// region Routing
import { AppRouting } from './app-routing/app-routing.component';
// endregion Routing

@NgModule({
  declarations: [
    AppComponent,
    EditUserFormComponent,
    ListUsersComponent,
    ConfirmDialog,
    EditUserDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpModule,
    
    MdButtonModule,
    MdCheckboxModule,
    MdTableModule,
    CdkTableModule,
    MdIconModule,
    MdDialogModule,
    
    AppRouting
  ],
  providers: [],
  entryComponents: [ConfirmDialog, EditUserDialog],
  bootstrap: [AppComponent]
})

export class AppModule { }
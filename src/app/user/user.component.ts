import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DialogUserComponent } from '../dialog-user/dialog-user.component';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  user = new User()

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogUserComponent)
  }

}

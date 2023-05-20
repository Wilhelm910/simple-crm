import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  user = new User();
  birthDate!: Date;
  loading = false;
  userId = '';
 

  constructor(private route:ActivatedRoute, private firestore: AngularFirestore, public dialog: MatDialog, public dialogRef: MatDialogRef<EditUserComponent>) {

  }

  ngOnInit(): void {

  }


  getUser() {

  }


  updateUser() {
    this.loading = true;
    this.user.birthDate = this.birthDate.getTime()
    this.firestore
      .collection('users')
      .doc(this.userId)
      .update(this.user.toJson())
      .then((result: any) => {
        this.loading = false;
        console.log(result);
      })
      this.dialogRef.close()
  }

}

import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.scss']
})
export class DialogUserComponent implements OnInit {

  user = new User();
  birthDate!: Date;
  loading = false;


  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogUserComponent>) {

  }



  ngOnInit(): void {

  }

  onNoClick() {

  }

  saveUser() {
    this.loading = true;
    this.user.birthDate = this.birthDate.getTime()
    console.log(this.user)
    this.firestore
      .collection('users')
      .add(this.user.toJson())
      .then((result: any) => {
        this.loading = false;
        console.log(result);
      })
      this.dialogRef.close()
  }

}

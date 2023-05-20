import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userId = '';
  userData: User = new User;

  constructor(private route:ActivatedRoute, private firestore: AngularFirestore, public dialog: MatDialog){}

  ngOnInit(): void {
    this.route.params.subscribe( params =>{
      this.userId = params['id'];
      console.log(this.userId)
      this.getUser();
  })
  }

  getUser() {
    this.firestore
    .collection('users')
    .doc(this.userId)
    .valueChanges()
    .subscribe((data:any) => {
      this.userData = new User(data);
      console.log(this.userData)
    })
  }

  openDialog() {
    let dialog = this.dialog.open(EditUserComponent);
    dialog.componentInstance.user = new User(this.userData.toJson());
    dialog.componentInstance.userId = this.userId;

  }

}

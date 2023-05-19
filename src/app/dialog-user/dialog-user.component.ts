import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.scss']
})
export class DialogUserComponent implements OnInit {

  user = new User();
  birthDate!: Date;


  constructor(private firestore: AngularFirestore) {

  }

 

  ngOnInit(): void {
    
  }

  onNoClick() {
    
  }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime()
    console.log(this.user)
    this.firestore.collection('users').add(this.user.toJson()).then((result:any) =>{console.log(result)})
  }

}

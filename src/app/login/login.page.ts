import { Component, OnInit } from '@angular/core'
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  constructor(public navCtr: NavController) {}
  isProfessor = false
  isStudent = false
  name
  password

  ngOnInit() {}
  /*login() {
    if (this.name == 'Son' && this.password == '123') {
      this.isProfessor = true
    }
    if (this.name == 'Ngoc' && this.password == '123') {
      this.isStudent = true
    }

    if (this.isProfessor) {
      this.isProfessor = false
      this.navCtr.navigateForward('/tabs/tab3')
    } else if (this.isStudent) {
      this.isStudent = false
      this.navCtr.navigateForward('/tabs/tab2')
    } else {
      this.navCtr.navigateForward('/tabs/tab2')
    }
  } */
  professorLogin(){
    this.navCtr.navigateForward('/tabs/tab3')
  }
  studentLogin(){
    this.navCtr.navigateForward('/tabs/tab2')
  }
}

import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-popover2',
  templateUrl: './popover2.component.html',
  styleUrls: ['./popover2.component.scss'],
})
export class Popover2Component implements OnInit {

  constructor(public navCtr: NavController, public popovercontroller: PopoverController) { }

  ngOnInit() {}
  logout() {
    this.popovercontroller.dismiss();
    this.navCtr.navigateForward("/tabs/login");


  }

}

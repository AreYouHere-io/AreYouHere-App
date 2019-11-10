import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(public navCtr: NavController, public popovercontroller: PopoverController) { }

  ngOnInit() {}
  logout() {
    this.popovercontroller.dismiss();
    this.navCtr.navigateForward("/tabs/login")
  }

}

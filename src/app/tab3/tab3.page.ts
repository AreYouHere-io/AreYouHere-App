import { Component } from '@angular/core'
import { PopoverController } from '@ionic/angular'
import { ModalController } from '@ionic/angular'
import { PopoverComponent } from '../popover/popover.component'
import { ModalComponent } from '../modal/modal.component'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(
    public popoverController: PopoverController,
    public modalController: ModalController
  ) {}
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true
    })
    return await popover.present()
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalComponent
    })
    return await modal.present()
  }
  public form = [
    { val: 'Khoi Tran', isChecked: true },
    { val: 'Hieu Tran', isChecked: false },
    { val: 'Ngoc Tran', isChecked: false },
    { val: 'Lan Vu', isChecked: false }
  ]

  /*
  public res;
  newPost = {
    //title: 'All about Fetch!',
    
  }
  options = {
    method: 'GET',
    headers: new Headers({
        'Content-Type': 'application/json'
    })
  }
  ionViewDidEnter(){
    fetch(`http://complete.se43jvv6ep.us-west-2.elasticbeanstalk.com/students`)
    .then(res => res.json())
    .then(data => console.log(data.response))
  }

  updateList(){
  }*/
}

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
  public list = []
  public data = []
  public counter
  public counter2
  ionViewDidEnter() {
    this.getData()
  }
  onButtonClicked() {
    this.post()
  }
  post() {
    this.list.forEach(element => {
      if (element.status) {
        this.postData(element.student.id)
        element.status2 = element.status
      }
    })
    setTimeout(function() {
      location.reload()
    }, 200)
  }
  async getData() {
    try {
      const url =
        'http://complete.se43jvv6ep.us-west-2.elasticbeanstalk.com/session/dump'
      fetch(url).then(response =>
        response.json().then(data => {
          this.data = data.atts
          this.counter = 0
          this.counter2 = 0
          this.data.forEach(element => {
            if (!element.status) {
              this.list[this.counter2] = this.data[this.counter]
              this.list[this.counter2].status2 = this.list[this.counter2].status
              let strArray = this.list[this.counter2].student.name.split(
                /(?=[A-Z])/
              )
              let str = ''
              strArray.forEach(element => {
                str += element + ' '
              })
              this.list[this.counter2].student.name = str
              this.counter2++
            }
            this.counter++
          })
        })
      )
    } catch (error) {
      console.error(error.status)
      console.error(error.error) // Error message as string
      console.error(error.headers)
    }
  }
  async postData(id) {
    try {
      const url =
        'http://complete.se43jvv6ep.us-west-2.elasticbeanstalk.com/prof/checkin'
      const options = {
        method: 'POST',
        body: id,
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }

      fetch(url, options).then(response =>
        response.json().then(data => {
          this.data = data
          console.log(this.data)
        })
      )
    } catch (error) {
      console.error(error.status)
      console.error(error.error) // Error message as string
      console.error(error.headers)
    }
  }

  constructor(
    public modalController: ModalController,
    public popoverController: PopoverController
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
}

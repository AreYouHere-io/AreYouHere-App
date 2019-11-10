import { Component } from '@angular/core'
import { Popover2Component } from '../popover2/popover2.component'
import { PopoverController } from '@ionic/angular'
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx'
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  barcodeData = {
    text: 'Press button to scan 👇'
  }
  status

  constructor(
    public popoverController: PopoverController,
    private barcodeScanner: BarcodeScanner,
    public alertController: AlertController
  ) {}
  public isChecked = false
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: Popover2Component,
      event: ev,
      translucent: true
    })
    return await popover.present()
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',

      buttons: ['OK']
    })

    await alert.present()
  }

  ngOnInit() {}

  scanBarcode() {
    this.barcodeScanner
      .scan({
        disableSuccessBeep: true // iOS and Android
      })
      .then(barcodeData => {
        // this.barcodeData = barcodeData
        this.postData(barcodeData.text)
        console.log(barcodeData)
      })
      .catch(err => {
        // error
      })
  }

  async postData(text) {
    try {
      const url =
        'http://complete.se43jvv6ep.us-west-2.elasticbeanstalk.com/student/checkin'
      const options = {
        method: 'POST',
        body: 'nmt130942' + '?' + text,
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }

      fetch(url, options).then(response =>
        response.json().then(data => {
          status = data.status
        })
      )
    } catch (error) {
      console.error(error.status)
      console.error(error.error) // Error message as string
      console.error(error.headers)
    }
  }
}

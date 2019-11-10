import { Component } from '@angular/core'
import { Popover2Component } from '../popover2/popover2.component'
import { PopoverController } from '@ionic/angular'
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  barcodeData = {
    text: 'Press button to scan 👇'
  }

  constructor(
    public popoverController: PopoverController,
    private barcodeScanner: BarcodeScanner
  ) {}
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: Popover2Component,
      event: ev,
      translucent: true
    })
    return await popover.present()
  }

  ngOnInit() {}

  scanBarcode() {
    this.barcodeScanner
      .scan({
        disableSuccessBeep: true // iOS and Android
      })
      .then(barcodeData => {
        this.barcodeData = barcodeData
        console.log(barcodeData)
      })
      .catch(err => {
        // error
      })
  }
}

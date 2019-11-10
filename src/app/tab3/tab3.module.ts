import { IonicModule } from '@ionic/angular'
import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { Tab3Page } from './tab3.page'
import { PopoverComponent } from '../popover/popover.component'
import { ModalComponent } from '../modal/modal.component'
import { QRCodeModule } from 'angularx-qrcode'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    QRCodeModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  entryComponents: [PopoverComponent, ModalComponent],
  declarations: [Tab3Page, PopoverComponent, ModalComponent]
})
export class Tab3PageModule {}

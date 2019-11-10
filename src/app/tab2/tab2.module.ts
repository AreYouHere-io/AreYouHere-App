import { IonicModule } from '@ionic/angular'
import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { Tab2Page } from './tab2.page'
import { Popover2Component } from '../popover2/popover2.component'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  entryComponents: [Popover2Component],
  declarations: [Tab2Page, Popover2Component]
})
export class Tab2PageModule {}

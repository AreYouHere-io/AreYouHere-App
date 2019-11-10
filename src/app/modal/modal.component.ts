import { Component, OnInit } from '@angular/core'
import { ModalController } from '@ionic/angular'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  constructor(public modalcontroller: ModalController) {}

  public myAngularxQrCode: string = null

  ngOnInit() {
    const url =
      'http://complete.se43jvv6ep.us-west-2.elasticbeanstalk.com/getKey'
    fetch(url).then(response =>
      response.json().then(data => {
        this.myAngularxQrCode = data.message
      })
    )
  }

  close() {
    this.modalcontroller.dismiss()
    setTimeout(function() {
      location.reload()
    }, 200)
  }
}

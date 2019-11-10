import { Component } from '@angular/core'
// import { HTTP } from '@ionic-native/http/ngx'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor() {}

  public data = []

  onButtonClicked() {
    this.getData()
  }

  async getData() {
    try {
      const url =
        'http://complete.se43jvv6ep.us-west-2.elasticbeanstalk.com/session/dump'
      fetch(url).then(response =>
        response.json().then(data => {
          this.data = data
          console.log(data)
        })
      )

      // return await this.http.get(url, params, headers)

      // console.log(response.status)
      // console.log(response.headers)
      // return JSON.parse(response.data) // JSON data returned by server
    } catch (error) {
      console.error(error.status)
      console.error(error.error) // Error message as string
      console.error(error.headers)
    }
  }
}

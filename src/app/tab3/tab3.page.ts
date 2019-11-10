import { Component } from '@angular/core'
// import { HTTP } from '@ionic-native/http/ngx'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor() {}
  public list = []
  public data = []
  public counter 
  public counter2
  ionViewDidEnter(){
    this.getData()
    
    this.list = this.data
  }
  onButtonClicked() {
    this.post()
  }
  post(){
    this.data.forEach((element) => {
      if (element.status)
        this.postData(element.student.id)
    });
    this.getData()
    console.log("??")
    //location.reload()
    
    
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
          this.data.forEach((element) => {
            if (!element.status){
              this.list[this.counter2] = this.data[this.counter]
              this.counter2++
            }
            this.counter++
          }); 
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

}

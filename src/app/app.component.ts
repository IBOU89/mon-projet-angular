import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;


  appareils =[
    {
      name: 'Machien à laver',
      status: 'eteint'

    },

    {
      name: 'Televiseur',
      status: 'eteint'

    },

    {
      name:'Machien à laver',
      status: 'allumer'

    },
  ];




// /*
//   appareilOne= 'Machien à laver';
//   appareilTwo= 'Ordianteur';
//   appareilTree= 'Television'
//   "strictPropertyInitialization": false*/

  constructor() {
    setTimeout(
      () => {
        this.isAuth=true;
      }, 6000
    );

  }
  onAllumer(){
    console.log("allumer tous!!!!")
  }
}

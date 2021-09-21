import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
@Input() appareilName!: string;
@Input() appareilStaus!: string;
  constructor() { }

  ngOnInit(): void {
  }
  getStatus(){
    return this.appareilStaus;
  }


  // @ts-ignore
  getColor = () => {
    if (this.appareilStaus==='allumer'){
      return'green';

    }else if (this.appareilStaus==='eteint'){
      return 'red';
    }
  };

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent {

  constructor(private router : Router) { }

  btnClick(s:string){
    this.router.navigateByUrl(s);
};
formatLabel(value: number) {
  return value;
}


}

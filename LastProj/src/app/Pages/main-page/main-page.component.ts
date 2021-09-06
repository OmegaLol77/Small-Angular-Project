import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  constructor(private router: Router) {

  }
  // myComponent.component.thml
  btnClick(s:string){
          this.router.navigateByUrl(s);
  };
  btnClickSave(){
};

}

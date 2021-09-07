import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/Module/Card';
import { CardService } from 'src/app/Service/CardService/card.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent {

  public card: Card = new Card();
  public flag: boolean = false;
  constructor(private router : Router,private cardService:CardService) { }

  btnClick(s:string){
    this.router.navigateByUrl(s);
};
formatLabel(value: number) {
  return value;
}
updateTitle(title:any){
  this.card.title = title.target.value;
}
updateTextBody(body:any){
  this.card.body = body.target.value;
}
updatePriority(priority:any){
  this.card.priority = priority.value;
}
startObs(){
  this.flag=false;
  if(!!this.card.title && !!this.card.body && !!this.card.priority){
    console.log("here")
    this.cardService.createCard(this.card).subscribe(() => {
      console.log("success");
    }
      , (err) => {
        alert(err);
      }),
      this.router.navigate(['Pages/main-page']);
  }
  else{
    console.log("here")
    this.flag=true;
  }
}
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/Module/Card';
import { CardService } from 'src/app/Service/CardService/card.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public cardSelected: Card = new Card();
  public cardsList: Card[]=[];

  constructor(private router: Router, private cardService: CardService) {

  }
  ngOnInit(): void {

    let obsCards = this.cardService.getAllCards();
    obsCards.subscribe(cards => {
      this.cardsList = cards;
    }, error => {
      alert("Error in loading cards");
    });
  }
  // myComponent.component.thml
  btnClick(s:string){
          this.router.navigateByUrl(s);
  };
  clicked(i:number){
    this.cardService.setCardSelected(this.cardsList[i]);
    this.router.navigate(['Pages/card-being-read']);
};

}

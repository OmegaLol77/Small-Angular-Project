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
  public cardsList: Card[] = [];

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
  btnClick(s: string) {
    this.router.navigateByUrl(s);
  };
  btnUpdateClick(s: string, i: number) {
    this.cardService.setCardSelected(this.cardsList[i]);
    this.router.navigateByUrl(s);
  }
  clicked(i: number) {
    this.cardService.setCardSelected(this.cardsList[i]);
    this.router.navigate(['Pages/card-being-read']);
  };
  clickRemove(i: number) {
    this.cardSelected = this.cardsList[i];
    let obsCards = this.cardService.deleteCard(this.cardSelected.id);
    obsCards.subscribe(() => {
      console.log("success");
      this.cardsList.splice(i,1);
      this.router.navigate(['Pages/main-page']);
    }, (error) => {
      alert("Error in loading cards"+error);
    });
  }

}

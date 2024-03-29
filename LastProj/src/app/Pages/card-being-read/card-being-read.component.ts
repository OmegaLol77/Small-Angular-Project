import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/Module/Card';
import { CardService } from 'src/app/Service/CardService/card.service';
import { Router } from '@angular/router';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-card-being-read',
  templateUrl: './card-being-read.component.html',
  styleUrls: ['./card-being-read.component.scss']
})
export class CardBeingReadComponent implements OnInit {

  public cardSelected: Card = new Card();
  color: ThemePalette = 'accent';
  constructor(private router: Router, private cardService: CardService) { }

  ngOnInit(): void {
    this.cardSelected = this.cardService.getCardSelected();
  }
  formatLabel() {
    return 2;
  }
  slided(flag:any){
    console.log(flag.checked);
    this.cardSelected.readFlag = flag.checked;
  }
  btnClick(){
    this.cardService.updateCard(this.cardSelected).subscribe(() => {
      console.log("success");
      this.router.navigate(['Pages/main-page']);
    }
      , (err) => {
        alert(err);
      });
};
}

import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/Module/Card';
import { CardService } from 'src/app/Service/CardService/card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-being-read',
  templateUrl: './card-being-read.component.html',
  styleUrls: ['./card-being-read.component.scss']
})
export class CardBeingReadComponent implements OnInit {

  public cardSelected?: Card;

  constructor(private router: Router, private cardService: CardService) { }

  ngOnInit(): void {
    this.cardSelected = this.cardService.getCardSelected();
  }
  formatLabel(value: number) {
    return value;
  }
}

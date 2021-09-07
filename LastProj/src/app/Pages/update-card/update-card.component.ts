import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/Module/Card';
import { CardService } from 'src/app/Service/CardService/card.service';
import { Router } from '@angular/router';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-update-card',
  templateUrl: './update-card.component.html',
  styleUrls: ['./update-card.component.scss']
})
export class UpdateCardComponent implements OnInit {
  public cardSelected: Card = new Card();

  public flag: boolean = false;
  constructor(private router: Router, private cardService: CardService) { }

  ngOnInit(): void {
    this.cardSelected = this.cardService.getCardSelected();
  }
  formatLabel() {
    return 2;
  }
  slided(flag: any) {
    console.log(flag.checked);
    this.cardSelected.readFlag = flag.checked;
  }
  updateTitle(title: any) {
    this.cardSelected.title = title.target.value;
  }
  updateTextBody(body: any) {
    this.cardSelected.body = body.target.value;
  }
  updatePriority(priority: any) {
    if (priority.target.value <= 5 && priority.target.value > 0) {
      this.flag = false;
      console.log(this.flag + "right")
      this.cardSelected.priority = priority.target.value;
    } else {
      this.flag = true;
      console.log(this.flag + "not right")
    }
  }
  btnClick() {
    if (this.flag == false) {
      this.cardService.updateCard(this.cardSelected).subscribe(() => {
        console.log("success");
        this.router.navigate(['Pages/main-page']);
      }
        , (err) => {
          alert(err);
        });
    }
  };
}

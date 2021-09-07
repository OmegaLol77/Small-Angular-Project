import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebServiceService } from '../WebService/web-service.service';
import { Observable } from 'rxjs';
import { Card } from 'src/app/Module/Card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  public cardSelected?: Card;

  constructor(private webService: WebServiceService,private httpClient: HttpClient) { }

  public getAllCards():Observable<Card[]>{
    return this.webService.get<Card[]>("/card/getAllCards/", new Map<any,any>());
  }

  public createCard(card: Card):Observable<boolean>{
    return this.webService.postJSON<boolean>("/card/createCard/", JSON.stringify(card));
  }

  public getCardSelected(){
		return this.cardSelected;
	}
  public setCardSelected(card:Card){
		this.cardSelected=card;
	}
}

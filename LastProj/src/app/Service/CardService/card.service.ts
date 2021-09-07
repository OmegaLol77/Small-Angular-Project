import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { WebServiceService } from '../WebService/web-service.service';
import { Observable } from 'rxjs';
import { Card } from 'src/app/Module/Card';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  public cardSelected: Card = new Card();

  constructor(private webService: WebServiceService, private httpClient: HttpClient) { }

  private handlerError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error : ', errorResponse.error.message);
    }else{
      console.error('Server Side Error : ', errorResponse);
    }
  }
  public getAllCards(): Observable<Card[]> {
    return this.httpClient.get<Card[]>("http://localhost:8084/card/getAllCards/");
  }

  public createCard(card: Card): Observable<any> {
    return this.httpClient.post<Card>("http://localhost:8084/card/createCard/", card, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  public updateCard(card: Card): Observable<any> {
    return this.httpClient.put<any>(`${'http://localhost:8084/card'}/${card.id}/${'updateCard/'}`, card, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
  public deleteCard(id?: number): Observable<any> {

    return this.httpClient.delete<any>(`${'http://localhost:8084/card'}/${id}/${'deleteCard/'}`);
  }
  public getCardSelected() {
    return this.cardSelected;
  }
  public setCardSelected(card: Card) {
    this.cardSelected = card;
  }
}

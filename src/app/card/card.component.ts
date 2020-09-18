import { Component, OnInit } from '@angular/core';
import { HttpClientService, BookmarkCardDto } from '../service/httpclient.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cards:BookmarkCardDto[];
    
   
  constructor(
    private httpClientService:HttpClientService
  ) { }

  ngOnInit() {
     this.httpClientService.getCards().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
  }

handleSuccessfulResponse(response)
{
    this.cards=response;
}

deleteCard(card: BookmarkCardDto): void {
   this.httpClientService.deleteCard(card)
     .subscribe( data => {
      this.cards = this.cards.filter(u => u !== card);
   })
};


}
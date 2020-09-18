import { Component, OnInit } from '@angular/core';
import { HttpClientService, BookmarkCardDto } from '../service/httpclient.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  card: BookmarkCardDto = new BookmarkCardDto(null,"","","");

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
  }

  createNewCard(): void {
    this.httpClientService.createCard(this.card)
        .subscribe( data => {
          alert("Card created successfully.");
        });
  };

}
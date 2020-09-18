import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class BookmarkCardDto{
  constructor(
    public id:number,
    public title:string,
    public longUrl:string,
    public description:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

     

     getCards()
  {
    let basicString=this.getHeaders();

    let headers=new HttpHeaders(
      {Authorization:basicString}
    );
    console.log("test call");
    return this.httpClient.get<BookmarkCardDto[]>('http://localhost:8090/api/v1/bookmark-management/cards',{headers});
  }

  public deleteCard(bookmarkCardDto) {
    return this.httpClient.delete<BookmarkCardDto>("http://localhost:8090/api/v1/bookmark-management/cards" + "/"+ bookmarkCardDto.Id);
  }

  public createCard(bookmarkCardDto) {
    return this.httpClient.post<BookmarkCardDto>("http://localhost:8090/api/v1/bookmark-management/cards", bookmarkCardDto);
  }

  public updateCard(bookmarkCardDto) {
    return this.httpClient.put<BookmarkCardDto>("http://localhost:8090/api/v1/bookmark-management/cards"  + "/"+ bookmarkCardDto.Id, bookmarkCardDto);
  }


getHeaders(){
  let username='admin'
  let password='password'

  let  basicString='Basic '+window.btoa(username + ':' + password)
  return basicString;
}

}
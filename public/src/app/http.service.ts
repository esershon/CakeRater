import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 

  }

  getAllCakes(){
    return this._http.get('/api/cakes')
  }

  getCake(id){
    return this._http.get('/api/cakes/'+id)
  }

  postCake(cake){
    return this._http.post('/api/cakes', cake)
}

  rateCake(id, rating){
    console.log("Calling rateCake function in the service", rating)
    return this._http.patch('/api/cakes/'+id, rating)
  }

}

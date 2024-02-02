import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rickandmorty } from '../models/rickandmorty';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {

  value=0;
  id=1;
  constructor(private http:HttpClient) { }


  getByCharacters(name$:string,statu$:string):Observable<any>{
    return this.http.get<any>(`https://rickandmortyapi.com/api/character/?name=${name$}&=${statu$}`)
  }

  getCharacter$():Observable<any>{
    return this.http.get<Observable<Rickandmorty[]>>(`https://rickandmortyapi.com/api/character/${this.value+1},${this.value+2},${this.value+3},${this.value+4},${this.value+5},${this.value+6},${this.value+7},${this.value+8},${this.value+9},${this.value+10}`)
  }
  getSingleCharacter(id:string):Observable<any>{
    
   return this.http.get<Observable<Rickandmorty>>(`https://rickandmortyapi.com/api/character/${id}`)
  }
  setValue(value:number){
    this.value=0;
  }

   sumValue(value$:number){
    this.value+value$;
  }
}

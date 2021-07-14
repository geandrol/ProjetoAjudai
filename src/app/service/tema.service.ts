import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  getAllTema(): Observable<Tema[]>{
  return this.http.get<Tema[]>('http://localhost:8080/temas')
}

getByIdTema(id: Number): Observable<Tema>{
  return this.http.get<Tema>(`http://localhost:8080/${id}`)
}

postTema(tema: Tema): Observable<Tema>{
return this.http.post<Tema>('http://localhost:8080/temas',tema)
}

putTema(tema: Tema): Observable<Tema>{
  return this.http.put<Tema>('http://localhost:8080/temas',tema)
  }

  deleteTema(id: Number){
    return this.http.delete(`http://localhost:8080/temas/${id}`)
  }

}

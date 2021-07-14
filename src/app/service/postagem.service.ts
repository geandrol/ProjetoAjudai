import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }
  
  getAllPostagem(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('http://localhost:8080/postagens')
  }

  getByIdPostagem(id: Number): Observable<Postagem>{
    return this.http.get<Postagem>(`http://localhost:8080/postagens/${id}`)
  }

  postPostagem(postagem: Postagem):Observable<Postagem>{
    return this.http.post<Postagem>('http://localhost:8080/postagens',postagem)
    }
    
    putPostagem(postagem: Postagem):Observable<Postagem>{
      return this.http.put<Postagem>('http://localhost:8080/postagens',postagem)
      }

      deletePostagem(id: Number){
        return this.http.delete(`http://localhost:8080/postagens/${id}`)
      }


}

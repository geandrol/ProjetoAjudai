import { Component, OnInit } from '@angular/core';
import { PostagemService } from 'src/app/service/postagem.service';
import { Postagem } from 'src/app/model/Postagem';

@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.css']
})
export class PostagemComponent implements OnInit {
  postagem: Postagem = new Postagem()
listPostagem: Postagem[]
constructor( private postagemService: PostagemService){ }

ngOnInit(): void {
  this.getAllPostagem()
} 

getAllPostagem(){

  this.postagemService.getAllPostagem().subscribe((resp: Postagem[]) => {
    this.listPostagem = resp
    console.log(JSON.stringify(this.listPostagem))

  } )


}

cadastrarPostagem(){

  this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
     this.postagem = resp
     alert('Postagem cadastrada')
    
  })
}

}


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from 'src/app/model/Postagem';
import { PostagemService } from 'src/app/service/postagem.service';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  postagem: Postagem= new Postagem()
  listaPostagem: Postagem[]
  idPost: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postagemService: PostagemService,
    ) { }

  ngOnInit(): void {


    this.idPost = this.route.snapshot.params['id']
    this.findByIdPostagem(this.idPost)
    
    
  }

  findByIdPostagem(id: number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem)=>{
      this.postagem = resp
    })
  }


   apagarPostagem(){

    this.postagemService.deletePostagem(this.idPost).subscribe(() => {
      alert('Postagem apagada')
     this.router.navigate(['/home'])
      
    })
  }

}
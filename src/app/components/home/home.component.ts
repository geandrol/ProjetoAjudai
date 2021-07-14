import { Component, OnInit } from '@angular/core';
import { Tema } from 'src/app/model/Tema';
import { TemaService } from 'src/app/service/tema.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { PostagemService } from 'src/app/service/postagem.service';
import { Postagem } from 'src/app/model/Postagem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tema: Tema = new Tema()
   listaTema: Tema[]
   closeResult: string
    postagem: Postagem = new Postagem()
  listaPostagem: Postagem[]
  idTema: number
  constructor( 
    private temaService: TemaService, 
    private modalService: NgbModal,
    private router: Router,
    private postagemService: PostagemService){ }

  ngOnInit(): void {
    this.findAllTema()
    this.getAllPostagem()
    
  }  

  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema)=>{
      this.tema = resp
    })
  }

 findAllTema(){

   this.temaService.getAllTema().subscribe((resp: Tema[]) => {
     this.listaTema = []
    this.listaTema = resp
     console.log(JSON.stringify(this.listaTema))

   } )
  }

   cadastrarTema(){

    this.temaService.postTema(this.tema).subscribe((resp: Tema) => {
       this.tema = resp
       alert('Tema cadastrado')
       this.tema = new Tema()
       console.log("descricao"+ this.tema.descricao)
    })
   }

   open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  getAllPostagem(){
  
    this.postagemService.getAllPostagem().subscribe((resp: Postagem[]) => {
      this.listaPostagem = resp
      console.log((this.listaPostagem))
  
    } )
  
  
  }

  pegarValor(){
    console.log( "------------>" + this.idTema)
  }
  
  cadastrarPostagem(){

    this.tema.id = this.idTema
    this.postagem.tema = this.tema 
    

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
       this.postagem = resp
       alert('Postagem cadastrada')
      this.postagem = new Postagem()
      this.getAllPostagem()
    })
  }

}


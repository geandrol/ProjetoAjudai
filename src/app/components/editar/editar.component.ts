import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from 'src/app/model/Postagem';
import { Tema } from 'src/app/model/Tema';
import { PostagemService } from 'src/app/service/postagem.service';
import { TemaService } from 'src/app/service/tema.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
postagem: Postagem = new Postagem()
closeResult: string
tema: Tema = new Tema()
listaTema: Tema[]
idTema: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postagemService: PostagemService,
    private temaServise: TemaService,
    private modalService: NgbModal) { }

  ngOnInit(): void {

    this.findAllTema()
    this.postagem.id = this.route.snapshot.params['id']
    this.findByIdPostagem(this.postagem.id)
    console.log(this.postagem.id)
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

  findByIdPostagem(id: number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem)=>{
      this.postagem = resp
    })
  }

  findByIdTema(){
    this.temaServise.getByIdTema(this.idTema).subscribe((resp: Tema)=>{
      this.tema = resp
    })
  }

  findAllTema(){

    this.temaServise.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTema = []
     this.listaTema = resp
      console.log(JSON.stringify(this.listaTema))
 
    } )
   }

   atualizarPostagem(){

    this.tema.id = this.idTema
    this.postagem.tema = this.tema 
console.log(JSON.stringify(this.postagem))
    this.postagemService.putPostagem(this.postagem).subscribe((resp: Postagem) => {
       this.postagem = resp
       alert('Postagem atualizada')
      this.router.navigate(['/home'])
      
    })
  }

}

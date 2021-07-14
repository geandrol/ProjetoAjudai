import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario: Usuario = new Usuario()
  confirmarSenha: string 

  constructor( 
    private authService:AuthService,
    private router:Router
  
    ){}
   

  ngOnInit()  {
    window.scroll(0,0)
  }

  confirmSenha(event: any){
    this.confirmarSenha=event.target.value

  }

  cadastrar(){
    this.confirmSenha =this.confirmSenha

    if(this.usuario.senha != this.confirmarSenha){
      alert('Senha incorreta.')
    }else{
      this.authService.cadastro(this.usuario).subscribe((resp:Usuario)=>{ this.usuario= resp
        this.router.navigate(['/login'])
      alert('Usuario cadastrado com sucesso!')
      })
  }

}

}


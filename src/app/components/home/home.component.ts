import { Component,OnInit,HostListener } from '@angular/core';
import { Rickandmorty } from 'src/app/models/rickandmorty';
import { RickandmortyService } from 'src/app/services/rickandmorty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  list:any[]|Rickandmorty[]=[]
  isSuccess=false;
  data:any|Rickandmorty;
  /**
   *
   */
  constructor(private service:RickandmortyService) {
    
    
  }
  
  
  ngOnInit(): void {
    this.getData();
   
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    // Lógica para determinar si el usuario ha llegado al final de la página
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      // Aquí puedes cargar más datos o realizar alguna acción
      this.isSuccess=false

      setTimeout(() => {
        
        this.getData();  
      }, 3000);
    }
  }

  getData(){

    this.isSuccess=false
    for(let i=0;i<=10;i++){
      setTimeout(() => {
        this.service.getSingleCharacter(this.service.id.toString()).subscribe(
          (result:any)=>{
            this.list.push(result);
            this.isSuccess=true;
          
          },(error:any)=>{
            console.error('Error : '+error);
          }
        )
        this.isSuccess=false;
        this.service.id++;

      }, 1000);
    } 

   
    
  }

}

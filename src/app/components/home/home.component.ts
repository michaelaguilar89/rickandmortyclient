import { Component,OnInit,HostListener,NgModule } from '@angular/core';
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
  searchValue='';
  status='';
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
      this.isSuccess=true;

      setTimeout(() => {
        
        this.getData();  
      }, 1000);
    }
  }


  send(){
    console.log('value : '+this.searchValue+' status : '+this.status)
    this.service.getByCharacters(this.searchValue,this.status).
    subscribe(
      (data:any)=>{
        this.list=data.results;
      },(error:any)=>{
        console.log(error.error);
        alert(this.searchValue+' not found !');
      }
    )
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
            //alert('Error : '+error.error);
          }
        )
        this.isSuccess=false;
        this.service.id++;

      }, 500);
    } 

   
    
  }

}

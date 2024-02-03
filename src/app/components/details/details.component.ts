import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { Rickandmorty } from 'src/app/models/rickandmorty';
import { RickandmortyService } from 'src/app/services/rickandmorty.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  private id='';
  isLoading=true;
  data:Rickandmorty|any;
  error='';
  /**
   *
   */
  constructor(private route:ActivatedRoute,private service:RickandmortyService) {
    
    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params:ParamMap)=>{
        this.id=this.route.snapshot.paramMap.get('id')!
      }
     
    )

    setTimeout(() => {
      this.service.getSingleCharacter(this.id).subscribe(
        (result:Rickandmorty)=>{
          this.data=result;
          this.isLoading=false;
        },(error:any)=>{
          this.error=error;
        }
      )
    }, 1500);
    
    this.service.setValue();
  
  }

  
}

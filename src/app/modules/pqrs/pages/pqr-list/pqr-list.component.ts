import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { PqrsService } from 'src/app/core/services/pqrs.service';

@Component({
  selector: 'app-pqr-list',
  templateUrl: './pqr-list.component.html',
  styleUrls: ['./pqr-list.component.scss']
})
export class PqrListComponent implements OnInit {

  constructor(private pqrService : PqrsService) { }

  pqrsList:any;
  pqrsListObservable!: Subscription;
 
  ngOnInit(): void {
    this.pqrsListObservable = this.pqrService.getAllPQR().subscribe((data)=>{
      this.pqrsList = data;
      console.log("list ",this.pqrsList);
      
    })
  }

  ngOnDestroy(){
    this.pqrsListObservable.unsubscribe();
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { NgxPaginationModule} from 'ngx-pagination';
@Component({
  selector: 'app-grammar-note',
  templateUrl: './grammar-note.component.html',
  styleUrls: ['./grammar-note.component.css'],

})
export class GrammarNoteComponent  {
  title = 'JSON to Table Example';
  sign = 'plus';  // or minus if you want that first
  sign1 ='plus';
   toggleSign() {
     if(this.sign == 'plus') {
       this.sign = 'minus';
     } else {
       this.sign = 'plus';
     }
  
  }
    toggleSigni() {
     if(this.sign1 == 'plus') {
       this.sign1 = 'minus';
     } else {
       this.sign1 = 'plus';
     }
  
  }
  constructor (private httpService: HttpClient) { }
  arrImage: string [];
  ngOnInit() { this.httpService.get('./assets/data/data.json').subscribe(
    data => {
      this.arrImage = data as string [];	 // FILL THE ARRAY WITH DATA.
        console.log(this.arrImage[1]);
    },
    (err: HttpErrorResponse) => {
      console.log (err.message);
    }
  );
  }

}

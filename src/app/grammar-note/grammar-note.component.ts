import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-grammar-note',
  templateUrl: './grammar-note.component.html',
  styleUrls: ['./grammar-note.component.css']
})
export class GrammarNoteComponent  {
  title = 'JSON to Table Example';
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

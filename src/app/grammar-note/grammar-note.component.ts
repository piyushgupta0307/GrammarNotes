import { ViewChild, Pipe, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-grammar-note',
  templateUrl: './grammar-note.component.html',
  styleUrls: ['./grammar-note.component.css'],

})
@Pipe({
  name: 'safe'
})

export class GrammarNoteComponent {
  @ViewChild('videoPlayer') videoplayer: any;
  title = 'JSON to Table Example';
  sign = 'plus';  // or minus if you want that first
  sign1 = 'plus';
  arrImage: string[];
  
  typeOfDownload: any = "";
  downloadIndex = 0;
  private assestsPath = "assets/";
  videoPath: any = this.assestsPath+'video/level2_lesson01_v2.mp4';
  constructor(private httpService: HttpClient) { }

  ngOnInit() {
    this.httpService.get(this.assestsPath+'/data/data.json').subscribe(
      data => {
        this.arrImage = data as string[];	 // FILL THE ARRAY WITH DATA.
        console.log(this.arrImage[1]);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }

  toggleSign() {
    if (this.sign == 'plus') {
      this.sign = 'minus';
    } else {
      this.sign = 'plus';
    }
  }

  toggleSigni() {
    if (this.sign1 == 'plus') {
      this.sign1 = 'minus';
    } else {
      this.sign1 = 'plus';
    }
  }

  setTypeOfDownload(type) {
    this.typeOfDownload = type;
  }

  playVideo(videoPath, inex) {
    this.downloadIndex = inex;
    this.videoPath = this.assestsPath + videoPath;
    this.playVideoAuto();
  }

  playVideoAuto() {
    this.videoplayer.nativeElement.play();
  }
  download() {
    let file = this.arrImage[this.downloadIndex][this.typeOfDownload];
    window.open(this.assestsPath+file);
  }
}

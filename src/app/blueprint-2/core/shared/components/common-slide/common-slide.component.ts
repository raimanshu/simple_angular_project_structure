import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-common-slide',
  templateUrl: './common-slide.component.html',
  styleUrls: ['./common-slide.component.css']
})
export class CommonSlideComponent implements OnInit {
  heading:string;
  paragraph:string;

  constructor(private authService:AuthService) { 
    this.authService.getMessage().subscribe(res => {
      console.log(res);
      this.heading = res.text.heading;
      this.paragraph = res.text.paragraph;
    })
  }

  ngOnInit(): void {

  }

}

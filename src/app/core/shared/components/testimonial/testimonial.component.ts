import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/core/service/common.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    // mouseDrag: false,
    // touchDrag: false,
    // pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3  
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

  images = [
    {id:1, path: './assets/images/t1.jpg'},
    {id:2, path: './assets/images/t2.jpg'},
    {id:3, path: './assets/images/t3.jpg'},
    {id:4, path: './assets/images/t4.jpg'},
    {id:5, path: './assets/images/t2.jpg'},
    {id:6, path: './assets/images/t3.jpg'},
    {id:6, path: './assets/images/t4.jpg'},
]
  constructor(
    private commonService: CommonService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getAirpartImagesList();
  }

  getAirpartImagesList(){
    this.commonService.getAirPartImagesList().subscribe((res) => {
      this.images = res.data;
    },(error) => {
      // this.toastr.error("Something went wrong.");
    });
  }

}

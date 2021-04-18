import { Component, OnInit } from '@angular/core';
import { RoutePath } from 'src/app/core/config';
import { CommonService } from 'src/app/core/service/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  externalLinks?= RoutePath;
  lists = [];
  all: boolean = false;
  airpart: boolean = false;
  aircraft: boolean = false;
  loader:boolean = false;
  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.airpartList('all');
  }

  airpartList(value) {
    let payload = {
      user_id: localStorage.getItem('user_id'),
      list_type: value,
      list_for: "other",
    }
    this.loader = true;
    this.commonService.getAllAirpartsList(payload).subscribe((res) => {
      this.loader = false;
      this.handleResponse(value, res.data);
    }, (error) => {
      this.loader = false;
      console.log(error);
    })
  }

  handleResponse(type, lists) {
    switch (type) {
      case 'all':
        let arr = [];
        for (var key of Object.keys(lists)) {
          if (lists[key]["data"].length != 0) {
            arr.push.apply(arr, lists[key]["data"]);
          }
        }
        // this.lists = arr;
        this.lists.push.apply(this.lists, arr);
        arr.length = 0;
        this.airpart = false;
        this.aircraft = false;
        this.all = true;
        console.log(this.lists);
        break;
      case 'aircraft':
        this.lists = lists.aircrafts.data;
        this.airpart = false;
        this.aircraft = true;
        this.all = false;
        console.log(this.lists);
        break;
      case 'airpart':
        this.lists = lists.airparts.data;
        this.airpart = true;
        this.aircraft = false;
        this.all = false;
        console.log(this.lists);
        break;
      default: console.log("Donot match any option.");
        break;
    }
  }

  transformDate(apiDate) {
    let date = new Date(apiDate);
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return date.getDate() + ' ' + monthNames[date.getMonth()] + ', ' + date.getFullYear();
  }

  showImages(list){
    if('image_url' in list && list.image_url != ''){
      return list.image_url;
    } else if('aircraft_image' in list && list.aircraft_image != ''){
      return list.aircraft_image;
    }
    //  else if('image_url' in list && list.image_url == ''){
    //   return '../../../../assets/images/part/icons/p2.png';
    // }
     else {
      return '../../../../assets/images/f1.jpg';
    }
  }

}

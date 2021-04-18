import { CommonService } from 'src/app/core/service/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-airpart-form',
  templateUrl: './airpart-form.component.html',
  styleUrls: ['./airpart-form.component.css']
})
export class AirpartFormComponent implements OnInit {
  stateList = [
    {id:1, state_name:'demo 1'},
    {id:2, state_name:'demo 2'},
    {id:3, state_name:'demo 3'},
    {id:4, state_name:'demo 4'},
    {id:5, state_name:'demo 5'},
  ]
  aircraftType = [
    {id:"Balloon", name:'Balloon'},
    {id:"Blimp/Dirigible", name:'Blimp/Dirigible'},
    {id:"Fixed wing multi engine", name:'Fixed wing multi engine'},
    {id:"Fixed wing single engine", name:'Fixed wing single engine'},
    {id:"Glider", name:'Glider'},
    {id:"Gyroplane", name:'Gyroplane'},
    {id:"Hybrid Lift", name:'Hybrid Lift'},
    {id:"Other", name:'Other'},
    {id:"Powered Parachute", name:'Powered Parachute'},
    {id:"Rotorcraft", name:'Rotorcraft'},
    {id:"Weight-shift-control", name:'Weight-shift-control'},
  ];
  conditionCode = [
    {id:"AR",name:"AR"},
    {id:"IN",name:"IN"},
    {id:"NE",name:"NE"},
    {id:"NS",name:"NS"},
    {id:"OH",name:"OH"},
    {id:"RP",name:"RP"},
    {id:"SV",name:"SV"},
    {id:"MD",name:"MD"},
    {id:"NR",name:"NR"},
    {id:"FN",name:"FN"},
  ];
  airPartsForm: FormGroup
  submitted = false;
 
  pricelist = [
    {id:1, name:'USD'}
  ]
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.airPartsFormInitialization();
  }

  airPartsFormInitialization(){
    this.airPartsForm = this.fb.group({
      aircraft_type: ['',[Validators.required]],
      part_number: ['',[Validators.required]],
      name: ['',[Validators.required]],
      email: [localStorage.getItem('email'),[Validators.required]],
      quantity: ['',[Validators.required]],
      alt_part_number: [''],
      condition_code: ['',[Validators.required]],
      uom: ['',],
      engine_type: [''],
      nsn: ['', ],
      list_price: ['',],
      pricelist: ['USD',],
      cert: ['', ],
      cage_code: ['',],
      location: ['', ],
      description: ['',],
    })
  }

  get f(){
    return this.airPartsForm.controls;
  }

  submitAirPartsForm(){
    this.submitted = true;
    console.log(this.airPartsForm.value);
    if (!this.airPartsForm.invalid) {
      this.createAirpartsPayload(this.airPartsForm.value);
    }
  }

  createAirpartsPayload(payload){
    let data = {
      user_id: localStorage.getItem('user_id'),
      aircraft_type:payload.aircraft_type,
      part_number: payload.part_number,
      name: payload.name,
      email: payload.email,
      quantity: payload.quantity,
      alt_part_number:payload.alt_part_number,
      condition_code:payload.condition_code,
      uom: payload.uom,
      engine_type: payload.engine_type,
      nsn: payload.nsn,
      cage_code: payload.cage_code,
      list_price: payload.list_price,
      cert: payload.aircraft_type,
      location: payload.location,
      description: payload.description
    }
    this.commonService.createAirpart(data).subscribe((res) => {
      console.log(res);
      this.toastr.success(res.message);
      this.airPartsForm.reset();
    }, (error) => {
      // this.toastr.error("Something went wrong.");
      console.log(error);
    });
  }

}

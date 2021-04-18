import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/core/service/common.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  title: string;
  closeBtnName: string;
  submitted: boolean = false;
  data: any;
  editProfileForm: FormGroup;
  photoUrl:string = "./assets/images/dashboard/user-profile.png";


  @Input() public profileDetails;
  loader: boolean = false;
  public event: EventEmitter<any> = new EventEmitter();
  filestring: any;
  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    console.log(this.data);

    this.editProfileForm = this.fb.group({
      // image: [this.data.image, Validators.required],
      email: [this.data.email, Validators.required],
      first_name: [this.data.first_name, Validators.required],
      last_name: [this.data.last_name, Validators.required],
      phone: [this.data.phone, Validators.required]
    })
    this.photoUrl = this.data.image;
  }
  
  get f(){
    return this.editProfileForm.controls;
  }

  submit() {
    this.submitted = true;
    console.log(this.editProfileForm.value);
    if (!this.editProfileForm.invalid) {
      let payload = {
        user_id: this.data.id,
        image: this.photoUrl,
        email: localStorage.getItem('email'),
        first_name: this.editProfileForm.value.first_name,
        last_name: this.editProfileForm.value.last_name,
        phone: this.editProfileForm.value.phone
      }
      this.loader = true;
      this.commonService.editProfileData(payload).subscribe((res) => {
        console.log(res);
        this.loader = false;
        this.bsModalRef.hide();
        this.toastr.success("Data saved successfully.");

      }, (error) => {
        // this.toastr.error("Something went wrong.");
        this.loader = false;
        console.log(error);
      });
    }

  }

  // onFileSelect(event) {
  //   [
  //     console.log(event)
  //   ]
  // };


  fileChangeEvent(event: any) {
    let url = '';
    if (event.target.files && event.target.files[0]) {
      let condition = event.target.files[0].type == 'image/png' || event.target.files[0].type == 'image/jpg' || event.target.files[0].type == 'image/jpeg' || event.target.files[0].type == 'image/gif'
      if (condition) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          url = event.target.result;
          var binaryString = event.target.result;
          this.filestring = event.target.result;
          this.photoUrl = this.filestring;
          // this.imagesgroup.push(event.target.result);
          // console.log(event.target.result);
        }
        reader.readAsDataURL(event.target.files[0]);
      } else {
        this.toastr.error("Please select image")
      }
    }
  }

  triggerEvent(item: string) {
    this.event.emit({ data: item, res: 200 });
  }

}

import { CommonService } from 'src/app/core/service/common.service';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { finalize } from 'rxjs/operators';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  profileDetails: any = [];
  bsModalRef: BsModalRef;
  loader: boolean = false;
  photoUrl = "";
 
  constructor(
    private CommonService: CommonService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.getProfileDetails();
  }

  getProfileDetails() {
    this.loader = true;
    this.CommonService.getProfileDetailsApi().subscribe((res) => {
      console.log(res);
      this.loader = false;
      this.profileDetails = res.data;
      this.photoUrl = res.data.image;
      if (this.profileDetails.company != null) {
        localStorage.setItem('company-id', this.profileDetails.company.id);
      }
    }, (error) => {
      this.loader = false;
      console.log(error);
    })
  }


  handleFileInput(event) {

    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      let condition = event.target.files[0].type == 'application/pdf' || event.target.files[0].type == 'image/png' || event.target.files[0].type == 'image/jpg' || event.target.files[0].type == 'image/jpeg' || event.target.files[0].type == 'image/gif'
      if(condition){
        const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        const imageSrc = reader.result as string;
        if(imageSrc !== null && imageSrc !== '' && imageSrc !== undefined){
          this.imageApi(imageSrc)
        }
      };
      }else{
        this.toastr.error("Please select image")
      }

    }
  }

  imageApi(src){
    this.profileDetails;
    let payload = {
      user_id: this.profileDetails.id,
      image: src,
      email: localStorage.getItem('email'),
      first_name: this.profileDetails.first_name,
      last_name: this.profileDetails.last_name,
      phone: this.profileDetails.phone
    }
    debugger
    console.log(payload);
    this.loader = true;
      this.commonService.editProfileData(payload).subscribe((res) => {
        console.log(res);
        this.toastr.success("Data saved successfully.");
        this.getProfileDetails();
      }, (error) => {
        // this.toastr.error("Something went wrong.");
        this.loader = false;
        console.log(error);
      });
    }
  

  changePassword() {
    this.bsModalRef = this.modalService.show(ChangePasswordComponent, {
    })
  }

  editProfile() {
    const data = this.profileDetails;

    const initialState = {
      data: this.profileDetails
    };
    this.bsModalRef = this.modalService.show(EditProfileComponent, { class: 'modal-lg', initialState });

    this.bsModalRef.onHide.subscribe((reason: string | any) => {
      console.log(reason);
      this.getProfileDetails();
    })
  }
}

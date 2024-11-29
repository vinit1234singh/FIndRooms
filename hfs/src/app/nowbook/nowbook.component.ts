import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nowbook',
  templateUrl: './nowbook.component.html',
  styleUrls: ['./nowbook.component.css'],
  standalone:true,
  imports: [CommonModule,ReactiveFormsModule,HttpClientModule,FormsModule,RouterLink,RouterOutlet]
})
export class NowbookComponent {
  bookingForm: FormGroup;
  minDate: string;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
  
  this.bookingForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    street: ['', Validators.required],
    state: ['', Validators.required],
    pincode: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    bookingDate: ['', Validators.required],
    'bedtype':['', Validators.required]
  });
}

amount:any;
selectedTeam = '';
	onselected(value:string): void {
		if(value == 'single' || value == 'Single'){
      this.amount = 5000;
    }
    else if(value == 'double' || value == 'Double'){
      this.amount = 7000;
      }
      else if(value == 'king' || value == 'King'){
        this.amount = 9000;
        }
        else if(value == 'queen' || value == 'Queen'){
          this.amount = 8000;
        }
	}


// Method to handle form submission
onSubmit() {
  if (this.bookingForm.valid) {
    const formData = this.bookingForm.value;
    // Here you can sanitize the data before sending it to the server
    console.log('Form Submitted:', formData);
    // You can also perform additional sanitization if necessary
    this.http.post("http://localhost:8092/room/booking",formData).subscribe((response) =>{
      console.log(response);
      alert("Booking Confirmed");

    })
  } else {
    console.log('Something is Missing');
  }
}
logout(){

}
name:any = "Vinit";
email:any = "sdadas@asa.as";
Navigation = [
  {label:'Dashboard', href: "/dashboard"},
  {label:'Show Room', href: "/showroom"},
  {label:'Payment Status', href:'/payment'},
  {label: 'Logout', href:'/logout'},
  
];

}

import { Component, OnInit } from '@angular/core';
import { faPhone,faFax,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSkype } from '@fortawesome/free-brands-svg-icons';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  faPhone=faPhone;
  faFax=faFax;
  faEnvelope=faEnvelope;
  faSkype=faSkype;
  //this is going to host reactive form
  feedbackForm!: FormGroup;
  feedback!: Feedback;
  contactType = ContactType;
  //to construct reactive form we would inject form builder withuin constructor
  constructor(private fb:FormBuilder) {
    this.createForm();
  }


  ngOnInit(): void {
  }
  createForm(){
    this.feedbackForm=this.fb.group({
      //to validate put this into array and specify validations
      firstname: ['',Validators.required],
      lastname: ['',Validators.required],
      telnum: [0,Validators.required],
      email: ['',Validators.required],
      agree: false,
      contacttype: 'None',
      message: ''

    });

  }
  onSubmit(){
    this.feedback=this.feedbackForm.value;
    console.log(this.feedback);
    //reset to initial state
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum: 0,
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''

    });
  }


}

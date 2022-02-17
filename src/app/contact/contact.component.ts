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
  formErrors: { [key: string]: any } = {
    'firstname': '',
    'lastname': '',
    'telnum': '',
    'email': ''
  };

  validationMessages: { [key: string]: any } = {
    
    'firstname': {
      'required':      'First Name is required.',
      'minlength':     'First Name must be at least 2 characters long.',
      'maxlength':     'FirstName cannot be more than 25 characters long.'
    },
    'lastname': {
      'required':      'Last Name is required.',
      'minlength':     'Last Name must be at least 2 characters long.',
      'maxlength':     'Last Name cannot be more than 25 characters long.'
    },
    'telnum': {
      'required':      'Tel. number is required.',
      'pattern':       'Tel. number must contain only numbers.'
    },
    'email': {
      'required':      'Email is required.',
      'email':         'Email not in valid format.'
    }
  };
  //to construct reactive form we would inject form builder withuin constructor
  constructor(private fb:FormBuilder) {
    this.createForm();
  }


  ngOnInit(): void {
  }
  createForm():void{
    this.feedbackForm=this.fb.group({
      //to validate put this into array and specify validations
       firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      telnum: ['', [Validators.required, Validators.pattern] ],
      email: ['', [Validators.required, Validators.email] ],
      agree: false,
      contacttype: 'None',
      message: ''

    });
    //value changes is observable that watch changes in input boxes
    this.feedbackForm.valueChanges
    .subscribe(data => this.onValueChanged(data));
    
    this.onValueChanged();

  

  }
  onValueChanged(data?:any){
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field ] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
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

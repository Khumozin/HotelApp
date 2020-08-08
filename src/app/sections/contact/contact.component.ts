import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.generateContactForm();
  }

  generateContactForm() {
    this.contactForm = new FormGroup({
      'Name': new FormControl(null, Validators.required),
      'Email': new FormControl(null, Validators.required),
      'Subject': new FormControl(null, Validators.required),
      'Message': new FormControl(null, Validators.required)
    });
  }

  onSendMessage() {
    //   if (this.contactForm.valid) {
    //     const formData: Message = {
    //       ID: null,
    //       Name: this.contactForm.value.Name,
    //       Email: this.contactForm.value.Email,
    //       Subject: this.contactForm.value.Subject,
    //       Message: this.contactForm.value.Message,
    //       IsRead: false
    //     };

    //     this.contactForm.reset();
    //     this.contactService.submitMessage(formData)
    //       .subscribe(noop, err => {
    //         console.error(err);
    //       });
    //   }
  }

}

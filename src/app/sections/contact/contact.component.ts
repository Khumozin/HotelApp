import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, switchMap } from 'rxjs/operators';
import { EmailForSave } from 'src/app/shared/models/email-for-save.model';
import { Email, EmailType } from 'src/app/shared/models/email.model';
import { EmailService } from 'src/app/shared/services/email.service';
import { SmtpService } from 'src/app/shared/services/smtp.service';

declare const M: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input() appName: string;

  contactForm: FormGroup;

  constructor(private smtpService: SmtpService, private emailService: EmailService) { }

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
    if (this.contactForm.valid) {
      const email: Email = {
        Name: this.contactForm.value.Name,
        Email: this.contactForm.value.Email,
        Subject: this.contactForm.value.Subject,
        Message: this.contactForm.value.Message,
        Token: null,
        MailType: EmailType.SystemResponse,
        AppName: this.appName
      };

      const emailForSave: EmailForSave = {
        ID: null,
        SystemConfigID: null,
        Name: email.Name,
        Subject: email.Subject,
        Message: email.Message,
        Read: false,
        DateSent: null,
        DateReplied: null
      };

      this.contactForm.reset();

      this.emailService.addEmail(emailForSave)
        .pipe(
          map(savedEMail => savedEMail),
          switchMap(e => this.smtpService.sendEmail(email)),
          map(s => s)
        ).subscribe(res => {
          if (res) {
            M.toast({ html: `${res['Response']}`, classes: 'rounded' });
          } else {
            M.toast({ html: `Something went wrong`, classes: 'rounded amber accent-3' });
          }
        }, err => {
          console.error(err.error.errors.dateReplied);
          M.toast({ html: `Something went wrong`, classes: 'rounded amber accent-3' });
        });

    }
  }

}

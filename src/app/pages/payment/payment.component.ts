import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const M: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onPaypalPayment() {
    // M.toast({ html: 'Payment was successful!', classes: 'rounded light-green accent-3' });
    this.router.navigate(['/paypal']);
  }

  onStripePayment() {
    // M.toast({ html: 'Payment was successful!', classes: 'rounded light-green accent-3' });
  }

}

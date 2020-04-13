import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Rooms } from 'src/app/shared/enums/rooms.enum';

import { gallery } from '../../shared/consts/data';

declare var paypal;

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.scss']
})
export class PaypalComponent implements OnInit {

  @ViewChild('paypal', { static: true }) paypalEl: ElementRef;

  image = gallery.find(i => i.roomType === Rooms.Executive).image;

  product = {
    price: 4936.61,
    description: 'Executive Rooms (4)',
    img: this.image
  };

  paidFor = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.image);

    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: this.product.description,
                amount: {
                  currency_code: 'USD',
                  value: this.product.price
                }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          this.paidFor = true;
          console.log(order);
        },
        onError: err => {
          console.log(err);
        }
      })
      .render(this.paypalEl.nativeElement);
  }

}

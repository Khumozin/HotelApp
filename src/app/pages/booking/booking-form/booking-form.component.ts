import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare const M: any;

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingFormComponent implements OnInit, AfterViewInit, OnDestroy {

  // @Input() roomTypes: RoomType[];

  // bookingForm: FormGroup;
  // currentBooking: Booking;
  // selectedRoomID: string;
  // availableRooms: number[] = [];
  // onRoomTypeChangeSub: Subscription;
  // roomTypeSelect: HTMLElement;

  constructor(
    private router: Router,
    private route: ActivatedRoute) {
    // this.selectedRoomID = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    // this.getNumberOfRoomsForSelectedRoom(this.selectedRoomID);
    // this.generateBookingForm();
  }

  ngAfterViewInit() {
    this.initDatepicker();
    this.initSelect();
  }

  ngOnDestroy() {
  }

  initDatepicker() {
    const elems = document.querySelectorAll('.datepicker');
    M.Datepicker.init(elems, {
      format: 'yyyy-mm-dd'
    });
  }

  initSelect() {
    const elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});
  }

  generateBookingForm() {
    // const date = new Date().toISOString().substring(0, 10);
    // this.bookingForm = new FormGroup({
    //   'FirstName': new FormControl(null, Validators.required),
    //   'Surname': new FormControl(null, Validators.required),
    //   'ArrivalDate': new FormControl(date, Validators.required),
    //   'DepartureDate': new FormControl(date, Validators.required),
    //   'RoomTypeID': new FormControl(this.selectedRoomID, Validators.required),
    //   'NumberOfRooms': new FormControl(0, Validators.required),
    //   'Cellphone': new FormControl(null, Validators.required),
    //   'Email': new FormControl(null, Validators.required)
    // });

    // this.onRoomTypeChangeSub = this.bookingForm.controls['RoomTypeID']
    //   .valueChanges
    //   .subscribe(value => {
    //     this.getNumberOfRoomsForSelectedRoom(value);

    //     //#region  update No. of Rooms select
    //     const noOfRoomsSelect = document.getElementById('noOfRoomsSelect');
    //     noOfRoomsSelect.innerHTML = '';

    //     this.availableRooms.forEach(ii => {
    //       noOfRoomsSelect.insertAdjacentHTML('beforeend', `<option value='${ii}'>${ii + 1}</option>`);
    //     })

    //     M.FormSelect.init(noOfRoomsSelect, {});
    //     //#endregion
    //   });
  }

  getNumberOfRoomsForSelectedRoom(id: string) {
    // const availableRooms = this.roomTypes.find(ii => ii.ID === id).AvailableRooms;
    // this.availableRooms = [...Array(availableRooms).keys()];
  }

  onConfirm() {
    // this.sharedService.setIsBusy(true);

    // const booking: Booking = this.bookingForm.value;
    // booking.NumberOfRooms = booking.NumberOfRooms + 1;
    // booking.BookingNumber = null;
    // booking.IsConfirmed = false;
    // booking.IsPaid = false;

    // this.bookService.addBooking(booking)
    //   .subscribe(results => {
    //     this.sharedService.setIsBusy(false);
    //     this.router.navigate(['/confirmation', results.ID]);
    //   }, err => {
    //     console.error(err);
    //   }, () => this.sharedService.setIsBusy(false));
  }

}

import { Component, OnInit } from '@angular/core';

declare const M: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  instance: any;

  constructor() { }

  ngOnInit(): void {
    this.initModal();
  }

  initModal() {
    var elems = document.querySelectorAll('.modal');
    this.instance = M.Modal.init(elems, {});
  }

  onClose() {
    console.log('Deleted');
  }

  onDelete() {
    console.log('Deleted');
  }

}

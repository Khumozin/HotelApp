import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import SignaturePad from 'signature_pad';

declare const M: any;

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit, AfterViewInit {

  signaturePad: any;
  cost = '986';
  timestamp = new Date();

  @ViewChild('sPad', { read: ElementRef }) signaturePadElement: ElementRef;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.signaturePad = new SignaturePad(this.signaturePadElement.nativeElement);
  }

  onClear() {
    this.signaturePad.clear();
  }

  download(dataURL, filename) {
    if (navigator.userAgent.indexOf('Safari') > -1 && navigator.userAgent.indexOf('Chrome') === -1) {
      window.open(dataURL);
    } else {
      const blob = this.dataURLToBlob(dataURL);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;

      document.body.appendChild(a);
      a.click();

      window.URL.revokeObjectURL(url);
    }
  }

  dataURLToBlob(dataURL) {
    // Code taken from https://github.com/ebidel/filer.js
    const parts = dataURL.split(';base64,');
    const contentType = parts[0].split(':')[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;
    const uInt8Array = new Uint8Array(rawLength);
    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], { type: contentType });
  }

  dataURLToFile(dataURL, fileName): File {
    let arrayData = dataURL.split(','),
      mime = arrayData[0].match(/:(.*?);/)[1],
      bstr = atob(arrayData[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], fileName, { type: mime });
  }

  savePNG() {
    if (this.signaturePad.isEmpty()) {
    } else {
      const dataURL = this.signaturePad.toDataURL();
      const timestamp = new Date().toISOString().slice(0, 10);
      const fileName = `${timestamp}.png`;
      const file: File = this.dataURLToFile(dataURL, fileName);
      // this.download(dataURL, 'signature.png');
    }
  }

  onAccept() {
    this.savePNG();
    if (!this.signaturePad.isEmpty()) {
      this.router.navigate(['/payment']);
    } else {
      M.toast({ html: 'Please sign to continue!', classes: 'rounded amber accent-3' });
    }
  }

}

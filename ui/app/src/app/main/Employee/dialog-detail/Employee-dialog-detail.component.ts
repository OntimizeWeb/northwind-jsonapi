import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'employee-dialog-detail',
  templateUrl: './Employee-dialog-detail.component.html',
  styleUrls: ['./Employee-dialog-detail.component.scss']
})
export class EmployeeDialogDetailComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    protected sanitizer: DomSanitizer
  ) { }

  public getImageSrc(imgValue: string): any {
    return imgValue ? this.sanitizer.bypassSecurityTrustUrl(imgValue) : './assets/images/no-image-transparent.png';
  }

}

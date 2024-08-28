import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

import { EmployeeDialogDetailComponent } from '../dialog-detail/Employee-dialog-detail.component';
import { EmployeeDetailComponent } from '../detail/Employee-detail.component';

@Component({
  selector: 'Employee-home',
  templateUrl: './Employee-home.component.html',
  styleUrls: ['./Employee-home.component.scss']
})
export class EmployeeHomeComponent  {

  constructor(
    protected dialog: MatDialog,
    protected sanitizer: DomSanitizer,
    //  private reportStoreService: OReportStoreService
  ) { }

  public openDetail(data: any): void {
    this.dialog.open(EmployeeDetailComponent, {
      height: '730px',
      width: '920px',
      data: data
    });
  }

  public getImageSrc(imgValue: string): any {
    return imgValue ? this.sanitizer.bypassSecurityTrustUrl(imgValue) : './assets/images/no-image-transparent.png';
  }
}

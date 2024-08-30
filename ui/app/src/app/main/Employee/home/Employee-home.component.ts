import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { OGridComponent } from 'ontimize-web-ngx';
import { EmployeeDialogDetailComponent } from '../dialog-detail/Employee-dialog-detail.component';
import { EmployeeDetailComponent } from '../detail/Employee-detail.component';

@Component({
  selector: 'Employee-home',
  templateUrl: './Employee-home.component.html',
  styleUrls: ['./Employee-home.component.scss']
})
export class EmployeeHomeComponent  {

  @ViewChild('grid') grid: OGridComponent;
  constructor(
    protected dialog: MatDialog,
    protected sanitizer: DomSanitizer,
  ) { }

  public openDetail( data: any): void {
    this.grid.viewDetail(data);
  }


  public getImageSrc(imgValue: string): any {
    return imgValue ? this.sanitizer.bypassSecurityTrustUrl(imgValue) : './assets/images/no-image-transparent.png';
  }
}

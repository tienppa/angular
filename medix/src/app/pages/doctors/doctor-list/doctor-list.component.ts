import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/shared/components/base.component';
import { DoctorModel } from 'src/app/shared/models/doctor.model';
import { DoctorService } from 'src/app/shared/services/doctor.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  providers: [],
})
export class DoctorListComponent extends BaseComponent implements OnInit {
  public items: DoctorModel.DoctorInfo[] = [];
  public selected!: DoctorModel.DoctorInfo;
  public id!: string;
  public isShow: boolean = false;

  p: number = 1;

  constructor(
    private doctorService: DoctorService,
    private router: Router,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    super();
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    const me = this;
    me.getDoctors();
    // setTimeout(function () {
    //   me.isShow = true;
    // }, 2000);
  }

  onDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getDoctors() {
    const me = this;
    me.doctorService.getDoctors().subscribe({
      next: (res) => {
        me.items = [...(res as any)];
        me.isShow = true;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  removeDoctor(id: string): void {
    const me = this;
    me.doctorService.removeDoctor(id).subscribe({
      next: (res) => {
        me.getDoctors();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  goToAdd() {
    this.router.navigate(['doctors', 'add']);
  }

  open(content: any, data: DoctorModel.DoctorInfo) {
    this.selected = data;
    this.modalService.open(content);
  }

  close(content: any) {
    this.modalService.dismissAll(content);
  }

  reload() {
    const me = this;
    me.getDoctors();
  }
}

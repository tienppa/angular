import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/shared/components/base.component';
import { DoctorModel } from 'src/app/shared/models/doctor.model';
import { DoctorService } from 'src/app/shared/services/doctor.service';
import {
  NgbModalConfig,
  NgbModal,
  NgbModalRef,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  providers: [],
})
export class DoctorListComponent extends BaseComponent implements OnInit {
  public items: DoctorModel.DoctorInfo[] = [];
  public id!: string;

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
  }

  onDestroy(): void {}

  getDoctors() {
    const me = this;
    me.doctorService.getDoctors().subscribe({
      next: (res) => {
        me.items = [...(res as any)];
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  addDoctor() {
    const me = this;
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

  open(content: any) {
    this.modalService.open(content);
  }

  close(content: any) {
    console.log(content);
    // this.modalService.dismissAll(content);
  }
}

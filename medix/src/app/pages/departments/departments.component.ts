import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { BaseComponent } from 'src/app/shared/components/base.component';
import { DepartmentModel } from 'src/app/shared/models/department.model';
import { DoctorModel } from 'src/app/shared/models/doctor.model';
import { DepartmentRequest } from 'src/app/shared/models/request/department.request';
import { DepartmentService } from 'src/app/shared/services/department.service';
import { DoctorService } from 'src/app/shared/services/doctor.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
})
export class DepartmentsComponent extends BaseComponent implements OnInit {
  public items: DepartmentModel.DepartmentInfo[] = [];
  public item!: DepartmentModel.DepartmentInfo;
  public doctors: DoctorModel.DoctorInfo[] = [];
  public action!: string;

  constructor(
    private departmentService: DepartmentService,
    private doctorService: DoctorService,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    super();
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    const me = this;
    me.getDepartments();
    me.getDoctors();
  }

  onDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getDepartments() {
    const me = this;
    me.departmentService.getDepartments().subscribe({
      next: (res) => {
        me.items = [...(res as any)];
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getDoctors() {
    const me = this;
    me.doctorService.getDoctors().subscribe({
      next: (res) => {
        me.doctors = [...(res as any)];
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  addDepartment(data: DepartmentRequest.CreateDepartment): void {
    const me = this;
    me.departmentService.createDepartment(data).subscribe({
      next: (res) => {
        me.getDepartments();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  updateDepartment(data: DepartmentRequest.UpdateDepartment) {
    const me = this;
    me.departmentService.updateDepartment(me.item?.id, data).subscribe({
      next: (res) => {
        me.getDepartments();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteDepartment(id: string) {
    const me = this;
    me.departmentService.deleteDepartment(id).subscribe({
      next: (res) => {
        me.getDepartments();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  close(content: any) {
    const me = this;
    me.modalService.dismissAll(content);
  }

  open(content: any) {
    const me = this;
    me.modalService.open(content);
  }

  setAction(content: string) {
    const me = this;
    me.action = content;
  }

  setDepartment(content: DepartmentModel.DepartmentInfo) {
    const me = this;
    if (!content) return;
    me.item = content;
  }
}

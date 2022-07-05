import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base.component';
import { DepartmentModel } from 'src/app/shared/models/department.model';
import { DepartmentRequest } from 'src/app/shared/models/request/department.request';
import { DepartmentService } from 'src/app/shared/services/department.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
})
export class DepartmentsComponent extends BaseComponent implements OnInit {
  public items: DepartmentModel.DepartmentInfo[] = [];

  constructor(private departmentService: DepartmentService) {
    super();
  }

  ngOnInit() {
    const me = this;
    me.getDepartments();
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

  updateDepartment(id: string, data: DepartmentRequest.UpdateDepartment) {
    const me = this;
    me.departmentService.updateDepartment(id, data).subscribe({
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
}

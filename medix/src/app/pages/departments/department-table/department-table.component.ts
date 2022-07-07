import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base.component';
import { DepartmentModel } from 'src/app/shared/models/department.model';
import { DoctorModel } from 'src/app/shared/models/doctor.model';

@Component({
  selector: 'app-department-table',
  templateUrl: './department-table.component.html',
})
export class DepartmentTableComponent extends BaseComponent implements OnInit {
  @Input() items: DepartmentModel.DepartmentInfo[] = [];
  @Input() doctors: DoctorModel.DoctorInfo[] = [];

  @Output() delete$ = new EventEmitter<string>();
  @Output() open$ = new EventEmitter();

  @Output() action$ = new EventEmitter<string>();
  @Output() department$ = new EventEmitter<DepartmentModel.DepartmentInfo>();

  p: number = 1;
  avt: string = './assets/images/no.png';
  item!: DepartmentModel.DepartmentInfo;

  constructor() {
    super();
  }

  ngOnInit() {
    const me = this;
  }

  onDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  delete(id: string) {
    const me = this;
    me.delete$.emit(id);
  }

  open() {
    const me = this;
    me.open$.emit();
  }

  openModal(status: string, item?: DepartmentModel.DepartmentInfo) {
    const me = this;
    me.action$.emit(status);
    me.department$.emit(item);
    me.open();
  }

  convertLabel(str: any): string {
    let label = 'Active';
    if (str === false) {
      label = 'Inactive';
    }
    return label;
  }

  findNameById(id: string): any {
    const me = this;
    let result: DoctorModel.DoctorInfo[];
    result = me.doctors?.filter((el) => el.id === id);
    return result[0]?.name;
  }

  findAvatarById(id: string): any {
    const me = this;
    let result: DoctorModel.DoctorInfo[];
    result = me.doctors?.filter((el) => el.id === id);
    return result[0]?.avt;
  }
}

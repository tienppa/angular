import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/shared/components/base.component';
import { DepartmentModel } from 'src/app/shared/models/department.model';
import { DoctorModel } from 'src/app/shared/models/doctor.model';
import { DoctorService } from 'src/app/shared/services/doctor.service';

@Component({
  selector: 'app-department-modify',
  templateUrl: './department-modify.component.html',
  providers: [],
})
export class DepartmentModifyComponent extends BaseComponent implements OnInit {
  @Output() open$ = new EventEmitter();
  @Output() close$ = new EventEmitter();

  @Input() item!: DepartmentModel.DepartmentInfo;

  departmentForm!: FormGroup;
  selection!: any;
  avt: any = './assets/images/no.png';
  doctors: DoctorModel.DoctorInfo[] = [];

  controlNames = {
    name: 'name',
    doctorId: 'doctorName',
    gender: 'gender',
    manager: 'manager',
    status: 'status',
  };

  msg = {
    required: 'Please enter input value',
    email: 'Email is not valid',
    phone: 'Phone is not valid',
  };

  constructor(
    private builder: FormBuilder,
    private doctorService: DoctorService
  ) {
    super();
  }

  ngOnInit() {
    const me = this;
    me.getDoctors();
    me.initForm();
    me.departmentForm.patchValue(me.item);
    me.selection = me.item.doctorId;
    console.log(me.selection);
  }

  onDestroy(): void {
    const me = this;
    me.destroy$.next();
    me.destroy$.complete();
  }

  initForm(): void {
    const me = this;
    me.departmentForm = me.builder.group({
      [me.controlNames.name]: ['', [Validators.required]],
      [me.controlNames.doctorId]: ['', [Validators.required]],
      [me.controlNames.gender]: ['', [Validators.required]],
      [me.controlNames.manager]: ['', [Validators.required]],
      [me.controlNames.status]: ['', [Validators.required]],
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

  onSubmit() {
    const me = this;
  }

  close() {
    const me = this;
    me.close$.emit();
  }

  open() {
    const me = this;
    me.open$.emit();
  }

  onChange(event: any) {
    const me = this;
    if (me.selection === event) return;
    me.selection = event;
    if (me.doctors) {
      let result = me.doctors.filter((el) => el.id === event);
      me.avt = result[0].avt;
    }
  }
}

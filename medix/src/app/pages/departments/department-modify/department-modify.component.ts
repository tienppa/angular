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
  @Output() add$ = new EventEmitter();
  @Output() edit$ = new EventEmitter();

  @Input() item!: DepartmentModel.DepartmentInfo;
  @Input() action: string = '';

  departmentForm!: FormGroup;
  select!: any;
  avt: any = './assets/images/no.png';
  doctors: DoctorModel.DoctorInfo[] = [];

  controlNames = {
    name: 'name',
    doctorId: 'doctorId',
    doctorName: 'doctorName',
    doctorAvatar: 'doctorAvatar',
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
    if (me.action != 'add') {
      me.departmentForm.patchValue(me.item);
      me.avt = me.item.doctorAvatar;
    }
    me.select = me.item?.doctorId;
    console.log(me.action);
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
      [me.controlNames.doctorName]: ['', [Validators.required]],
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
    if (!me.departmentForm.valid) return;
    const data = {
      ...me.departmentForm.value,
      doctorAvatar: me.avt,
    };
    if (me.action === 'add') {
      me.add$.emit(data);
    } else {
      me.edit$.emit(data);
    }
    me.close();
    // cach dong o cha
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
    if (me.select === event) return;
    me.select = event;
    if (me.doctors) {
      let result = me.doctors.filter((el) => el.id === event);
      me.avt = result[0].avt;
      me.departmentForm.get('doctorName')?.setValue(result[0].name);
      me.departmentForm.get('doctorId')?.setValue(result[0].id);
    }
  }
}

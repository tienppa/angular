import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorRequest } from 'src/app/shared/models/request/doctor.request';

@Component({
  selector: 'app-doctor-add',
  templateUrl: './doctor-add.component.html',
})
export class DoctorAddComponent implements OnInit {
  public avt: any = './assets/images/no.png';
  doctorForm!: FormGroup;

  @Output() addDoctor$ = new EventEmitter<DoctorRequest.CreateDoctor>();

  controlNames = {
    name: 'name',
    address: 'address',
    position: 'position',
    phone: 'phone',
    email: 'email',
  };

  valueControlName = {
    name: 'Master Yi',
    address: 'HongKong Doll',
    position: 'HK',
    phone: '0867677061',
    email: 'tienppa@gmail.com',
  };

  msg = {
    required: 'Please enter input value',
    email: 'Email is not valid',
    phone: 'Phone is not valid',
  };

  constructor(private builder: FormBuilder) {}

  ngOnInit() {
    const me = this;
    me.initForm();
  }

  onSubmit() {
    const me = this;
    if (me.doctorForm.valid) {
      const data = {
        ...me.doctorForm.value,
        avt: me.avt,
      };
      console.log(data);

      me.addDoctor$.emit(data);
    }
  }

  selectFile(event: Event) {
    const target = <HTMLInputElement>event.target;
    const files = <FileList>target.files;

    if (files && files[0]) {
      const reader = new FileReader();
      reader.onload = () => (this.avt = reader.result);
      reader.readAsDataURL(files[0]);
    }
  }

  private initForm(): void {
    const me = this;
    me.doctorForm = me.builder.group({
      [me.controlNames.name]: [me.valueControlName.name, [Validators.required]],
      [me.controlNames.address]: [
        me.valueControlName.address,
        [Validators.required],
      ],
      [me.controlNames.position]: [
        me.valueControlName.position,
        [Validators.required],
      ],
      [me.controlNames.email]: [
        me.valueControlName.email,
        [Validators.required, Validators.email],
      ],
      [me.controlNames.phone]: [
        me.valueControlName.phone,
        [Validators.required],
      ],
    });
  }
}

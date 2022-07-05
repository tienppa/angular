import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/shared/components/base.component';
import { DoctorModel } from 'src/app/shared/models/doctor.model';
import { DoctorRequest } from 'src/app/shared/models/request/doctor.request';
import { DoctorService } from 'src/app/shared/services/doctor.service';

@Component({
  selector: 'app-doctor-modify',
  templateUrl: './doctor-modify.component.html',
  providers: [],
})
export class DoctorModifyComponent extends BaseComponent implements OnInit {
  @Input() item!: DoctorModel.DoctorInfo;
  doctorForm!: FormGroup;
  avt: any = './assets/images/no.png';

  controlNames = {
    name: 'name',
    address: 'address',
    position: 'position',
    phone: 'phone',
    email: 'email',
  };

  msg = {
    required: 'Please enter input value',
    email: 'Email is not valid',
    phone: 'Phone is not valid',
  };
  @Output() reload$ = new EventEmitter();
  @Output() closeModal$ = new EventEmitter();

  constructor(
    private builder: FormBuilder,
    private doctorService: DoctorService
  ) {
    super();
  }

  ngOnInit() {
    const me = this;
    me.initForm();
    me.loadAvt();
  }

  onDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadAvt() {
    this.avt = this.item?.avt;
  }

  initForm(): void {
    const me = this;
    me.doctorForm = me.builder.group({
      [me.controlNames.name]: [me.item?.name, [Validators.required]],
      [me.controlNames.address]: [me.item?.address, [Validators.required]],
      [me.controlNames.position]: [me.item?.position, [Validators.required]],
      [me.controlNames.email]: [
        me.item?.email,
        [Validators.required, Validators.email],
      ],
      [me.controlNames.phone]: [me.item?.phone, [Validators.required]],
    });
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

  close() {
    this.closeModal$.emit();
  }

  onSubmit() {
    const me = this;
    if (me.doctorForm.valid) {
      const data = {
        ...me.doctorForm.value,
        avt: me.avt,
      };
      this.updateDoctor(data);
    }
  }

  public updateDoctor(data: DoctorRequest.UpdateDoctor) {
    const me = this;
    me.doctorService.updateDoctor(me.item.id, data).subscribe({
      next: (res) => {
        me.close();
        me.reload();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  public reload() {
    this.reload$.emit();
  }
}

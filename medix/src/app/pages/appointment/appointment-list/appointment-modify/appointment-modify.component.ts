import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppointmentModel } from 'src/app/shared/models/appointment.model';
import { AppointmentRequest } from 'src/app/shared/models/request/appointment.request';
import { AppointmentService } from 'src/app/shared/services/appointment.service';

@Component({
  selector: 'app-appointment-modify',
  templateUrl: './appointment-modify.component.html',
  providers: [],
})
export class AppointmentModifyComponent
  extends BaseComponent
  implements OnInit
{
  @Output() closeModal$ = new EventEmitter();
  @Output() reload$ = new EventEmitter();
  @Input() item!: AppointmentModel.AppointmentInfo;
  @Input() readonly!: boolean;
  @Input() isAdd!: boolean;

  appointmentForm!: FormGroup;
  avt: any = './assets/images/no.png';

  controlNames = {
    name: 'name',
    image: 'image',
    date: 'date',
    gender: 'gender',
    phone: 'phone',
    isAppointment: 'isAppointment',
    avatar: 'avatar',
  };

  msg = {
    required: 'Please enter input value',
    email: 'Email is not valid',
    phone: 'Phone is not valid',
  };

  constructor(
    private builder: FormBuilder,
    private appointmentService: AppointmentService
  ) {
    super();
  }

  ngOnInit() {
    const me = this;
    me.initForm();
    if (!me.isAdd) {
      me.appointmentForm.patchValue(me.item);
      me.avt = me.item?.avatar;
    }
    me.disableForm(me.readonly);
  }

  onDestroy(): void {
    const me = this;
    me.destroy$.next();
    me.destroy$.complete();
  }

  disableForm(readonly: boolean) {
    const me = this;
    if (readonly) {
      me.appointmentForm.disable();
    }
  }

  initForm(): void {
    const me = this;
    me.appointmentForm = me.builder.group({
      [me.controlNames.name]: ['', [Validators.required]],
      [me.controlNames.date]: ['', [Validators.required]],
      [me.controlNames.gender]: ['', [Validators.required]],
      [me.controlNames.phone]: ['', [Validators.required]],
      [me.controlNames.isAppointment]: ['', [Validators.required]],
    });
  }

  updateAppointment(data: AppointmentRequest.UpdateAppointment) {
    const me = this;
    me.appointmentService.updateAppointment(me.item?.id, data).subscribe({
      next: (res) => {
        me.close();
        me.reload();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  addAppointment(data: AppointmentRequest.CreateAppointment): void {
    const me = this;
    me.appointmentService.createAppointment(data).subscribe({
      next: (res) => {
        me.close();
        me.reload();
      },
      error: (err) => {
        console.log(err);
      },
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

  onSubmit() {
    console.log('submit');
    const me = this;
    if (me.appointmentForm.valid) {
      const data = { ...me.appointmentForm.value, avatar: me.avt };
      if (me.isAdd) {
        me.addAppointment(data);
      }

      me.updateAppointment(data);
    }
  }

  close() {
    const me = this;
    me.closeModal$.emit();
  }

  onChange(value: any) {
    console.log(value);
  }

  reload() {
    const me = this;
    me.reload$.emit();
  }
}

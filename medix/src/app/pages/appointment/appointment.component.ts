import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base.component';
import { AppointmentModel } from 'src/app/shared/models/appointment.model';
import { AppointmentRequest } from 'src/app/shared/models/request/appointment.request';
import { AppointmentService } from 'src/app/shared/services/appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
})
export class AppointmentComponent extends BaseComponent implements OnInit {
  public items: AppointmentModel.AppointmentInfo[] = [];
  public isShow = false;

  constructor(private appointmentService: AppointmentService) {
    super();
  }

  ngOnInit() {
    const me = this;
    me.getAppointments();
  }

  onDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  reload() {
    const me = this;
    me.getAppointments();
  }

  getAppointments() {
    const me = this;
    me.appointmentService.getAppointments().subscribe({
      next: (res) => {
        me.items = [...(res as any)];
        me.isShow = true;
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
        me.getAppointments();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  updateAppointment(id: string, data: AppointmentRequest.UpdateAppointment) {
    const me = this;
    me.appointmentService.updateAppointment(id, data).subscribe({
      next: (res) => {
        me.getAppointments();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteAppointment(id: string) {
    const me = this;
    me.appointmentService.deleteAppointment(id).subscribe({
      next: (res) => {
        me.getAppointments();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

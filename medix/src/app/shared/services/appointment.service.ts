import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointmentRequest } from '../models/request/appointment.request';
import { AppointmentResponse } from '../models/response/appointment.response';
import { BaseService } from './base.service';

@Injectable({ providedIn: 'root' })
export class AppointmentService extends BaseService {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  public getAppointments(): Observable<AppointmentResponse.GetAppointments> {
    const me = this;
    const uri = '/appointments';
    return me.get(uri);
  }

  public createAppointment(
    request: AppointmentRequest.CreateAppointment
  ): Observable<AppointmentResponse.CreateAppointment> {
    const me = this;
    const uri = '/appointments';
    return me.post(uri, request);
  }

  public deleteAppointment(
    id: string
  ): Observable<AppointmentResponse.DeleteAppointment> {
    const me = this;
    const uri = `/appointments/${id}`;
    return me.delete(uri);
  }

  public updateAppointment(
    id: string,
    data: AppointmentRequest.UpdateAppointment
  ): Observable<AppointmentResponse.UpdateAppointment> {
    const me = this;
    const uri = `/appointments/${id}`;
    return me.put(uri, data);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientRequest } from '../models/request/patient.request';
import { PatientResponse } from '../models/response/patients.response';
import { BaseService } from './base.service';

@Injectable({ providedIn: 'root' })
export class PatientService extends BaseService {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  public getPatients(): Observable<PatientResponse.GetPatients> {
    const me = this;
    const uri = '/patients';
    return me.get(uri);
  }

  public createPatient(
    request: PatientRequest.CreatePatient
  ): Observable<PatientResponse.CreatePatient> {
    const me = this;
    const uri = '/patients';
    return me.post(uri, request);
  }

  public deletePatient(id: string): Observable<PatientResponse.DeletePatient> {
    const me = this;
    const uri = `/patients/${id}`;
    return me.delete(uri);
  }

  public updatePatient(
    id: string,
    data: PatientRequest.UpdatePatient
  ): Observable<PatientResponse.UpdatePatient> {
    const me = this;
    const uri = `/patients/${id}`;
    return me.put(uri, data);
  }
}

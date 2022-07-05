import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DepartmentRequest } from '../models/request/department.request';
import { DepartmentResponse } from '../models/response/department.response';
import { BaseService } from './base.service';

@Injectable({ providedIn: 'root' })
export class DepartmentService extends BaseService {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  public getDepartments(): Observable<DepartmentResponse.GetDepartments> {
    const me = this;
    const uri = '/departments';
    return me.get(uri);
  }

  public createDepartment(
    request: DepartmentRequest.CreateDepartment
  ): Observable<DepartmentResponse.CreateDepartment> {
    const me = this;
    const uri = '/departments';
    return me.post(uri, request);
  }

  public deleteDepartment(
    id: string
  ): Observable<DepartmentResponse.DeleteDepartment> {
    const me = this;
    const uri = `/departments/${id}`;
    return me.delete(uri);
  }

  public updateDepartment(
    id: string,
    data: DepartmentRequest.UpdateDepartment
  ): Observable<DepartmentResponse.UpdateDepartment> {
    const me = this;
    const uri = `/departments/${id}`;
    return me.put(uri, data);
  }
}

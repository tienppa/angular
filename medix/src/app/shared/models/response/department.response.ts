import { BaseResponseModel } from '../base.model';
import { DepartmentModel } from '../department.model';

export namespace DepartmentResponse {
  export interface GetDepartments
    extends BaseResponseModel<DepartmentModel.DepartmentInfo[]> {}

  export interface CreateDepartment
    extends BaseResponseModel<DepartmentModel.DepartmentInfo[]> {}

  export interface UpdateDepartment
    extends BaseResponseModel<DepartmentModel.DepartmentInfo[]> {}

  export interface DeleteDepartment
    extends BaseResponseModel<DepartmentModel.DepartmentInfo[]> {}
}

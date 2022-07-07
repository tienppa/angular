import { BaseResponseModel } from '../base.model';
import { PatientModel } from '../patient.model';

export namespace PatientResponse {
  export interface GetPatients
    extends BaseResponseModel<PatientModel.PatientInfo[]> {}

  export interface CreatePatient
    extends BaseResponseModel<PatientModel.PatientInfo[]> {}

  export interface UpdatePatient
    extends BaseResponseModel<PatientModel.PatientInfo[]> {}

  export interface DeletePatient
    extends BaseResponseModel<PatientModel.PatientInfo[]> {}
}

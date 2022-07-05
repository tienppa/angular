import { BaseResponseModel } from '../base.model';
import { AppointmentModel } from '../appointment.model';

export namespace AppointmentResponse {
  export interface GetAppointments
    extends BaseResponseModel<AppointmentModel.AppointmentInfo[]> {}

  export interface CreateAppointment
    extends BaseResponseModel<AppointmentModel.AppointmentInfo[]> {}

  export interface UpdateAppointment
    extends BaseResponseModel<AppointmentModel.AppointmentInfo[]> {}

  export interface DeleteAppointment
    extends BaseResponseModel<AppointmentModel.AppointmentInfo[]> {}
}

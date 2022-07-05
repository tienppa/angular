export namespace AppointmentRequest {
  export interface CreateAppointment {
    userId: string;
    name: string;
    image: string;
    date: string;
    time: string;
    gender: string;
    phone: string;
    appointment: string;
    idAppointment: string;
    id: string;
  }
  export interface UpdateAppointment {
    userId: string;
    name: string;
    image: string;
    date: string;
    time: string;
    gender: string;
    phone: string;
    appointment: string;
    idAppointment: string;
    id: string;
  }
}

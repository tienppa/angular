export namespace DoctorRequest {
  export interface CreateDoctor {
    avt: string;
    name: string;
    address: string;
    position: string;
    phone: string;
    email: string;
    status: boolean;
  }

  export interface UpdateDoctor {
    avt: string;
    name: string;
    address: string;
    position: string;
    phone: string;
    email: string;
    status: boolean;
  }
}

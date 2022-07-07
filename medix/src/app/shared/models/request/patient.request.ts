export namespace PatientRequest {
  export interface CreatePatient {
    name: string;
    date: string;
    avatar: string;
    disease: string;
    room: number;
  }
  export interface UpdatePatient {
    name: string;
    date: string;
    avatar: string;
    disease: string;
    room: number;
  }
}

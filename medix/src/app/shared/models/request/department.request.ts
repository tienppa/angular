export namespace DepartmentRequest {
  export interface CreateDepartment {
    name: string;
    doctorId: string;
    doctorName: string;
    doctorAvatar: string;
    gender: string;
    manager: string;
    status: boolean;
    id: string;
  }
  export interface UpdateDepartment {
    name: string;
    doctorId: string;
    doctorName: string;
    doctorAvatar: string;
    gender: string;
    manager: string;
    status: boolean;
    id: string;
  }
}

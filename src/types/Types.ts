export type User = {
id: any
NameIdentifier: number,
Name:string,
    MobilePhone: string,
Email:string,
Password: string

}

export type Role= {
RoleID:number,
Name:string

}

export type clinic={
ClinicID: number,
Name: string
Address:string
}

export type Appointment = {
  id: number,
  appointmentDate: Date,
  location: string,
  status: boolean,
  typeOfAppointment: string,
  userId: number, 
  clinicId: number,

}
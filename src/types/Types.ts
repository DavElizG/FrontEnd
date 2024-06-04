export type User = {
UserId: number,
Name:string,
PhoneNumber: string,
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

export type Appointment ={
AppointmentID: number,
DateTime: Date;
Location: string;
typeOfAppointment: string;
} 
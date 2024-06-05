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

export type Appointment ={
AppointmentID: number,
DateTime: Date;
Location: string;
typeOfAppointment: string;
} 
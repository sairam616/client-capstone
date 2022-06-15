import appointment from "../pages/BookAppointment/BookAppointment";
const Schema = mongoose.Schema;
let appointmentDetails = [
    {
        FirstName : appointment.FirstName,
        LastName : appointment.LastName,
        Email : appointment.Email,
        Phone : appointment.Phone,
        Appointment_Date : appointment.Appointment_Date,
        Appointment_Time : appointment.Appointment_Time,
        Address :
            {
                Street : sales.Street,
                Suite : sales.Suite,
                Postal : sales.Postal,
                Province : sales.Province
            },
        Purpose : appointment.Purpose
    }
];

module.exports = appointmentDetails;
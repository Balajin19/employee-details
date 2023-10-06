export interface EmployeeModel
{
    employeeDetails: {
        name: String,
        dob: String,
        email: String,
        empid: String
    }[],
    error: String
}
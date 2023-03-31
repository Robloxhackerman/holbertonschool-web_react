export interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [propName: string]: any
}

export interface Directors extends Teacher {
    numberOfReports: number
}

function printTeacher(firstName: string, lastName:string) {
    return firstName.at(0) + " " + lastName
}

interface printTeacher {
    (firstName: string, lastName: string): string
}
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

export const printTeacher: printTeacher = (firstName: string, lastName: string): string =>`${firstName.charAt(0)}. ${lastName}`;

interface printTeacher {
    (firstName: string, lastName: string): string
}

interface StudentClassConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
}
interface StudentClassInterface {
    firstName: string;
    lastName: string;
}
class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework() {
        return 'Currently working';
    }
    displayName() {
        return this.firstName;
    }
}

import { UserService } from '../service/user/user.service';

export class User {
    uid: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: number;
    profileImage: string;

    constructor(uid: string, firstName: string, lastName: string, email: string, phoneNumber: number) {
        this.uid = uid;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    // get uid() {
    //     return this.uid;
    // }
    //
    // get firstName(): string {
    //     return this.firstName;
    // }
    //
    // get lastName(): string {
    //     return this.lastName;
    // }
    //
    // get fullName(): string {
    //     return this.firstName + " " + this.lastName;
    // }
    //
    // get email(): string {
    //     return this.email;
    // }
    //
    // get phoneNumber(): number {
    //     return this.phoneNumber;
    // }
    //
    // get profileImage(): string {
    //     return this.profileImage;
    // }
    //
    // set firstName(firstName: string) {
    //     this.firstName = firstName;
    // }
    //
    // set lastName(lastName: string) {
    //     this.lastName = lastName;
    // }
    //
    // set email(email: string) {
    //     this.email = email;
    // }
    //
    // set phoneNumber(phoneNumber: number) {
    //     this.phoneNumber = phoneNumber;
    // }
    //
    // set profileImage(profileImage: string) {
    //     this.profileImage = profileImage;
    // }
}

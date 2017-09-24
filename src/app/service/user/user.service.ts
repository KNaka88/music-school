import { Injectable } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';
import { User } from '../../class/User';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class UserService {

    constructor(
      private afAuth: AngularFireAuth,
      private afDb: AngularFireDatabase,
    ){ }

    //FIREBASE AUTHENTICATION//
    getCredentials(email: string, password: string){
        return firebase.auth.EmailAuthProvider.credential(email, password);
    }

    //User log in authentication
    login(email:string, password:string) {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    //User log out authentication
    logout() {
        return firebase.auth().signOut();
    }

    registerUser(email:string, password:string) {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    reauthenticate(credential){
        return firebase.auth().currentUser.reauthenticateWithCredential(credential);
    }

    getAuth() {
        return this.afAuth.authState;
    }

    getUser(uid: string) {
        return this.afDb.list("users/" + uid);
    }

    createAccount(newUser: User) {
        return this.afDb.object('users/' + newUser.uid).set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            phoneNumber: newUser.phoneNumber
        });
    }

    resetPassword(email: string): firebase.Promise<any> {
      return firebase.auth().sendPasswordResetEmail(email);
    }

    updatePassword(newPassword: string) {
        let user = firebase.auth().currentUser;
        return user.updatePassword(newPassword);
    }
}

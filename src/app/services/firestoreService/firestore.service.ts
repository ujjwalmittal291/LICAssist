import { Injectable } from '@angular/core';
import { userProfileData, proposerDetails, policyDetails } from '../../models/data.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(protected firestoreServices: AngularFirestore) { }

  createUserProfile(response: any) {
    const userProfile: userProfileData = {
      name: response.displayName,
      email: response.email,
      uid: response.uid
    }
    // Write to cloud store
    return this.firestoreServices.doc(`users/${userProfile.uid}`).set(userProfile);
  }

  insertProposerProfile(data: any) {
    const proposerProfile: proposerDetails = {
      name: data.name,
      dob: data.dob,
      mobile: data.mobile,
      email: data.email,
      gender: data.gender,
      address: data.address,
      pinCode: data.pinCode,
      policyNumber: data.policyNumber
    }
    return this.firestoreServices.doc(`proposerData/${proposerProfile.name}`).set(proposerProfile);
  }

  insertPolicyDetails(data: any) {
    console.log(data);
    const policyDetails: policyDetails = {
      policyNumber: data.policyNumber,
      proposerName: data.proposerName,
      sumInsured: data.sumInsured,
      premium: data.premium,
      termTable: data.termTable,
      nominee: data.nominee,
      dateofCommencement: data.dateofCommencement,
      dateofMaturity: data.dateofMaturity,
      mode: data.mode,
      status: data.status,
      moneyBack: data.moneyBack
    }
    console.log('monyback : '+ data.moneyBack);
    
    return this.firestoreServices.doc(`policyMaster/${policyDetails.policyNumber}`).set(policyDetails);
  }

}

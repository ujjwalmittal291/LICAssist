export interface userProfileData {
    name: string,
    uid: string,
    email: string
}

export interface policyDetails {
    policyNumber: number,
    proposerName: string,
    sumInsured: number,
    premium: number,
    termTable: string,
    nominee: string,
    dateofCommencement: string,
    dateofMaturity: string,
    mode: string,
    status: string,
    moneyBack: boolean
}

export interface proposerDetails {
    name: string,
    dob: string,
    mobile: number,
    email: string,
    gender: string,
    address: string,
    pinCode: number,
    policyNumber: string
}
export enum enumGender{
    MALE="Male",
    FEMALE="FeMale"
}

export interface IPersonalInfo{
    Title: String,
    FName:String,
    LName:String,
    Gender: String,
    dateOfBirth:Date,
    MaritalStatus: String,
    Nationality:String,
    EmiratesId: String
}

export interface IContactInfo{
    mobile: Number,
    mobile2:Number,
    eMail:String,
    preferredWorkPlace:String
}


export interface IAcademicDetails{
    qualification: String,
    yearofGraduation:String,
    studyInstituion:String,
    Gender: String,
    specializedIn:String,
}


export interface IcareerDetails{
    YearsOfExperience:Number,
    remarks:String,
    file:Blob
}


export enum CMWizardSteps{
    WIZARD_Step1 = 'InpPersonal_Info',
    WIZARD_Step2 = 'InpContact_Info',
    WIZARD_Step3 = 'InpAcademic_Info',
    WIZARD_Step4 = 'career_Info',
}


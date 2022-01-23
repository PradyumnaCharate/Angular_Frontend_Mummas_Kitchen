export class Feedback{
    firstname:String;
    lastname:String;
    telnum:number;
    email:String;
    agree:boolean;
    contacttype:string;
    message:string;
    constructor( firstname:String,
        lastname:String,
        telnum:number,
        email:String,
        agree:boolean,
        contacttype:string,
        message:string){
            this.firstname=firstname;
            this.lastname=lastname;
            this.telnum=telnum;
            this.email=email;
            this.agree=agree;
            this.contacttype=contacttype;
            this.message=message

    }


};
export const ContactType = ['None', 'Tel', 'Email'];
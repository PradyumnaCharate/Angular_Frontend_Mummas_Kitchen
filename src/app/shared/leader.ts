export class Leader{
    id:string;
    name:string;
    image:string;
    designation:string;
    abbr:string;
    featured:boolean;
    description:string;
    constructor(id:string,
        name:string,
        image:string,
        designation:string,
        abbr:string,
        featured:boolean,
        description:string){
            this.id=id;
            this.name=name;
            this.image=image;
            this.description=description;
            this.abbr=abbr;
            this.designation=designation;
            this.featured=featured;
    } 


}
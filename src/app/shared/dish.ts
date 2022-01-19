import { Comment } from "./comment";
export class Dish{
    //We dont have facility to add variabletype in js.But ts allows it.
    id:string;
    name:string;
    image: string;
    category: string;
    featured: boolean;
    label: string;
    price: string;
    description: string;
    comments:Comment[]; 
    constructor(id:string,name:string,image: string,
        category: string,
        featured: boolean,
        label: string,
        price: string,
        description: string,
        comments:Comment[])
        { 
        this.id = id;
        this.name = name;
        this.image = image;
        this.category = category; 
        this.featured = featured; 
        this.label = label;
        this.price = price; 
        this.description=description;
        this.comments=comments;
     }  
}

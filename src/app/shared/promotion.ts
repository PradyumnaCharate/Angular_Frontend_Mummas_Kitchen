export class Promotion{
    id: string;
    name: string;
    image: string;
    label: string;
    price: string;
    featured: boolean;
    description: string;
    constructor(id: string,
        name: string,
        image: string,
        label: string,
        price: string,
        featured: boolean,
        description: string){
            this.id=id;
            this.name=name;
            this.image=image;
            this.label=label;
            this.price=price;
            this.featured=featured;
            this.description=description;


    }
}
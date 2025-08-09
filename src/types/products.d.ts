

export interface productsProps {
    uid: string;
    name: string;
    link: string;
    description: string;
    price: number;
    image: productsImagesProps | Array<productsImagesProps>;
}

export interface productsImagesProps {
    uid: string;
    src: string;
    alt: string;
}
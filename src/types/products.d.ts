export interface ImageProps {
    uid: string;
    src: string;
    alt: string;
}

export type productImagesProps = ImageProps | Array<ImageProps>;
export interface productsProps {
    uid: string;
    name: string;
    link: string;
    description: string;
    price: number;
    image: productImagesProps;
    maxStock?: number;
}


export interface StartupDto{
    name: string;
    slogan: string;
    webSite: string;
    description: string;
    price: string;
    category: string;
    email: string;
    phone: string;
    mainPhoto: File | null;
    additionalPhotos: File[];
}
export interface StartupEntity{
    id: string;
    name: string;
    slogan: string;
    webSite: string;
    description: string;
    price: string;
    category: string;
    email: string;
    phone: string;
    mainPhotoUrl: string;
    additionalPhotosUrl: string[];
}
export interface StartupProfile{
    id: string;
    name: string;
    description: string;
    imgUrl: string;
}
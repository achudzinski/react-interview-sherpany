import {LocationType} from "./LocationType";

export interface UserType {
    id: string,
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    pictureThumbnail: string,
    location: LocationType,
    phone: string,
    cell: string,
}
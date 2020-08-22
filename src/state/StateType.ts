import {UserType} from "../models/UserType";

export interface StateType {
    seed: string | null,
    users: UserType[],
}
import {HttpApiClient} from "../api/HttpApiClient";
import {ApiError} from "../api/ApiError";
import {UserType} from "../../models/UserType";
import {config} from "../../config";

export interface UserListResponse {
    users: UserType[],
    seed: string,
}

interface GetUserApiParams {
    results?: number,
    page?: number,
    seed?: string,
    nat: string,
}

export class RandomUserApiClient {
    private apiClient: HttpApiClient;

    constructor(apiClient: HttpApiClient) {
        this.apiClient = apiClient;
    }

    getUsers(limit: number, page: number, nationalities: string[], seed: string|null): Promise<UserListResponse> {
        const queryParams:GetUserApiParams = {
            results: limit,
            page,
            nat: nationalities.join(","),
        };

        if (seed) {
            queryParams.seed = seed;
        }

        return this.apiClient
            .sendGet('/', queryParams)
            .then(rawResponse => rawResponse.json())
            .then(response => {
                if (response.error) {
                    throw new ApiError(response.error);
                }

                return {
                    seed: response.info.seed,
                    users: response.results.map(
                        (user: any) => {
                            return {
                                firstName: user.name.first,
                                lastName: user.name.last,
                                username: user.login.username,
                                email: user.email,
                                pictureThumbnail: user.picture.thumbnail,
                                phone: user.phone,
                                cell: user.cell,
                                location: {
                                    streetName: user.location.street.name,
                                    streetNumber: user.location.street.number,
                                    city: user.location.city,
                                    state: user.location.state,
                                    postcode: user.location.postcode,
                                }
                            }
                        },
                    ),
                };
            })
            .catch(e => {
                if (e instanceof ApiError) {
                    throw e;
                } else {
                    throw new ApiError('unknown', e)
                }
            })
            ;
    }
}

export const apiClient = new HttpApiClient(config.randomUserApiUrl);
export const randomUserApiClient = new RandomUserApiClient(apiClient);
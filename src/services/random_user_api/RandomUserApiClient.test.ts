import {apiClient, RandomUserApiClient} from "./RandomUserApiClient";

describe("RandomUserApiClient", () => {

    it("provides empty list of users", async () => {
        const apiResponseContent = {
            "results": [
            ],
            "info": {
                "seed": "fea8be3e64777240",
                "results": 0,
                "page": 1,
                "version": "1.3"
            }
        };

        const apiResponse = new Response(JSON.stringify(apiResponseContent));

        const apiClientSpy = jest.spyOn(apiClient, 'sendGet');
        apiClientSpy.mockImplementation(() => Promise.resolve(apiResponse));

        const service = new RandomUserApiClient(apiClient);
        const users = await service.getUsers(50, 1, ["CH","FR"], null);

        expect(apiClientSpy).toHaveBeenCalled();
        expect(users.seed).toBe("fea8be3e64777240");
        expect(users.users.length).toBe(0);

        apiClientSpy.mockRestore();
    });

    it("provides list of users", async () => {
        const apiResponseContent = {
            "results": [
                {"gender":"male","name":{"title":"Mr","first":"Nihal","last":"Adal"},"location":{"street":{"number":9135,"name":"Bağdat Cd"},"city":"Manisa","state":"Şırnak","country":"Turkey","postcode":84566,"coordinates":{"latitude":"71.9100","longitude":"-26.0334"},"timezone":{"offset":"-12:00","description":"Eniwetok, Kwajalein"}},"email":"nihal.adal@example.com","login":{"uuid":"c00ed8ed-c647-40ea-b698-a362c197dcc3","username":"organiclion710","password":"ggggg","salt":"XAqDa3Om","md5":"34f7ebccc86b471d99ce97a88f010d07","sha1":"f42eed494f4a8b98da848ba899a3fe5aa4b3d458","sha256":"01ffdc6de75f311f706bca1dd1e930efc5b3a5a430a325b127eb163980d95902"},"dob":{"date":"1957-03-31T14:50:21.270Z","age":63},"registered":{"date":"2009-09-25T04:16:42.534Z","age":11},"phone":"(716)-487-7225","cell":"(876)-777-8321","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/15.jpg","medium":"https://randomuser.me/api/portraits/med/men/15.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/15.jpg"},"nat":"TR"},
                {"gender":"female","name":{"title":"Ms","first":"Martha","last":"Perez"},"location":{"street":{"number":1822,"name":"King Street"},"city":"Leeds","state":"West Yorkshire","country":"United Kingdom","postcode":"Q96 2HY","coordinates":{"latitude":"5.4913","longitude":"140.0561"},"timezone":{"offset":"+3:30","description":"Tehran"}},"email":"martha.perez@example.com","login":{"uuid":"abd9246f-c0a5-40aa-bbe2-d5be810e3c85","username":"blackswan430","password":"tracer","salt":"cNtcPQ8R","md5":"67a0e4d95a8a7be3cc95fb8d8dae21e8","sha1":"c305759b49cf141e59c1a5e492db5ece9f7ef2da","sha256":"3cae9814279b2b2dabd2019d27bcfc334945972295f3b6e6e76b179d6fc2c3ed"},"dob":{"date":"1982-03-09T19:24:56.401Z","age":38},"registered":{"date":"2018-07-11T07:41:58.824Z","age":2},"phone":"027 8171 8244","cell":"0759-428-911","id":{"name":"NINO","value":"CR 40 43 02 C"},"picture":{"large":"https://randomuser.me/api/portraits/women/49.jpg","medium":"https://randomuser.me/api/portraits/med/women/49.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/49.jpg"},"nat":"GB"}
            ],
            "info": {
                "seed": "fea8be3e64777240",
                "results": 2,
                "page": 1,
                "version": "1.3"
            }
        };

        const apiResponse = new Response(JSON.stringify(apiResponseContent));

        const apiClientSpy = jest.spyOn(apiClient, 'sendGet');
        apiClientSpy.mockImplementation(() => Promise.resolve(apiResponse));

        const service = new RandomUserApiClient(apiClient);
        const users = await service.getUsers(50, 1, ["CH","FR"], null);

        expect(apiClientSpy).toHaveBeenCalled();
        expect(users.seed).toBe("fea8be3e64777240");
        expect(users.users.length).toBe(2);

        expect(users.users[0]).toStrictEqual({
            "cell": "(876)-777-8321",
            "email": "nihal.adal@example.com",
            "firstName": "Nihal",
            "lastName": "Adal",
            "location": {
                "city": "Manisa",
                "postcode": 84566,
                "state": "Şırnak",
                "streetName": "Bağdat Cd",
                "streetNumber": 9135,
            },
            "phone": "(716)-487-7225",
            "pictureThumbnail": "https://randomuser.me/api/portraits/thumb/men/15.jpg",
            "username": "organiclion710",
        });

        expect(users.users[1]).toStrictEqual({
            "cell": "0759-428-911",
            "email": "martha.perez@example.com",
            "firstName": "Martha",
            "lastName": "Perez",
            "location": {
                "city": "Leeds",
                "postcode": "Q96 2HY",
                "state": "West Yorkshire",
                "streetName": "King Street",
                "streetNumber": 1822,
            },
            "phone": "027 8171 8244",
            "pictureThumbnail": "https://randomuser.me/api/portraits/thumb/women/49.jpg",
            "username": "blackswan430",
        });

        apiClientSpy.mockRestore();
    });

    it("throws exception in case of error", async () => {
        const apiResponseContent = {
            error: "Uh oh, something has gone wrong."
        }

        const apiResponse = new Response(JSON.stringify(apiResponseContent));

        const apiClientSpy = jest.spyOn(apiClient, 'sendGet');
        apiClientSpy.mockImplementation(() => Promise.resolve(apiResponse));

        const service = new RandomUserApiClient(apiClient);

        await expect(service.getUsers(50, 1, ["CH","FR"], null)).rejects.toThrow("Uh oh, something has gone wrong.");

        apiClientSpy.mockRestore();
    });
});
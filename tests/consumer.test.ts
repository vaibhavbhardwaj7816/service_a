import * as path from 'path'
import { PactV3, MatchersV3, TemplateQuery } from '@pact-foundation/pact';
import { requestQuery, userData } from '../testData';
import { mockGetUsers } from '../mock-provider';

describe('Consumer Test', () => {
    const mock_port = 1234;
    const mock_server_url = 'http://127.0.0.1:' + mock_port;
    const provider = new PactV3({
        consumer: 'Service-A',
        provider: 'Service-B',
        port: mock_port,
        dir: path.resolve(process.cwd(), 'pacts'),
    })
    it('test: Get user data', () => {
        provider.uponReceiving('a GET request to get user data')
            .withRequest({
                method: 'GET',
                path: '/fetch-user-data',
                query: requestQuery as unknown as TemplateQuery
            })
            .willRespondWith({
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: MatchersV3.eachLike({ userData }) 
            })
        return provider.executeTest(async () => {
            const response =  await mockGetUsers(mock_server_url)
            return expect(response.data[0].userData).toStrictEqual({userDetails:userData})
            // return response.then((res) => {
            //     console.log('userData------------->', res.userData)
            //     console.log('userssssssss--->',userData)
            //     expect(res.userData[0].userData).toStrictEqual(userData)
            // }).catch((err) => {
            //     expect(err).toBeNull()
            // })
        })
    })
})
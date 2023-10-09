const axios = require('axios')
const fs = require('fs')
const fileName = fs.readdirSync('./pacts')
const pact = require(`../pacts/${fileName[0]}`)
const base64 = Buffer.from(JSON.stringify(pact)).toString("base64")
axios.post('http://Pact_Broker/contracts/publish', {
    pacticipantName: "Service-A",
    pacticipantVersionNumber: `${Date.now()}`,
    contracts: [
        {
            consumerName: "Service-A",
            providerName: "Service-B",
            specification: "pact",
            contentType: "application/json",
            content: base64
        }
    ]
})
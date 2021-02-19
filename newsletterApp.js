
const express = require('express')
const bodyParser = require('body-parser')
const mailchimp = require('@mailchimp/mailchimp_marketing')

const app = express()
const port = process.env.PORT || 3000;

const apiKey = "88cc996b751eda2fa3487292e8b67802-us1";
const listId = "e673b7acc6";
const server = "us1";

app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static('public'))

app.get('/', (req, res) => {

    res.sendFile(__dirname+"/signup.html")
})

app.post('/', (req, res) => {

    const userEmail = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    mailchimp.setConfig({
        apiKey: apiKey,
        server: server,
    })

    const run = async () => {
        const response = await mailchimp.lists.batchListMembers( listId, {
            skip_duplicate_check: true,
            members: [{
            email_address: userEmail,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName
            },
            update_existing: true
          }],
        })

        console.log(response)

        if ( response.error_count === 0 ) {

            res.sendFile(__dirname+"/success.html")

        } else {

            res.sendFile(__dirname+"/failure.html")

        }
    }

    run()
    
    console.log(res.statusCode)
})

app.post('/failure', (req, res) => {

    res.redirect('/');
})

app.listen(port, () => {

      console.log(`Server listening at http://localhost:${port}`)
})

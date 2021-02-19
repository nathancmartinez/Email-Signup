//  Scratch.js Nathan Martinez Sat 02132021

// const client = require("mailchimp-marketing");

const mailchimp = require('@mailchimp/mailchimp_marketing');

const apiKey = "88cc996b751eda2fa3487292e8b67802-us1";
const listId = "e673b7acc6";
const server = "us1";

mailchimp.setConfig({
  apiKey: apiKey,
  server: server,
});

async function run() {
  const response = await mailchimp.ping.get();
  console.log(response);
}

run();




// const mailchimp = require('@mailchimp/mailchimp_marketing');

// const listId = "e673b7acc6";
// const subscribingUser = {
//   firstName: "Percy",
//   lastName: "Hopper",
//   email: "percytotoro@gmail.com"
// };

// async function run() {
//   const response = await mailchimp.lists.addListMember(listId, {
//     email_address: subscribingUser.email,
//     status: "subscribed",
//     merge_fields: {
//       FNAME: subscribingUser.firstName,
//       LNAME: subscribingUser.lastName
//     }
//   });

//   console.log(
//     `Successfully added contact as an audience member. The contact's id is ${
//       response.id
//     }.`
//   );
// }

// run();



// const mailchimp = require('@mailchimp/mailchimp_marketing');

// mailchimp.setConfig({
//     apiKey: '88cc996b751eda2fa3487292e8b67802-us1',
//     server: 'us1',
// });

// async function callPing() {
//   const response = await mailchimp.ping.get();
//   console.log(response);
// }

// callPing();


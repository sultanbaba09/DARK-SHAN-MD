const axios = require('axios');
const { cmd } = require('../lib');

const rapidApiKey = '57edce7794msh40807e0632a1761p1c3b34jsne46cb9d9bd31';

// Create a map to store temporary email addresses and messages
const tempEmails = new Map();

// Function to generate a temporary email address
async function generateTempEmail(userId) {
  const options = {
    method: 'GET',
    url: 'https://livescore6.p.rapidapi.com/matches/v2/list-live'',
    headers: {
      'X-RapidAPI-Key':'57edce7794msh40807e0632a1761p1c3b34jsne46cb9d9bd31',
      'X-RapidAPI-Host': 'https://livescore6.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    const email = response.data.email;
    tempEmails.set(userId, { address: email, messages: [] }); // Store the generated email address for the user
    return email;
  } catch (error) {
    console.error('Error generating temporary email:', error);
    throw error;
  }
}

// Command for generating a temporary email address
cmd({
            pattern: "cri",
            category: "soccer",
            desc: "Sends info of given query from Google Search.",
            use: '<text>',
            filename: __filename,
        },
        async(Void, citel, text) => {

          citel.reply (`*_Please Wait, Getting Cricket Info_*`);
const response = await fetch('https://api.cricapi.com/v1/currentMatches?apikey=f68d1cb5-a9c9-47c5-8fcd-fbfe52bace78');
  const dat = await response.json();
console.log(dat);

for (let i=0 ; i <  dat.data.length; i++) {
let j = i+1;
text +="\n*Match Name  :* "+ dat.data[i].name;
text +="\n*Match Status  :* "+ dat.data[i].status;
text +="\n*Match  Date   :* " + dat.data[i].dateTimeGMT ;
text +="\n*Match Started :* " + dat.data[i].matchStarted;
text +="\n*Match Ended:* " + dat.data[i].matchEnded;
text +="\n*score :* "+ dat.data[i].score;

}
 return await citel.reply( text);


})
//---------------------------------------------------------------------------

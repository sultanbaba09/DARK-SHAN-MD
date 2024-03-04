
const os = require('os');

const { cmd,tlang,prefix,runtime,formatp} = require('../lib/');

cmd({

            pattern: "groupsettings",

            alias: ["gs"],

            desc: "some group settings change.",

            category: "extra",

            filename: __filename

        },

        async(Void, citel, text) => {

           let list = [{

title: 'MUTE GROUP 🔇',

rowId: `${prefix}mute`,

description: ' '

},

{

title: 'UNMUTE GROUP 🔊',

rowId: `${prefix}unmute`,

description: ' '

},

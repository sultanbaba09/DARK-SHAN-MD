
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

}


            ]

            ted = `┏━━━━━━━━━━━━━━━━━━━━━━━━━
┃   *GROUP SETTINGS CHANGE*
┗━━━━━━━━━━━━━━━━━━━━━━━━━


*THINGS THAT CAN BE CHANGED FROM THIS,*

● MUTE GROUP
● UNMUTE GROUP

● ACTIVE ANTILINK
● DEACTIVE ANTILINK

● ACTIVE BOT THIS GROUP
● DEACTIVE BOT THIS GROUP

● ACTIVE ADD MESSAGE AND LEFT MESSAGE
● DEACTIVE ADD MESSAGE AND LEFT MESSAGE 


⦿.  ©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ ᴅᴜᴍɪᴅᴜ

`

            const sections = [

                {

                    title: "Change settings",

                    rows: list

                }

            ]

            const listMessage = {

                text: ted,

                footer: tlang().footer,

                title: ``,

                mentions: await Void.parseMention(ted),

                sections

            }

            return Void.sendMessage(citel.chat.listMessage, {

                quoted: citel

            })

        }

    )

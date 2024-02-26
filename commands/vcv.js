/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/
const os = require('os');
const { tlang, botpic,cmd, prefix, runtime,Config,formatp } = require('../lib')
const axios = require('axios')
const speed = require('performance-now')
//---------------------------------------------------------------------------

cmd({

            pattern: "concmdnew",

            desc: "(menu cmdlist).",

            category: "downloader",

            react: "🔄",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}Git`,

                    buttonText: {

                        displayText: "Github",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}rank`,

                    buttonText: {

                        displayText: "Rank",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `

📟 *Command:-* .trt
ℹ️ *Description:-* Any language trt to sinhala
🔥 *Help:-* .trt mantion text


📟 *Command:-* .sticker
ℹ️ *Description:-* Photo or video to sticker 
🔥 *Help:-* .sticker mantion image

⦿. *REQUEST BY:* ${citel.pushName}

`,

                footer: tlang().footer,

                buttons: buttons,

                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )



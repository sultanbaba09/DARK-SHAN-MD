const { cmd, fetchJson } = require('../lib');



      
      
cmd({

            pattern: "polll",           
            desc: "(menu cmdlist).",
            category: "_help",
            react: "👨‍💻",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        
            let buttonMessage = {
                
                        {

const githubRepoUrl = 'https://api.github.com/repos/gssbotwa/Gssbotwa2';

            }},
            


    fetch(githubRepoUrl)
        .then(response => response.json())
        .then(data => {
            const repoInfo = {
                stars: data.stargazers_count,
                forks: data.forks_count,
                lastUpdate: data.updated_at,
                owner: data.owner.login
            };

            // Format the date
            
           

            Void.sendPoll(citel.chat, uy, ['.menu', '.ping'], {
                quoted: citel
            });
        })

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )

const { tlang, botpic, cmd, prefix, runtime, Config, formatp, fetchJson } = require('../lib')
const sirasanews = require('sirasa-news');

cmd({
    pattern: 'hiru',
    desc: 'whatsapp beta infomation.',
    category: 'NEWS',
    react: "📃",
    use: '<wbi>',
  },
        async(Void, citel, text) => {
          const sirasanews = require('sirasa-news')

async function news() {
const newsdata = await sirasanews();
const output = newsdata.result;
console.log(output);

}

news();


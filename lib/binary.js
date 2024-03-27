async function dBinary(str) {
    var newBin = str.split(" ")
    var binCode = []
    for (i = 0; i < newBin.length; i++) {
        binCode.push(String.fromCharCode(parseInt(newBin[i], 2)))
      }
    return binCode.join("")
    }
    
    async function eBinary(str = ''){    
    let res = ''
    res = str.split('').map(char => {       
    return char.charCodeAt(0).toString(2);  
     }).join(' ')
    return res
    }

function GenListMessage(title, options, desc, footer) {
    if (!title) return false;
    if (!options) return false;
    if (!options[0]) return "options must be array and uts have values";
    let response = "*_" + title + "_*\n\n",
        no = 1;
        if(desc) response += desc +'\n\n';
    options.map((no) => {
        response += `*${no++}*. ` + '```' + `${no}` + '```\n'
    });
    if(footer) response += footer;
    return response;
}
    
    module.exports = { dBinary, eBinary, GenListMessage }

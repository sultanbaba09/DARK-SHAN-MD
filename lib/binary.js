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


async function poll(id) {
	if (!fs.existsSync('./lib/database/poll.json')) return {
		status: false
	}
	const file = JSON.parse(fs.readFileSync('./lib/database/poll.json'));
	const poll_res = file.citel.filter(a => id.key.id == Object.keys(a)[0]);
	if (!poll_res[0]) return {
		status: false
	}
	let options = {}
	const vote_id = Object.keys(poll_res[0]);
	const vote_obj = Object.keys(poll_res[0][vote_id].votes);
	let total_votes = 0;
	vote_obj.map(a => {
		options[a] = {
			count: poll_res[0][vote_id].votes[a].length
		};
		total_votes = total_votes + poll_res[0][vote_id].votes[a].length
	});
	const keys = Object.keys(options);
	keys.map(a => options[a].percentage = (options[a].count / total_votes) * 100 + '%');
	return {
		status: true,
		res: options,
		total: total_votes
	}
}    
    module.exports = { dBinary, eBinary, poll }

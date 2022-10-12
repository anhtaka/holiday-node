const https = require('https')

async function get_page() {
    const url = 'https://stackoverflow.com/'

    return new Promise((resolve) => {
        https.get(url, res => {

            res.on('data', chunk => { data += chunk }) 

            res.on('end', () => {

               resolve(do_awesome_things_with_data(data));

            })
        }) 
    })
}

// usage

(async () => await get_page())()
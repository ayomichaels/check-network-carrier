// GET A LIST OF ALL SPs AND THIER CORRESPONDING PREFIXES
//INPUT FIELD FOR USERS 
//CHECK FOR PREFIXES AND SHOW LOGO

const networkMap = {
    mtn: {
        logo: 'mtn.jpeg',
        possiblePrefixes: ['0703', '0706', '0803', '0806', '0810', '0813', '0814', '0816', '0903', '0906', '0913']
    },
    glo: {
        logo: 'glo.png',
        possiblePrefixes: ['0705', '0805', '0807', '0811', '0815', '0905']
    },
    airtel: {
        logo: 'airtel.png',
        possiblePrefixes: ['0701', '0708', '0802', '0808', '0812', '0902', '0907', '0901', '0912']
    },
    etisalat: {
        logo: '9mobile.png',
        possiblePrefixes: ['0809', '0817', '0818', '0908', '0909']
    },
}

const {mtn, glo, airtel, etisalat} = networkMap

const phone = document.getElementById('phone')

const networkKeys = Object.keys(networkMap)
console.log(networkKeys);



btn.addEventListener('click', (e)=>{
    e.preventDefault()
    const phoneNum = phone.value
    const prefix = phoneNum.substring(0,4)
    console.log(prefix);
    checkPrefix(prefix)
})

function checkPrefix(prefix) {
    // if (networkKeys)
    // if (mtn.possiblePrefixes.includes(prefix)) {
    //     console.log('I am MTN');
    //     const logo = mtn.logo
    //     console.log(logo);
    //     changeLogo(logo)

    // }  
    
    // else if (glo.possiblePrefixes.includes(prefix)) {
    //     console.log('I am GLO');
    // }  
    
    // else if (etisalat.possiblePrefixes.includes(prefix)) {
    //     console.log('I am ETISALAT');
    // }
    
    // else if (airtel.possiblePrefixes.includes(prefix)) {
    //     console.log('I am AIRTEL');
    // }

    networkKeys.forEach(network=>{
        // console.log(network);
        
        if (networkMap[network].possiblePrefixes.includes(prefix)) {
            console.log(`I am ${network}`);
            const logo = networkMap[network].logo
            console.log(logo);
            changeLogo(logo)
        }
    })
}


function changeLogo(logo) {
    $('img').attr('src', `./images/${logo}`)
}


// networkKeys.forEach(network=>{
//     console.log(network);
    
//     networkMap[network].possiblePrefixes.includes(prefix) {
//         console.log(`I am ${network}`);
//     }
// })
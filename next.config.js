const {PHASE_DEVELOPMENT_SERVER} = require('next/constants');

module.exports = (phase) => {
    if(phase === PHASE_DEVELOPMENT_SERVER){
        return {  
            env: {
                mongoDBUsername: 'adelinojusto911',
                mongoDBPassword:'rit389q02Af7Ndiu',
                mongoDBClusterName:'cluster0',
                mongoDBDatabase:'my-site-dev'
            },
        }
    }
    return {  
        env: {
            mongoDBUsername: 'adelinojusto911',
            mongoDBPassword:'rit389q02Af7Ndiu',
            mongoDBClusterName:'cluster0',
            mongoDBDatabase:'my-site'
        },
    }
}
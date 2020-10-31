const members = require('./members');

function getFemale(members) {
    return new Promise(function (resolve, reject) {
        /** logic */
        setTimeout(function(){
            const femaleMem = members.filter(fMem => fMem.gender === '여')
            resolve(femaleMem)
        }, 500)
    })
}

function getYB(members) {
    return new Promise(function (resolve, reject) {
        /** logic */
        setTimeout(function(){
            const ybMem = members.filter(yb => yb.status === 'YB')
            resolve(ybMem)
        }, 500)
    })
}

function getiOS(members) {
    return new Promise(function (resolve, reject) {
        /** logic */
        setTimeout(function(){
            const iOSMem = members.filter(iOS => iOS.part === 'iOS')
            resolve(iOSMem);
        }, 500)
    })
}

getFemale()
    .then(members => getYB(members))
    .then(members => getiOS(members))
    .then(console.log(members));
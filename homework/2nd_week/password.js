/** Level3: fs 모듈을 이용하여 비동기적으로 비밀번호 암호화하기 */

const fs = require('fs');
const crypto = require('crypto');
const { type } = require('os');

/**
const numArr = [1, 2, 3, 4, 5];
const fileCommonName = 'syncText';

numArr.forEach((num) => {
    const fileName = fileCommonName + num;
    // const data = `reserved message for the '${fileName}'`;
    // fs.writeFileSync(`${fileName}.txt`, data);
    // console.log(`file[${fileName}] write complete`);
    const data = fs.readFileSync(`${fileName}.txt`);
    console.log(`file[${fileName}] with ${data}`);
})
*/


// const encrypto = (password) => {
//     return new Promise((resolve, reject) => {
//         crypto.pbkdf2(password, salt, 100000, 64, 'sha512', (err, derivedKey) => {
//             if (err) reject(err);
//             resolve(derivedKey.toString('hex'));
//         });
//     });
// };

crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64');
    console.log(`salt: ${salt}`);
    crypto.pbkdf2('비밀번호', salt, 10000, 54, 'sha512', (err, key) => {
        console.log(`password : ${key.toString('base64')}`)
        console.log(`key : ${key}`);
        console.log(typeof key);
    })
})

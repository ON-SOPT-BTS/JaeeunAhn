/** Level 3
 * 가짜 서버파트 members.js 데이터를 이용해서 랜덤으로 조를 짜는 알고리즘 만들어보기
 */
const members = require('./members')
const YB = members.filter(member => member.status === 'YB');
// console.log(YB);
const OB = members.filter(member => member.status === 'OB');
// console.log(OB);

const assignTeam = (teamNum, members) => {

    let mixedMembers = members
        .map(a => ([Math.random(), a]))
        .sort((a, b) => a[0] - b[0])
        .map(a => a[1])

    mixedMembers.forEach((member, index) => {
        const teamNumber = (index % teamNum) + 1
        member.team = teamNumber
    })

    return mixedMembers
}

const makeRandomTeam = (teamNum) => {
    const assignedOB = assignTeam(teamNum, OB)
    const assignedYB = assignTeam(teamNum, YB)
    const madeTeam = []
    for (let i = 1; i <= teamNum; i++) {

        const condition = mem => mem.team === i
        const OBmembers = assignedOB.filter(condition)
        const YBmembers = assignedYB.filter(condition)
        const team = [...OBmembers, ...YBmembers]

        madeTeam.push(team)
    }
    return madeTeam
}

// 만들 팀의 수 랜덤으로 생성해주기
const randIndex = Math.floor(Math.random() * 6) + 1;

// 랜덤 팀 만들기
console.log(makeRandomTeam(randIndex));
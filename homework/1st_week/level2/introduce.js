/** 김가영, 김정재, 박경선, 안재은, 임찬기, 최선욱 */

const teamMembers = [
    {
        "name": "김가영",
        'residence': "신림",
        "age" : 24,
        "hobby": "가영이의 취미는 뭘까",
        "information": "배추학명을 알고 있다",
    },
    {
        name: "김정재",
        residence: "인천",
        age : 25,
        hobby: "회고하기",
        information: "Flood PM",
    },
    {
        name: "박경선",
        residence: "용인",
        age : 23,
        hobby: "서버",
        information: "OUR SOPT 서버 파트장",
    },
    {
        name: "임찬기",
        residence: "동작구",
        age : 24,
        hobby: "찬기의 취미는 뭘까",
        information: "서버파트 YB",
    },
    {
        name: "최선욱",
        residence: "어디 산다고 했더라..",
        age : 25,
        hobby: "그의 취미는 무엇일까",
        information: "기술 블로그를 운영 중",
    }
]

/** 1st try :
 * function printInfo() {
 *  console.log(teamMembers);
 * }
 * printInfo();
*/

teamMembers.forEach( member => {
    console.log(member);
})
var calc = function (scoreListStr, userInfoStr) {
    var scoreList = JSON.parse(scoreListStr)
    var userInfo = JSON.parse(userInfoStr)
    return [0, scoreList.map(o => {
        return o.courseId;
    })]
}

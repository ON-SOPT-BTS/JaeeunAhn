const express = require('express');
const router = express.Router();

router.get('/popular', (req, res) => {
    res.status(200).send("우리는 인기가 많은 녀석들이지!");
});

router.get('/bestreply', (req, res) => {
    res.status(200).send("댓글 많은 순 뉴스");
});

router.get('/age', (req, res) => {
    res.status(200).send("나이별 랭킹 뉴스");
});

module.exports = router;
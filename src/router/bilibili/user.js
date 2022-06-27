const router = require("express").Router();
const fetch = require("node-fetch");

router.get("/login-qrcode", async (req, res, next) => {
  try {
    const response = await fetch(
      "https://passport.bilibili.com/qrcode/getLoginUrl"
    );
    const result = await response.json();
    res.json(result);
  } catch (e) {
    next(e);
  }
});

router.get("/login-status", async (req, res, next) => {
  try {
    const oauthKey = req.query.oauthKey;
    const response = await fetch(
      `https://passport.bilibili.com/qrcode/getLoginInfo?oauthKey=${oauthKey}`,
      {
        method: "POST",
        headers: {
          referer: 'https://www.bilibili.com'
        }
      }
    );
    const headers = response.headers;
    const cookies = headers.get("set-cookie");
    const result = await response.json();
    res.json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

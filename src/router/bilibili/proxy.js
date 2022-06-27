const router = require("express").Router();
const fetch = require("node-fetch");

router.get("/video", async (req, res, next) => {
  const url = req.query.target;
  const headers = {
    range: req.headers.range || "",
    referer: "https://www.bilibili.com",
  };
  const resp = await fetch(url, { headers });
  for (const [key, val] of resp.headers.entries()) {
    if (key !== "access-control-allow-origin") res.header(key, val);
  }
  for (const chunk of await req.body) {
    resp.write(chunk);
  }
  resp.end();
});

router.get("/image", async (req, res, next) => {
  const url = req.query.target;
  const resp = await fetch(url, { headers: "https://www.bilibili.com" });
  for (const chunk of await req.body) {
    resp.write(chunk);
  }
  resp.end();
});

module.exports = router;

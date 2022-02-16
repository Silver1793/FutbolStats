const router = require("express").Router();
const axios = require("axios");
const cheerio = require("cheerio");

const foo = async () => {
  try {
    const arr = [];
    const res = await axios("https://www.bundesliga.com/en/bundesliga/table");
    const $ = cheerio.load(res.data);

    const teams = $(".team a").each((index, elem) => {
      const title = $(elem).find(".d-none.d-sm-inline.d-lg-none").text();
      const obj = {
        team: title,
      };
      arr.push(obj);
    });
    const points = $(".pts").each((index, elem) => {
      if (index === 0) return true;
      const trial = $(elem).text();
      arr[index - 1]["points"] = trial;
    });
    const gamesPlayed = $(".matches").each((index, elem) => {
      if (index === 0) return true;
      const games = $(elem).text();
      arr[index - 1]["gamesPlayed"] = games;
    });
    for (let i = 0; i < arr.length; i++) {
      arr[i]["index"] = i;
    }
    return arr;
  } catch (err) {
    console.log("ERR" + err);
  }
};
router.route("/").get(async (req, res) => {
  const arr = await foo();
  res.json(arr);
});

module.exports = router;

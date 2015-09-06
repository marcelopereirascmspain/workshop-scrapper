var fs = require("fs");
var get = require("request-promise");
var cheerio = require("cheerio");

get("http://www.coches.net").then(function (res) {
  var $ = cheerio.load(res);
  
  var entries = $("#home-news article").map(function (idx, el) {
    var article = $(el);
    var src = article.find("img").first().attr("src");
    var lazyURL = article.find("img").first().attr("data-iurl2");
    var imageURL = src ? src : lazyURL;

    return {
      title: article.find("h3").text(),
      imageURL: imageURL,
      href: "http://www.coches.net" + article.find("a").first().attr("href"),
      label: article.find(".label-news").text(),
      commentCount: article.find(".icon-comentaris").text(),
      text: article.find("h3 + p").text()
    };
  }).get();

  var json = {
    entries: entries
  };

  fs.writeFile("entries.json", JSON.stringify(json, null, 2), function (err) {
    console.log("Success! Check entries.json.");
  });
}).catch(function (err) {
  console.log("Error! ", err);
});
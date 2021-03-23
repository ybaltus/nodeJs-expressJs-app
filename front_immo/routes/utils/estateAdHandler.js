const fetch = require('node-fetch');

// Render all estateAds
const renderEstateAds = (req, resp, pathBackEnd, adRoute, pageEstateAd, carousel=false) => {
    fetch(`${pathBackEnd}/${adRoute}/`, {
        headers: { "Content-Type": "application/json" },
    })
        .then((data) => data.json())
        .then((jsonData) => {resp.render(pageEstateAd, {estateAds: jsonData, carousel: carousel});})
        .catch((err) => console.log(err));
}

// Render an estate ad
const renderEstateAd = (req, resp, pathBackEnd, adRoute, pageEstateAd, carousel=false) => {
    fetch(`${pathBackEnd}/${adRoute}/${req.params.id}`, {
        headers: { "Content-Type": "application/json" },
    })
        .then((data) => data.json())
        .then((jsonData) => {resp.render(pageEstateAd, {estateAd: jsonData, carousel: carousel});})
        .catch((err) => console.log(err));
}

//Render a view
const renderView = (req, resp, pageEstateAd, carousel=false) => {
    resp.render(pageEstateAd, {carousel: carousel});
}

module.exports = {renderEstateAd, renderEstateAds, renderView};
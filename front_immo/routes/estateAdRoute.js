const {renderEstateAds, renderEstateAd, renderView} = require('./utils/estateAdHandler');
const BaseURI = '/agence';
const pathBackEnd = 'http://localhost:3000/immo';
const adRoute = 'annonces';
const adRoute2 = 'annonce';

const createRoutesEstateAd = (app) => {
    app.get(`/`, (req, res) => renderEstateAds(req, res, pathBackEnd, adRoute, 'home', true));
    app.get(`${BaseURI}/${adRoute}`, (req, res) => renderEstateAds(req, res, pathBackEnd, adRoute, 'estateAd/estateAds'));
    app.get(`/voir-${adRoute2}/:id`, (req, res) => renderEstateAd(req, res, pathBackEnd, adRoute2, 'estateAd/estateAd'));
    app.get(`/ajouter-${adRoute2}`, (req, res) => renderView(req, res,'estateAd/add'));
    app.get(`/editer-${adRoute2}/:id`, (req, res) => renderEstateAd(req, res, pathBackEnd, adRoute2, 'estateAd/edit'));
};
module.exports = createRoutesEstateAd;
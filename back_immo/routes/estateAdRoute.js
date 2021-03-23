const {
    getEstateAds,
    getEstateAdById,
    updateEstateAdById,
    createEstateAd,
    deleteEstateAdById
} = require('../controllers/estateAdController');
const BaseURI = '/immo';

const createRouteEstateAd = (app) => {
    app.get(`${BaseURI}/annonces`, getEstateAds);
    app.get(`${BaseURI}/annonce/:id`, getEstateAdById);
    app.post(`${BaseURI}/annonce`, createEstateAd);
    app.put(`${BaseURI}/annonce/:id`, updateEstateAdById);
    app.delete(`${BaseURI}/annonce/:id`, deleteEstateAdById);
}

module.exports = createRouteEstateAd;
const {EstateAdModel} = require('../models');
const {createDocument, getDocuments, getDocumentById, deleteDocumentById, updateDocumentById} = require('./utils/collectionHandler')
/**
 * Create a new estate ad
 */
const createEstateAd = (req, res, next) => {
    createDocument(req, res, next, EstateAdModel);
};

/**
 * Get estate ads
 * @param req
 * @param res
 * @param next
 */
const getEstateAds = (req, res, next) => {
    getDocuments(res, next, EstateAdModel);
}

/**
 * Get a single estate ad
 *
 * @param req
 * @param res
 * @param next
 */
const getEstateAdById = (req, res, next) => {
    getDocumentById(req, res, next, EstateAdModel);
}

/**
 * Delete a estate ad
 *
 * @param req
 * @param res
 * @param next
 */
const deleteEstateAdById = (req, res, next) => {
    deleteDocumentById(req, res, next, EstateAdModel);
}

/**
 * Update a estate ad
 *
 * @param req
 * @param res
 * @param next
 */
const updateEstateAdById = (req, res, next) => {
    updateDocumentById(req, res, next, EstateAdModel);
}

module.exports = {createEstateAd, getEstateAds, deleteEstateAdById, updateEstateAdById, getEstateAdById};
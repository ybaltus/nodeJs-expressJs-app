/**
 * Add a new document
 * @param req
 * @param res
 * @param next
 * @param model
 */
const createDocument = (req, res, next, model) => {
    const newDocument = req.body;
    model.create(newDocument).then((document) => {
        res.send(document);
    }).catch((err) => {
        next(err);
    })
};

/**
 *  Get all documents
 * @param res
 * @param next
 * @param model
 */
const getDocuments = (res, next, model) => {
    model.find().then((documents) => {
        res.send(documents);
    }).catch(next);
}

/**
 *  Get a document by Id
 * @param req
 * @param res
 * @param next
 * @param model
 */
const getDocumentById = (req, res, next, model) => {
    const {id} = req.params;
    model.findById(id).then((document) => {
        res.send(document);
    }).catch(next);
}

/**
 *  Delete a document by id
 * @param req
 * @param res
 * @param next
 * @param model
 */
const deleteDocumentById = (req, res, next, model) => {
    const {id} = req.params;
    model.findByIdAndDelete(id).then((document) => {
        res.send(document);
    }).catch(next);
}

/**
 *  Update a document by id
 *
 * @param req
 * @param res
 * @param next
 * @param model
 */
const updateDocumentById = (req, res, next, model) => {
    const {id} = req.params;
    model.findByIdAndUpdate(id, req.body).then(() => {
        model.findById(id).then((newDocument) => {
            res.send(newDocument);
        })
    }).catch(next);
}


module.exports = {createDocument, getDocuments, getDocumentById, deleteDocumentById, updateDocumentById}
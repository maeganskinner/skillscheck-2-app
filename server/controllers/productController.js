function addProduct(req, res) {
    const { name, price, image } = req.body;
    const db = req.app.get("db");
    db.addProduct(name, price, image).then(response => {
        console.log(response);
        res.sendStatus(200);
    })
}

function getProduct(req, res) {
    const db = req.app.get("db");
    if (req.query.product !== undefined) {
        db.getProduct.req.query.name).then(response => {
            res.status(200).json(response);
        })
    }
}

module.exports = {
    getProduct,
    addProduct,
    deleteProduct
}



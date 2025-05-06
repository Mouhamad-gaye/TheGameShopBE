

const globalError = ((err, req, res, next) => {
    res.status(500).json({neg: err.message})

})

export default globalError
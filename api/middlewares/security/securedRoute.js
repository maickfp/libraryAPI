const securedRoute = (req, res, next) => {
    if(req.user.id !== undefined){
        next();
    }else{
        res.status(500).send({
            est: 3,
            msg: `Acceso restringido`
        });
    }    
};

module.exports = securedRoute;
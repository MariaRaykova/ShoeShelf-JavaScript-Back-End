const routers = [
    { homeRouter: require('./homeRouter') },
    { shoeRouter: require('./shoeRouter') },
    { userRouter: require('./userRouter') }
];


module.exports = (router) => {
    
    return routers.reduce((acc, curr) => {
        const key = Object.keys(curr)[0];
        return Object.assign(acc, { [key]: curr[key](router) });
    }, {});
};
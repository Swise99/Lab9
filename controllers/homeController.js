exports.logRequests=(req, res , next) => {
    console.log(`request made to: ${req.url}`);
    next();
};
exports.respondWithName = (req, res) => {
    let paramsName = req.params.myName;
    res.render("index", { name: paramsName });
}
exports.homePage = (req, res) => {
    res.render("homePage")
}
exports.respondWithImage = (req, res) => {
    let imageNum = req.params.imgNum;
    res.render("image", { number : imageNum});
}
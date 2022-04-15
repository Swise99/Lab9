exports.logRequests=(req, res , next) => {
    console.log(`request made to: ${req.url}`);
    next();
};
exports.homePage = (req, res) => {
    res.render("homePage")
}
exports.respondWithImage = (req, res) => {
    let imageNum = req.params.imgNum;
    res.render("image", { number : imageNum});
}
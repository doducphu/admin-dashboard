
module.exports = (req, res, next) => {
    res.status(200).json({
      msg: "ok",
    });
    req.session.destroy();
  };
  
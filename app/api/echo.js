module.exports = {
  get: (req, res) => {
    res.status(200).json({ message: req.swagger.params.message.value });
  },
};

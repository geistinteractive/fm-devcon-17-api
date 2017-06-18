module.exports.findAllProducts = (req, res) => {
  const result = [
    { id: "a", name: "joe" },
    { id: "b", name: "stever" },
    { id: "c", name: req.bla }
  ];
  res.json(result);
};

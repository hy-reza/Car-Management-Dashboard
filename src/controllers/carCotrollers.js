
const errorHandler = (res, e) => {
  res.status(500).json({message: e.message});
}

exports.getCars = (req, res) => {
  try {
    res.status(200).json({message: "Successfully got cars data !"})
  } catch (e) {
    errorHandler(res, e);
  }
}
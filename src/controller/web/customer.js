exports.getAdd = async (req, res) => {
  console.log("🚀 ~ exports.getAdd= ~ req:", req);
  try {
    console.log("running");
    return res.status(200).json({
      data: { result: true, message: "messsage", data: [] },
      error: null,
    });
  } catch (err) {
    console.log("🚀 ~ exports.getAdd= ~ err:", err);
    return res.status(400).json({
      data: { result: true, message: "messsage", data: [] },
      error: null,
    });
  }
};

const Feature = require("../../models/Feature");

const addFeatureImage = async (req, res) => {
  try {
    const { image } = req.body;

    if (!image) {
      return res.status(400).json({ success: false, message: "Image URL is required" });
    }

    const featureImage = new Feature({ image });

    await featureImage.save();

    res.status(201).json({
      success: true,
      data: featureImage,
    });
  } catch (e) {
    console.error("❌ Error saving feature image:", e);
    res.status(500).json({
      success: false,
      message: "Some error occurred!",
    });
  }
};



const getFeatureImages = async (req, res) => {
  try {
    const images = await Feature.find({});

    res.status(200).json({
      success: true,
      data: images,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

module.exports = { addFeatureImage, getFeatureImages };

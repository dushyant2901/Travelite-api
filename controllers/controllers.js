const travelMethods = require("../services/travelServices");

const createDestination = async (req, res) => {
  const newDestination = req.body;
  try {
    const resDestination =
      await travelMethods.createTravelDestination(newDestination);
    res.status(201).json({ New_Destination_Added: resDestination });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getTravelDestinationByName = async (req, res) => {
  const destinationName = req.params.name;
  try {
    const destinationResult =
      await travelMethods.readTravelDestination(destinationName);
    res.status(200).json({ destination: destinationResult });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getAllTravelDestinations = async (req, res) => {
  try {
    const allDestinations = await travelMethods.readAllTravelDestinations();
    res.status(200).json({ destinations: allDestinations });
  } catch (error) {
    res.status(404).json({ error: error });
  }
};

const getTravelDestinationsByLocation = async (req, res) => {
  const locationName = req.params.locationName;
  try {
    const locationResult =
      await travelMethods.readTravelDestinationsByLocation(locationName);
    console.log("LOCatoin", locationResult);
    res.status(200).json({ location: locationResult });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
};

const readTravelDestinationsByRating = async (req, res) => {
  try {
    const ratingResults = await travelMethods.readTravelDestinationsByRating();
    res.status(200).json({ rating: ratingResults });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const updateTravelDestination = async (req, res) => {
  const destinationId = req.params.destinationId;
  const destinationObj = req.body;
  console.log("req", destinationObj);
  try {
    const updatedDestination = await travelMethods.updateTravelDestination(
      destinationId,
      destinationObj,
    );
    res.status(201).json({ updated: updatedDestination });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const deleteTravelDestination = async (req, res) => {
  const destId = req.params.destinationId;
  try {
    const deleted = await travelMethods.deleteTravelDestination(destId);
    res.status(201).json({ deleted: deleted });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const filterDestinationsByRating = async (req, res) => {
  const minRating = req.params.minRating;
  try {
    const ratingResults =
      await travelMethods.filterDestinationsByRating(minRating);
    res.status(200).json({ ratings: ratingResults });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const addReview = async (req, res) => {
  const destinationId = req.params.destinationId;
  const reviewBody = req.body;
  try {
    const addResult = await travelMethods.addReviewToDestination(
      destinationId,
      reviewBody,
    );
    res.status(201).json({ updated: "Review added successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getDestinationReviewsWithUserDetails = async (req, res) => {
  const destinationId = req.params.destinationId;
  try {
    const allReviews = await travelMethods.destinationReviews(destinationId);
    res.status(200).json({ reviews: allReviews });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = {
  createDestination,
  getTravelDestinationByName,
  getAllTravelDestinations,
  getTravelDestinationsByLocation,
  readTravelDestinationsByRating,
  updateTravelDestination,
  deleteTravelDestination,
  filterDestinationsByRating,
  addReview,
  getDestinationReviewsWithUserDetails,
};

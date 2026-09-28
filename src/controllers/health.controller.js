export const getHealthStatus = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "VocabBuilder API is up and running!",
    timestamp: new Date().toISOString(),
  });
};

const pool = require("../models/db");

const createNewReview = (req, res) => {
  const reviewer = req.token.userId;
  const { id } = req.params;
  const { rating, review_text } = req.body;
  const query = `INSERT INTO reviews (rating, review_text, product_id, user_id) VALUES ($1, $2, $3, $4) RETURNING *`;
  pool
    .query(query, [rating, review_text, id, reviewer])
    .then((result) => {
      res.status(201).json({
        success: true,
        message: "Review created successfully",
        result: result.rows[0],
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server error`,
        err: err,
      });
    });
};

const getReviewByProductId = (req, res) => {
  const { id } = req.params;
  const query = `
    SELECT reviews.*, users.username, users.images 
    FROM reviews 
    JOIN users ON reviews.user_id = users.user_id 
    WHERE reviews.product_id = $1;
  `;
  pool
    .query(query, [id])
    .then((result) => {
      res.status(200).json({
        success: true,
        message: `All reviews for product with id ${id}`,
        reviews: result.rows,
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: "Server error",
        Error: error.message,
      });
    });
};

const updateReview = (req, res) => {
  const { id } = req.params;
  const { rating, review_text } = req.body;
  const query = `UPDATE reviews SET rating= COALESCE($1, rating), review_text= COALESCE($2, review_text) WHERE review_id=$3 RETURNING *`;
  pool
    .query(query, [rating, review_text, id])
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "Review Updated",
        reviews: result.rows[0],
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: "Server error",
        error: error.message,
      });
    });
};

const deleteReview = (req, res) => {
  const { id } = req.params;
  pool
    .query(`DELETE FROM reviews WHERE review_id=$1`, [id])
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "Review deleted",
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: "server error",
        error: error.message,
      });
    });
};

const getAllReviews = (req, res) => {
  const query = `
    SELECT reviews.*, users.username, users.images 
    FROM reviews 
    JOIN users ON reviews.user_id = users.user_id;
  `;
  pool
    .query(query)
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "All reviews retrieved successfully",
        reviews: result.rows,
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: "Server error",
        error: error.message,
      });
    });
};



module.exports = {
  createNewReview,
  getReviewByProductId,
  updateReview,
  deleteReview,
  getAllReviews 
};

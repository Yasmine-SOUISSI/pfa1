const express = require("express");
const router = express.Router();
const {
  getBlogs,
  getBlogById,
  addBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");
const isAuth = require("../middlewares/isAuth");

/*
@method: GET
@ path:http://localhost:5000/
private
*/
router.get("/", getBlogs);

/*
@method: POST
@ path:http://localhost:5000/blog/addBlog
@ parameter: req.body  
private
*/
router.post("/addBlog", addBlog);

/*
@method: GET
@ path:http://localhost:5000/blog/:blogId
private
*/
router.get("/:blogId", getBlogById);

/*
@method: PUT
@ path:http://localhost:5000/blog/updateBlog/:blogId
private
*/
router.put("/updateBlog/:blogId", updateBlog);

/*
@method: DELETE
@ path:http://localhost:5000/blog/deleteBlog/:blogId
private
*/
router.delete("/deleteBlog/:blogId", deleteBlog);

// default export
module.exports = router;

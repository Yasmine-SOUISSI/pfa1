const BlogSchema = require("../models/blogSchema");

exports.addBlog = async (req, res) => {
  try {
    const blog = new BlogSchema({ ...req.body });
    await blog.save();
    res.status(200).send({ msg: "add blog successfully" });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "error" }] });
  }
};

exports.getBlogs = async (_, res) => {
  try {
    const blogs = await BlogSchema.find()
    res.status(200).send({ data: blogs });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getBlogById = async (req, res) => {
  try {
    const blogs = await BlogSchema.findById(req.params.blogId)
    res.status(200).send({ data: blogs });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const blog = await BlogSchema.findByIdAndUpdate(
      req.params.blogId,
      req.body,
      { new: true }
    )
    res.status(200).send({ data: blog });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const blog = await BlogSchema.findByIdAndRemove(req.params.blogId)
    res.status(200).send({ msg: 'deleted successfully' });
  } catch (error) {
    res.status(500).send(error);
  }
};
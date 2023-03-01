const News = require("../models/News");

//create an class
//[POST]: /api/classes/
const createNew = async (req, res) => {
  try {
    const news = await News.create(req.body);
    return res.status(201).json(news);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getAll = async (req, res) => {
  const { cat, page, limit } = req.query;
  const limitPerPage = limit ?? 5;
  const total = await News.countDocuments();

  const query = {};
  if (cat) {
    query.cat = cat;
  }

  try {
    if (cat) {
      const totalCat = await News.countDocuments(query);
      const getAllNews = await News.find(query)
        .skip((page && parseInt(page) - 1) * parseInt(limitPerPage))
        .limit(parseInt(limitPerPage));
      return res.status(200).json({
        data: getAllNews,
        total: totalCat,
        limit: parseInt(limitPerPage),
      });
    } else {
      const getAllNews = await News.find()
        .skip((page && parseInt(page) - 1) * parseInt(limitPerPage))
        .limit(parseInt(limitPerPage));
      console.log(getAllNews);
      return res
        .status(200)
        .json({ data: getAllNews, total, limit: parseInt(limitPerPage) });
    }
  } catch (err) {
    return res.status(500).json(err);
  }
};

const update = async (req, res) => {
  try {
    const myClass = await Class.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    return res.status(200).json(myClass);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const addStudent = async (req, res) => {
  try {
    const currentStudent = await Student.findById({ _id: req.body.studentId });
    const getStudentId = currentStudent._id;
    const updatedClass = await Class.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { students: getStudentId } },
      { new: true }
    );
    return res.status(200).json(updatedClass);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getAnPost = async (req, res) => {
  try {
    const post = await News.findById({ _id: req.params.id });
    return res.status(200).json(post);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  createNew,
  getAll,
  update,
  getAnPost,
};

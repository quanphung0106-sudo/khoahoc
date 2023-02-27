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
  const { cat } = req.query;
  try {
    const getAllNews = await News.find();
    if (cat) {
      getAllNews.map((newItem) => {
        if (newItem) {
          const getCatType = newItem.category.filter((data) => {
            return cat === data.catType;
          });
          return res.status(200).json(getCatType);
        }
      });
    } else {
      return res.status(200).json(getAllNews);
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

const getClass = async (req, res) => {
  try {
    const myClass = await Class.findById({ _id: req.params.id }).populate(
      "students"
    );
    return res.status(200).json(myClass);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  createNew,
  getAll,
  update,
};

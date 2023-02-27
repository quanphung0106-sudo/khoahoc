const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewsSchema = new Schema(
  {
    category: [
      {
        catType: String,
        data: [
          {
            title: String,
            img: String,
            desc: String,
            newContent: [
              {
                titleContent: String,
                content: String,
                img: {
                  url: String,
                  imgDesc: String,
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.models.News || mongoose.model("News", NewsSchema);

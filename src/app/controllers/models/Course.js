const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        printOrder_id: String,
      orientation: String,
      page_size: String,
      pages_per_sheet: String,
      print_color: String,
      side: String,
      text_size: String,
    },
    {
        timestamps: true,
    },
);


module.exports = mongoose.model('Course', Course);


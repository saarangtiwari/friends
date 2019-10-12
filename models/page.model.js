const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PageSchema = new Schema({
  pageName: {
    type: String,
    require: true
  },
  members: [{ type: Schema.ObjectId, ref: 'user' }]
});

const Page = mongoose.model('page', PageSchema);

const PageModel = {
  addNewPage: async pageName => {
    const newPage = new Page(pageName);
    try {
      newPage.save();
      return {
        message: "Page Created",
        data: newUser
      }
    } catch (error) {
      return {
        message: "Error occurred while creating New Page",
        error
      };
    }
  },

  addMembers: async (pageName, members) => {


  }
}

module.exports = PageModel;
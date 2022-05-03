const { Schema, model } = require('mongoose');
const user = require('./User')

const chatSchema = new Schema(
  {
    username: {
      type: String,
      required:true,
    },
    message: {
      type: String,
      required: true,
    },
    date_created: {
      type: Date,
      required:true,
      default: Date.now,
    },
    // user_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'user',
    //     key: 'id',
    //   },
    // },
  });

const Chat = model('Chat', chatSchema)

module.exports = Chat;


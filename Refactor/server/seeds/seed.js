const db = require('../config/connection');
const { User, Chat } = require('../models');

const userData = require('./userData.json');
const chatData = require('./chatData.json')

db.once('open', async () => {
  await User.deleteMany({});
  const users = await User.insertMany(userData);

  await Chat.deleteMany({});
  const chats = await Chat.insertMany(chatData);

  console.log('Users and chats seeded!');
  process.exit(0);
});

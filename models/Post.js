const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");

const Post = sequelize.define("Post", {
  title: DataTypes.STRING,
  content: DataTypes.TEXT
});

Post.belongsTo(User, { foreignKey: "authorId" });
User.hasMany(Post, { foreignKey: "authorId" });

module.exports = Post;

const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Post', {
    //모델의 Attributes (Column)을 정의하는곳
    //하나의 게시물에는 하나의 사진만 넣을 수 있다는 가정
    title: {
      //문자 수는 최대 30자 setting
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    contents: {
      //일반적으로 장문의 내용은 text로!
      type: DataTypes.TEXT(),
      allowNull: false,
    },
    postImageUrl: {
      type: DataTypes.STRING(100),
      allowNull: true,
    }
  }, {
    //모델의 옵션들을 지정하는곳    
    freezeTableName: true,
    timestamps: true,
  });
}
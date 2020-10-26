module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "teacher", // 테이블의 이름을 지정합니다.
    {
      name: {
        // teacher 테이블의 column
        type: DataTypes.STRING(50), // data type
        allowNull: true,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
      timestamps: false,
    }
  );
};

module.exports = (sequelize, Sequelize) => {
  const Genre = sequelize.define("Genre", {
    name: { type: Sequelize.INTEGER, allowNull: false },
    url: {
      type: Sequelize.VIRTUAL,
      get() {
        return `/catalog/bookinstance/${this._id}`;
      },
      set(value) {
        throw new Error("Do not try to set URL");
      },
    },
  });
  return Genre;
};

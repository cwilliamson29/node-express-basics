module.exports = (sequelize, Sequelize) => {
    const Genre = sequelize.define("Genre", {
        name: { type: Sequelize.INTEGER, allowNull: false },
    });
    return Genre;
};

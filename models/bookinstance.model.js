module.exports = (sequelize, Sequelize) => {
    const BookInstance = sequelize.define("BookInstance", {
        book: { type: Sequelize.INTEGER, allowNull: false },
        imprint: { type: Sequelize.STRING, allowNull: false },
        status: {
            type: Sequelize.ENUM("Available", "Maintenance", "Loaned", "Reserved"),
            defaultValue: "Maintenance",
        },
        due_back: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    });
    return BookInstance;
};

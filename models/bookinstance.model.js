//const models = require("../models/models");
const { DateTime } = require("luxon");

module.exports = (sequelize, Sequelize) => {
    const BookInstance = sequelize.define("BookInstance", {
        //book: { type: Sequelize.INTEGER, allowNull: false },
        imprint: { type: Sequelize.STRING, allowNull: false },
        status: {
            type: Sequelize.ENUM("Available", "Maintenance", "Loaned", "Reserved"),
            defaultValue: "Maintenance",
        },
        due_back: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
        url: {
            type: Sequelize.VIRTUAL,
            get() {
                return `/catalog/bookinstance/${this._id}`;
            },
            set(value) {
                throw new Error("Do not try to set URL");
            },
        },
        due_date_formatted: {
            type: Sequelize.VIRTUAL,
            get() {
                return DateTime.fromJSDate(this.due_back).toLocaleString(DateTime.DATE_MED);
            },
        },
    });
    BookInstance.associate = (models) => {
        BookInstance.hasOne(models.book, {
            foreignKey: "bookId",
            as: "BookInstances",
        });
    };
    return BookInstance;
};

module.exports = (sequelize, Sequelize) => {
    const Author = sequelize.define("Author", {
        firstName: { type: Sequelize.STRING, allowNull: false },
        lastName: { type: Sequelize.STRING, allowNull: false },
        DOB: { type: Sequelize.DATE, allowNull: false },
        DOD: { type: Sequelize.DATE, allowNull: false },
        fullName: {
            type: Sequelize.VIRTUAL,
            get() {
                return `${this.firstName} ${this.lastName}`;
            },
            set(value) {
                throw new Error("Do not try to set the `fullName` value!");
            },
        },
    });
    return Author;
};

module.exports = {
  dialect: 'postgres',
  host: process.env.POSTGRES_HOST,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  define: {
    timestamps: true,
    underscored: true,
  },
};

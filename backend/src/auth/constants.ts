require('dotenv').config();

export const jwtConstants = {
  secret: process.env.SECRET,
  refreshSecret: process.env.REFRESH_SECRET,
};

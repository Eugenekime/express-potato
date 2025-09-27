import User from '../models/User.js';

export const logout = async (req, res) => {
  const { refreshToken } = req.body;

  const user = await User.findOne({ refreshTokens: refreshToken });
  if (!user) return res.sendStatus(204);

  user.refreshTokens = user.refreshTokens.filter(
    (token) => token !== refreshToken
  );
  await user.save();

  res.sendStatus(200);
};

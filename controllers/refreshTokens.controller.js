import User from '../models/User';
import jwt from 'jsonwebtoken';
import { generateRefreshToken, generateAccessToken } from '../utils/token';

export const refresh = async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(401).json({ message: 'Нет refresh token' });
  }

  try {
    const payload = jwt.verify(refreshToken, process.env.REFRESH_SECRET);

    const user = await User.findOne({ refreshTokens: refreshToken });

    if (!user) {
      return res.status(403).json({ message: 'Refresh token не найден' });
    }

    user.refreshTokens = user.refreshTokens.filter((t) => t !== refreshToken);
    const newRefreshToken = generateRefreshToken({ userId: user._id });
    user.refreshTokens.push(newRefreshToken);
    await user.save();

    const newAccessToken = generateAccessToken({ userId: payload.userId });

    res.json({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  } catch (err) {
    return res.status(403).json({ message: 'Refresh token недействителен' });
  }
};

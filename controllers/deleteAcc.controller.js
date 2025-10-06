import User from '../models/User.js';

export const deleteAcc = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      return res.status(400).json({ message: 'Нет токена' });
    }

    const user = await User.findOne({ refreshTokens: { $in: [refreshToken] } });
    if (!user) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }

    user.refreshTokens = user.refreshTokens.filter(
      (token) => token !== refreshToken
    );
    await user.save();

    return res.status(200).json({ message: 'Аккаунт удалён' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

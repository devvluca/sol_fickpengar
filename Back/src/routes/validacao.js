const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(403).json({ error: 'Nenhum token fornecido' });
  }

  jwt.verify(token, 'seuSegredoJWT', (err, decoded) => {
    if (err) {
      return res.status(500).json({ error: 'Falha na autenticação do token' });
    }
    req.userId = decoded.id;
    next();
  });
};

module.exports = { verifyToken };

const { body, validationResult } = require('express-validator');

// No arquivo de rota (por exemplo, cadastro.js)
router.post('/', [
  body('username').isLength({ min: 5 }).withMessage('Usuário deve ter pelo menos 5 caracteres'),
  body('password').isLength({ min: 5 }).withMessage('Senha deve ter pelo menos 5 caracteres')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Restante da lógica de cadastro...
});

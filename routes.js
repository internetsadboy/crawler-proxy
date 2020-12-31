import express from 'express';

const router = express.Router();

router.get('/crawl', (req, res) => {
  res.statusCode = 200;
  res.json({ test: 1999 });
});

router.get('*', (req, res) => {
  res.statusCode = 400;
  res.end('400 Bad Request');
});

export default router;

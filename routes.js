import express from 'express';
import validUrl from 'valid-url';
import kickstarterCrawler from 'kickstarter-crawler';

const router = express.Router();

router.get('/crawl', (req, res) => {
  const url = req && req.query && req.query.url;
  if (isUrl(url)) {
    const result = kickstarterCrawler(url);
    result.then((data) => {
      res.statusCode = 200;
      res.json(data);
    })
  } else {
    res.statusCode = 400;
    res.end('400 Bad Request: Malformed Url');
  }
});

router.get('*', (req, res) => {
  res.statusCode = 400;
  res.end('400 Bad Request');
});

const isUrl = (url) => {
  return validUrl.isHttpsUri(url) || validUrl.isHttpUri(url);
}

export default router;

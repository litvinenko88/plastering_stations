const http = require('http');
const fs = require('fs').promises;
const fsSync = require('fs');
const path = require('path');

const port = 3001;
const outDir = path.join(__dirname, 'out');

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.wav': 'audio/wav',
  '.mp4': 'video/mp4',
  '.woff': 'application/font-woff',
  '.ttf': 'application/font-ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'application/font-otf',
  '.wasm': 'application/wasm'
};

const server = http.createServer(async (req, res) => {
  try {
    // Защита от path traversal
    const requestPath = req.url === '/' ? 'index.html' : req.url;
    let filePath = path.join(outDir, requestPath);
    
    // Проверяем, что путь находится внутри outDir
    const resolvedPath = path.resolve(filePath);
    const resolvedOutDir = path.resolve(outDir);
    
    if (!resolvedPath.startsWith(resolvedOutDir)) {
      res.writeHead(403);
      res.end('Forbidden');
      return;
    }
    
    // Асинхронная проверка существования файла
    try {
      await fs.access(filePath);
    } catch {
      if (!path.extname(filePath)) {
        filePath = path.join(filePath, 'index.html');
        try {
          await fs.access(filePath);
        } catch {
          filePath = path.join(outDir, '404.html');
        }
      } else {
        filePath = path.join(outDir, '404.html');
      }
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    const content = await fs.readFile(filePath);
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
    
  } catch (error) {
    console.error('Server error occurred');
    res.writeHead(500);
    res.end('Server Error');
  }
});

server.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
  console.log('Для остановки нажмите Ctrl+C');
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\nЗакрытие сервера...');
  server.close(() => {
    console.log('Сервер закрыт');
    process.exit(0);
  });
});
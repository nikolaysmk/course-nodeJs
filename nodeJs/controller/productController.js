// import products from '../data/product.json' assert { type: 'json' };

// import { GET, POST, PUT, DELETE } from '../constMethod.js';

// export const getProducts = (req, res) => {
//   return new Promise((resolve, reject) => {
//     if (req.url === '/api/products' && req.method === GET) {
//       res.statusCode = 200;
//       res.setHeader('Content-Type', 'application/json');
//       res.end(JSON.stringify({ products, message: products.length }));
//       resolve(products);
//     } else {
//       res.statusCode = 404;
//       res.end(JSON.stringify({ message: 'Route not found' }));
//       reject();
//     }
//   });
// };

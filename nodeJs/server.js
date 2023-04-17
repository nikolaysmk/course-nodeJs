import http from 'http';

const server = http.createServer((req, res) => {});

const PORT = process.env.PORT || 3434;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// curl localhost:5000
// autocannon -c 1000  localhost:5000

// q: JSON.parse что делает метод?
// a: JSON.parse преобразует строку в объект
// q: JSON.stringify что делает метод?
// a: JSON.stringify преобразует объект в строку

require('dotenv').config();
const server = require('./src/server');
const port = process.env.PORT;

server.listen(port, '0.0.0.0', () => {
    if(server.listening) {
        console.log(`Server is listening on port: ${port}`);
    }
});
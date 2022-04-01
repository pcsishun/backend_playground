const app = require('./app')

const port = 3030

app.listen(port, () => {
    console.log(`Server running on port ${port}, http://localhost:${port}`);
})
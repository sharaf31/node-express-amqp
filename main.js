const app=require('./app');

const port = 8070;
const listener = (err) => {
    if (err) {
        throw err
    }

    console.log('Server started on port 8070');
};

// Tell our app to listen on port 3000
app.listen(port, listener);
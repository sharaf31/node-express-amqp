const app=require('./app');

const port = 8070;

const lister=(err)=>{
    if(err){
        throw err;
    }
    console.log('server started in on port 8070');
};

app.listen(port,lister);
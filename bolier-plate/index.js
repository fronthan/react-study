const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb+srv://root:happy88today@cluster0.fvs0h.mongodb.net/study?retryWrites=true&w=majority', {//쓰지 않으면 에러가 많이 뜨기 때문에 써주는 게 좋다.
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(() => console.log('mongoDB connected'))
    .catch( error => {console.log(error)});

app.get('/', (req, res) => {
  res.send('Hello World! 가나다라라라ㅏ')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
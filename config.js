var database;
if (process.env.NODE_ENV === 'development') {
  //console.log("here1");
  database = 'mongodb://yugal:TwutKucOtLodHy9@ds139781.mlab.com:39781/expert';
  //database = process.env.MONGO_URI;
} else if (process.env.NODE_ENV === 'production') {

  database = 'mongodb://yugal:TwutKucOtLodHy9@ds139781.mlab.com:39781/expert';
} else {
  // console.log("here3");
  database = 'mongodb://127.0.0.1/expert';
}
module.exports = {

  'database': database,
  'port': process.env.PORT || 8000,
  'access_token':'EAALlNCUBpy8BAFYcKhihZAABZAnYfXBnlaIxCctFuVBRDaRXkAQcJ7lqinDjwy4OkEhkjSusZCyRWVMKiZAsw2e1a1qAjgaRsaE3M4jKoorMn3LhzOczHOadOrkfWnafk9Qrv59MvF5rWqWOSLntZA0uDYbYUbUuPJxZAERU7ZAjAZDZD', 
  'verify_token':'expert_fb_chatbot',
  'path': __dirname,
  'movies': ['latest movie list', 'movie list', 'latest movies', 'latest movie', 'latest movie list', 'movie list', 'movies list', 'movies lists'],
  'between': ['in','of','-',' -','- ','detail','details','name','names','with']
    //"secretKey":"Yoursecretkey"
}

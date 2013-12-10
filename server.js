var application_root = __dirname,
  http = require('http'),
  express = require('express'),
  path = require('path'),
  app = express(),
  server = http.createServer(app),
  io = require('socket.io').listen(server);


app.configure(function() {
  app.use( express.bodyParser() );

  app.use( express.methodOverride() );

  app.use( app.router );

  app.set('views', __dirname + '/views');
  app.engine('html', require('ejs').renderFile);

  app.use(express.static(path.join(application_root, 'static') ) );

  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});



server.listen(3000);
console.log('Listening on port 3000');

//route to check if is mobile or is a desktop
app.get('/', function(req, res){
  var ua = req.headers['user-agent'];
  if(ua.match(/mobile/i)) {
    res.render('index_mobile.html');
  }else {
    res.render('game.html');
  }
});

//config socket
io.sockets.on('connection', function(socket) {
  socket.emit('news', {hello: 'world'});
  socket.on('my other event', function(data) {
    console.log(data);
  });
});


var application_root = __dirname,	 
  express = require('express'),
  path = require('path'),

  app = express();


app.configure(function() {
  app.use( express.bodyParser() );

  app.use( express.methodOverride() );

  app.use( app.router );

  app.set('views', __dirname + '/views');
  app.engine('html', require('ejs').renderFile);

  app.use(express.static(path.join(application_root, 'static') ) );

  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.get('/', function(req, res){
  res.render('index.html');
});


app.listen(3000);
console.log('Listening on port 3000');
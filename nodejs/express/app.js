const Express = require('express');//路由
const Sequelize = require('sequelize'); //操作数据库

var app = Express()

var sequelize = new Sequelize('test', 'root', '168168', {
  host: 'localhost',
  dialect: 'mysql',
  timezone: '-08:00'
});

sequelize.authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }).catch(function(err) {
    console.log('Unable to connect to the database:', err);
  });

var table = {
  user: sequelize.define('user', {
    user_id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    }
  }, {
    freezeTableName: true,
    timestamps: false,
    underscoredAll: true
  })
}

app.get('*', (req, res, next) => {
    if (req.url === '/1') {
        table.user.findAll().then(data => {
            res.send(JSON.stringify(data))
        });
    } else if (req.url === '/2') {
        table.user.create().then(data => {
          res.send(JSON.stringify({newid: data.null}))
        })
    }
})

server = app.listen('4000')
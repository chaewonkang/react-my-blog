/* eslint-disable */
const express = require("express");
const app = express();

const sequelize = require("./models").sequelize;
const bodyParser = require("body-parser");

sequelize.sync();
/* 모든 데이터 초기화 */
/* sequelize.sync({ forse: true }) */

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname));

const {
  Teacher,
  Sequelize: { Op },
} = require("./models");
sequelize.query("SET NAMES utf8;");

app.get("/get/data", (req, res) => {
  Teacher.findAll()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      throw err;
    });
});

app.post("/add/data", (req, res) => {
  Teacher.create({
    name: req.body.data,
  })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
});

app.post("/modify/data", (req, res) => {
  Teacher.update(
    { name: req.body.modify.name },
    {
      where: { id: req.body.modify.id },
    }
  )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      throw err;
    });
});

app.post("/delete/data", (req, res) => {
  Teacher.destroy({
    where: { id: req.body.delete.id },
  })
    .then(res.sendStatus(200))
    .catch((err) => {
      throw err;
    });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
});

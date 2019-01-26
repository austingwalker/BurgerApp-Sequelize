var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require("../models/");


// Create all our routes and set up logic within those routes where required.

router.get("/", function(req, res) {

    db.Burger.findAll({}).then(function(results) {
     

     
      // console.log(results);
      res.render("index",{ burger: results });

//   burger.all(
//     function(data) {
//     var hbsObject = {
//       burgers: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {

    db.Burger.create(req.body).then(function(dbPost) {
        res.json(dbPost);
      });



    // burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
    //   // Send back the ID of the new quote
    //   res.json({ id: result.insertId });
    // });
  });
  
router.put("/api/burgers/:id", function(req, res) {


  db.Burger.update({
    devoured: true
  },
  {
    where: {
      id: req.params.id
    }
  }
  ).then(function(dbBurger) {
    res.json("/");

  // console.log(req.body.devoured);
  // console.log(req.params.id);

  //   db.Burger.update(
  //       req.body.devoured,
  //       {
  //         where: {
  //           id: req.params.id
  //         }
  //       }).then(function(dbPost) {
  //           res.status(200).end();

    });


    // var condition = "id = " + req.params.id;
  
    // console.log("condition", condition);
  
    // burger.update(
    //   {
    //     devoured: req.body.devoured
    //   },
    //   condition,
    //   function(result) {
    //     if (result.changedRows === 0) {
    //       // If no rows were changed, then the ID must not exist, so 404
    //       return res.status(404).end();
    //     }
    //     res.status(200).end();
  
    //   }
    // );
  });

  router.delete("/api/burgers/:id", function(req, res) {

    db.Burger.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(dbPost) {
        res.json(dbPost);
      });


    // var condition = "id = " + req.params.id;
  
    // burger.delete(condition, function(result) {
    //   if (result.affectedRows == 0) {
    //     // If no rows were changed, then the ID must not exist, so 404
    //     return res.status(404).end();
    //   } else {
    //     res.status(200).end();
    //   }
    // });
  });


// Export routes for server.js to use.
module.exports = router;
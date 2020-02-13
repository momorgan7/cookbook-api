const express    = require('express');
const cors       = require('cors');
const bodyParser = require('body-parser');

var app        = express();
var port       = process.env.PORT || 4242;
var router     = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

// --------- ROUTING -----------------
// test route
router.get('/', function(req, res) {
    res.json({ message: 'hello world' });
});

router.route('/recipes')
    .get(function(req, res) {
        Recipe.find(function(err, recipe) {
            if (err)
                res.send(err);

            res.json(recipe);
        });
    });
    .post(function(req, res) {

        var recipe = new Recipe);
        recipe.name = req.body.name;

        recipe.save(function(err) {
            if (err)
                res.send(err);
            res.json({ message: 'recipe created' });
        });
    });
router.route('/recipe/:recipe_id')
    .get(function(req, res) {
        Recipe.findById(req.params.recipe_id, function(err, recipe) {
            if (err)
                res.send(err);
            res.json(recipe);
        });
    });
    .put(function(req, res) {
        Recipe.findById(req.params.recipe_id, function(err, recipe) {
            if (err)
                res.send(err);
            recipe.name = req.body.name;
            recipe.save(function(err) {
                if (err)
                    res.send(err);
                res.json({ message: 'recipe updated' });
            });
        });
    });
    .delete(function(req, res) {
       Recipe.remove({ _id: req.params.recipe_id }, function(err, recipe) {
           if (err)
               res.send(err);
           res.json({ message: 'Successfully deleted' });
       });
   });

app.use('/api', router);
app.use(function(req, res)) {
    res.status(404);
}


app.listen(port);
console.log('server running on ' + port);

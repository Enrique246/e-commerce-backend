const router = require('express').Router();
const { Category, Product, Tag, ProductTag } = require('../../models');

// The `/api/categories` endpoint

// Excersie 23 API -13-ORM-
router.get('/', async (req, res) => {
  // find all categories
  try{
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  // Exercise 13 ORM
  // Exercise 7 -13-ORM
  // Updates book based on its isbn
//   // Calls the update method on the Book model
    Category.update(
// All the fields you can update and the data attached to the request body.
{
id: req.body.id,
category_name: req.body.category_name
},{
where:{
id: req.params.id,
}
}

    )
.then((updatedCategory)=>{
res.json(updatedCategory);
})
.catch((err) => res.json(err))
//     .then((updatedBook) => {
//       // Sends the updated book as a json response
//       res.json(updatedBook);
//     })
//     .catch((err) => res.json(err));
});
  

router.delete('/:id',async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

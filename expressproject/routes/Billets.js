const express = require('express')
const router = express.Router()
const Billets = require('../models/Billet')

router.get('/', (req, res) => {
    Billets.find()
        .then(title => res.json(title))
        .catch(err => res.status(400).res.json(`Error:  ${err}`));
});


router.post('/add', (req, res) => {
    const newBillet = new Billets({
        title: req.body.title,
        content: req.body.content
    })

    newBillet.save()
        .then(() => res.json("The new billet has been posted successfuly!"))
        .catch(err => res.status(400).res.json(`Error:  ${err}`));
})

router.get('/:id', (req, res) => {
    Billets.findById(req.params.id)
        .then(title => res.json(title))
        .catch(err => res.status(400).res.json(`Error:  ${err}`));

})

router.put('/update/:id', (req, res) => {
    Billets.findById(req.params.id)
        .then(title => {
            title.title = req.body.title,
               title.content = req.body.content

            title
                .save()
                .then(() => res.json("The billet has been updated successfuly!"))
                .catch(err => res.status(400).json(`Error: ${err}`))
        })
        .catch(err => res.status(400).json(`Error: ${err}`))
})



router.delete('/:id', (req, res) => {
    Billets.findByIdAndDelete(req.params.id)
        .then(() => res.json("The billet has been deleted!"))
        .catch(err => res.status(400).res.json(`Error:  ${err}`));
})

module.exports = router;
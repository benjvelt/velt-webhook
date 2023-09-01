const app = require('express')();

app.post('/webhook', (req, res) => {

  let commentAnnotation = req.body.commentAnnotation
  let targetComment = req.body.targetComment
  let actionType = req.body.actionType

  res.send(`Processing: commentAnnotation: ${commentAnnotation},targetComment: ${targetComment},actionType: ${actionType}`)
  

})

module.exports = app;
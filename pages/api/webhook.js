// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

    let commentAnnotation = ""

    let targetComment= ""

    let actionType = ""

    console.log(req.body)
    res.status(200).send(`Processing: commentAnnotation: ${commentAnnotation}, commentType: ${targetComment}, actionType ${actionType}`)
  }
  
const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zoj9s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const uri = "mongodb+srv://brainzetWebsite:ebjA9y0vG5pxwqGi@cluster0.zoj9s.mongodb.net/?retryWrites=true&w=majority";
console.log('database uri',uri);

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run(req, res) {
  try {
    await client.connect();
    const blogsCollection = client.db('blogs_portal').collection('blogs');
    const reviewsCollection = client.db('blogs_portal').collection('reviews');
    
    // const reviewsCollection = database.collection('reviews');

    

    console.log('database connected');

    if(req.method === 'GET'){
        const blogs = await blogsCollection.find({}).toArray();
        res.send({message: "success", status: 200, data: blogs})
    }

    // create blogs
    if(req.method === 'POST'){
        const blogs = req.body;
        const result = await blogsCollection.insertOne(blogs);
        res.json(result);
    }

    // feedbacks
    if(req.method === 'GET'){
      const cursor = reviewsCollection.find({});
      const reviews = await cursor.toArray();
      res.send(reviews);
    // const reviews = await reviewsCollection.find({}).toArray();
    // res.send({message: "success", status: 202, data: reviews})
  }

  if(req.method === 'POST'){
    // const reviews = req.body;
     const review = req.body;
     const result = await reviewsCollection.insertOne(review);
    // const result = await reviewsCollection.insertOne(reviews);
    res.json(result);
  }


    //single post 
    // if (req.method === 'GET'){
      // const blogId = req.params.blogId;
      // const query = { _id: ObjectId(blogId)};
      // const blog = await blogsCollection.findOne(query);
      // res.json(blog);
    // }



  } finally {
    // await client.close();
  }
}

export default run;

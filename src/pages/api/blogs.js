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

  } finally {
    // await client.close();
  }
}

export default run;

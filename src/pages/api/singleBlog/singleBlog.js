const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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



    //single post 
    if (req.method === 'GET'){
      const blogId = req.query.blogId;
      const query = { _id:new ObjectId(blogId)};
      const blog = await blogsCollection.findOne(query);
      res.send({message: "success", status: 200, data: blog})
    }



  } finally {
    // await client.close();
  }
}

export default run;

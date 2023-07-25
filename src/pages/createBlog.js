import RootLayout from "@/components/Layouts/RootLayout";
import { useForm } from "react-hook-form"
import swal from "sweetalert";
// import swal from "sweetalert";

const CreateBlogPage = () => {
    
    const { register, handleSubmit } = useForm()
     const onSubmit = (data) => {
       fetch("/api/blogs", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(data),
    })

    .then((res) => res.json())
    .then((data) => {
        if(data.insertedId){
            // alert("News Successfully Created");
            swal("Good job!", "Blog Successfully Created!", "success")
        }
    });
};


return (
<div>
    <form 
    onSubmit={handleSubmit(onSubmit)}
    name="from_item_path"
    layout="vertical"
    style={{
           width: "50%",
           margin: "50px auto",
           }}>
        <input {...register("id")} placeholder="ID" style={{marginBottom: "10px",  width: "100%"}} />
        <input {...register("title")} placeholder="Title" style={{marginBottom: "10px",  width: "100%"}}/>
        <input {...register("description")} placeholder="Description"  style={{marginBottom: "10px",  width: "100%"}}/>
        <input {...register("author")} placeholder="Author" style={{marginBottom: "10px",  width: "100%"}}/>
        <input {...register("release_date")} type="date" placeholder="Release Date" style={{marginBottom: "10px",  width: "100%"}}/>
        <input {...register("category")} placeholder="Category" style={{marginBottom: "10px",  width: "100%"}}/>
        <input {...register("comment_count")} type="number" placeholder="Number of Comment" style={{marginBottom: "10px",  width: "100%"}}/>
        <input {...register("image_url")} placeholder="Image Url"  style={{marginBottom: "10px",  width: "100%"}}/>
        <input type="submit" value="Upload Blog" style={{margin: "10px 0px", width: "100%",  width: "100%"}}/>
    </form>
        </div>
    );
};

export default CreateBlogPage;

CreateBlogPage.getLayout = function getLayout(page){
    return(
        <RootLayout > 
          {page}
        </RootLayout>
    )
}
import { useRef } from "react";
import { useForm } from "react-hook-form";
import swal from 'sweetalert';


const AddReviews = () => {
    // const { user } = useAuth();
    const { register } = useForm();
    const nameRef = useRef();
    const imgRef = useRef();
    const ratingRef = useRef();
    const descriptionRef = useRef();
    


    const handleUser = e => {
        const name = nameRef.current.value;
        const img = imgRef.current.value;
        const description = descriptionRef.current.value;
        const rating = ratingRef.current.value;


        const newUser = { name, img, rating, description };

        fetch('/api/blogs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {

                    swal("Good job!", "Feedback Successfully!", "success");
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
    <div             
    style={{
       width: "50%",
       margin: "50px auto",
       }}>  
        <div style={{fontSize: "20px", color: "red" }}>Add Reviews</div>       
        <form 
            onSubmit={handleUser}
            name="from_item_path"
            layout="vertical"
        >
            <input  {...register("name")} type="text" placeholder="Name" ref={nameRef} style={{marginBottom: "10px",  width: "100%", height: "5vh"}}/>
            <input {...register("image_url")} type="img" placeholder="image url" ref={imgRef}  style={{marginBottom: "10px",  width: "100%", height: "5vh"}}/>
            <textarea {...register("description")} placeholder="description" ref={descriptionRef} style={{marginBottom: "10px",  width: "100%", height: "5vh"}}/>
            <input {...register("rating")} type="number" placeholder="Rating Number" ref={ratingRef} style={{marginBottom: "10px",  width: "100%", height: "5vh"}}/>
            <input type="submit" value="Submit" style={{marginBottom: "10px",  width: "100%", height: "5vh"}}/>
        </form>
        </div>
             
    );
};

export default AddReviews;   


           
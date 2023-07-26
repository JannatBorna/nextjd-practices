import { useForm } from "react-hook-form"
import Head from "next/head";
import styles from "@/styles/Login.module.css";
import RootLayout from "@/components/Layouts/RootLayout";
import { GithubOutlined, GoogleOutlined } from "@ant-design/icons";


const LoginPage = () => {


// react hook form
const { register, handleSubmit } = useForm()
const onSubmit = (data) => {
  createUserWithEmailAndPassword(data.email, data.password) // firebase hook
};

  return (
    <div>
      <Head>
        <title>Next Login</title>
      </Head>
      <div className={styles.form}>
        <h3>LOGIN</h3>
        <div className={styles.social_icons}>
         {/* google signin */}
          <GoogleOutlined />

          {/* github signin */}
          <GithubOutlined />   
        </div>
        
        <hr />

        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("email", { required: true })} type="email" placeholder="Email" style={{ marginBottom: "10px"}}/>
          <input {...register("password", { required: true })} type="password" placeholder="Password"/>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page){
    return(
        <RootLayout > 
          {page}
        </RootLayout>
    )
}
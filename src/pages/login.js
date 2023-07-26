import { useForm } from "react-hook-form"
import Head from "next/head";
import styles from "@/styles/Login.module.css";
import RootLayout from "@/components/Layouts/RootLayout";
import { GithubOutlined, GoogleOutlined } from "@ant-design/icons";
import { signIn } from "next-auth/react";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "@/firebase/firebase.auth";
import { useEffect } from "react";
import { useRouter } from "next/router";



const LoginPage = () => {

  // firebase hooks
  const [
  createUserWithEmailAndPassword,
  user,
  loading,
  error] = useCreateUserWithEmailAndPassword(auth);
  console.log(user)

// react hook form
const { register, handleSubmit } = useForm()
const onSubmit = (data) => {
  createUserWithEmailAndPassword(data.email, data.password) // firebase hook
};

// const useUser = () => ({ user: null, loading: false })
  const router = useRouter()
 
//   useEffect(() => {
    // if (!(user || email)) {
    //   router.push('/')
    // }
//   }, [user, loading])


  return (
    <div>
      <Head>
        <title>blog portal Login</title>
      </Head>
      <div className={styles.form}>
        <h3>LOGIN</h3>
        <div className={styles.social_icons}>
         {/* google signin */}
          <GoogleOutlined
            onClick={() => signIn("google", {
            callbackUrl: "http://localhost:3000/"
            })
          }
          />

          {/* github signin */}
          <GithubOutlined 
          onClick={() => signIn("github", {
          callbackUrl: "http://localhost:3000/"
          })
        }
          />   
        </div>

        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">Your Email</label>
          <input
          {...register("email", { required: true })}
          type="email" />
          <label htmlFor="">Your Password</label>
          <input 
          {...register("password", { required: true })}
          type="password" />
          <button type="submit" onClick={() => router.replace('/')}>Login</button>
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
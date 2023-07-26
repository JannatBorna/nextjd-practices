import { getAuth } from "firebase/auth";
import app from "@/firebase/firebase.config";

const auth = getAuth(app);

export default auth;
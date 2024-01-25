import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBeDeTlttfdYiU5ufCN52GpIpCkaPXWBag",
  authDomain: "bistro-boss-restaurant-c753c.firebaseapp.com",
  projectId: "bistro-boss-restaurant-c753c",
  storageBucket: "bistro-boss-restaurant-c753c.appspot.com",
  messagingSenderId: "752638485303",
  appId: "1:752638485303:web:9bd356269cdf33d95d30b2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

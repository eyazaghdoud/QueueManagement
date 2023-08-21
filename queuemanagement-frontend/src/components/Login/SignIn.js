
import LoginHead from "./LoginHead"
import LoginNav from "./LoginNav"
import classes from "./LoginForm.module.scss";
import { useNavigate } from "react-router-dom";
export default function SignIn() {

    let navigate = useNavigate();
    const submitHandler = (event) => {
        event.preventDefault();
        navigate('/Menu');
       
      };

      const signUpHandler = (event) => {
        event.preventDefault();
        navigate('/SignUp');
       
      };
      const resetPwdHandler = (event) => {
        event.preventDefault();
        navigate('/Reset_password');
       
      };
    return (
        <>
            <LoginNav />

            <div class="flex items-center min-h-screen bg-white dark:bg-gray-900" style={{ marginTop: '-8%', marginBottom:'0' }}>
                <div class="container mx-auto">
                    <div class="max-w-md mx-auto my-10">
                        <div class="text-center">
                            <LoginHead title='Login' desc='Veuillez saisir votre e-mail et mot de passe'/>
                        </div>
                        <div class="m-7">
                            <form action="post" onSubmit={submitHandler}>
                                <div class="mb-6">
                                    <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">E-mail</label>
                                    <input type="email" name="email" id="email" placeholder="you@company.com" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                </div>
                                <div class="mb-6">
                                    <div class="flex justify-between mb-2">
                                        <label for="password" class="text-sm text-gray-600 dark:text-gray-400">Mot de passe</label>
                                        <a href="#!" onClick={resetPwdHandler}
                                        class="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300">
                                            Mot de passe oublié?
                                            </a>
                                    </div>
                                    <input type="password" name="password" id="password" 
                                    placeholder="Your Password" 
                                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                </div>
                                <div class="mb-6">
                                    <button type="submit" 
                                     className={classes.loginBtn}
                                     class="w-full py-3 font-medium text-white bg-blue-950 hover:bg-yellow-300 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                                        Connexion
                                    </button>
                                </div>
                                <p class="text-sm text-center text-gray-400">Don&#x27;t have an account yet? 
                                <a href="#!"  onClick={signUpHandler}
                                class="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800">
                                    Sign up</a>.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )

}
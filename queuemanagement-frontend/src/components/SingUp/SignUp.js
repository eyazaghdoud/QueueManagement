
import LoginHead from "../Login/LoginHead"
import LoginNav from "../Login/LoginNav"
import classes from "../Login/LoginForm.module.scss";
export default function SignUp() {
    const submitHandler = (event) => {
        event.preventDefault();
       
       
      };
   
    return (
        <>
            <LoginNav />

            <div class="flex items-center min-h-screen bg-white dark:bg-gray-900" style={{marginTop:'-5%'}}>
                <div class="container mx-auto">
                    <div class="max-w-md mx-auto my-10">
                        <div class="text-center">
                            <LoginHead title='Créer votre compte' desc='Veuillez remplir ces champs'/>
                        </div>
                        <div class="m-7">
                            <form action="post" onSubmit={submitHandler}>
                               <div class="mb-6">
                                    <label for="lastname" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Nom</label>
                                    <input type="text" 
                                    name="lastname" 
                                    id="lastname" placeholder="Nom" 
                                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                </div>
                                <div class="mb-6">
                                    <label for="firstname" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Prénom</label>
                                    <input type="text" 
                                    name="firstname" 
                                    id="firstname" placeholder="prenom" 
                                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                </div>
                                <div class="mb-6">
                                    <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">E-mail</label>
                                    <input type="email" name="email" id="email" placeholder="you@company.com" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                </div>
                                <div class="mb-6">
                                    <label for="tel" 
                                    class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Numéro de téléphone</label>
                                    <input type="text" 
                                    name="tel" id="tel" placeholder="you@company.com" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                </div>
                                <div class="mb-6">
                                    <div class="flex justify-between mb-2">
                                        <label for="password" class="text-sm text-gray-600 dark:text-gray-400">Mot de passe</label>
                                    </div>
                                    <input type="password" name="password" id="password" 
                                    placeholder="Your Password" 
                                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                </div>
                                <div class="mb-6">
                                    <button type="submit" 
                                     className={classes.loginBtn}>
                                        Créer mon compte
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )

}
import Nav from "../Nav/Navbar";

export default function ChangePassword() {
    return (
        <>
        <Nav/>

    <div class="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
       <div class="text-center">
        <h1 class="text-3xl font-medium">Changer votre mot de passe</h1>
       </div>
        <form action="" class="my-10">
            <div class="flex flex-col space-y-5">
                <label for="oldPwd">
                    <p class="font-medium text-slate-700 pb-2">Ancien mot de passe</p>
                    <input id="oldPwd" 
                    name="oldPwd" type="password" 
                    class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" 
                    placeholder="***********"/>
                </label>
                <label for="newPwd">
                    <p class="font-medium text-slate-700 pb-2">Nouveau mot de passe</p>
                    <input id="newPwd" 
                    name="newPwd" type="password" 
                    class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" 
                    placeholder="***********"/>
                </label>
                <label for="newPwdConfirm">
                    <p class="font-medium text-slate-700 pb-2">Confirmation du nouveau mot de passe</p>
                    <input id="newPwdConfirm" 
                    name="newPwdConfirm" type="password" 
                    class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" 
                    placeholder="***********"/>
                </label>
                
               
                <button 
                type="submit"
                class="w-full py-3 font-medium text-white bg-blue-950 hover:bg-yellow-300 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                      
                      <span>Confirmer</span>
                </button>
                
            </div>
        </form>
    </div>
    

</>
    );
}
import Nav from "../Nav/Navbar"

export default function Account() {
    return (
        <div>
            <Nav />
            <form class="h-full" style={{ marginTop: '7%' }}>

                <div class="border-b-2 block md:flex">
                   
                        <div class="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
                            <div class="flex justify-between">
                                <span class="text-xl font-semibold block">Nom et prénom</span>
                                <a href="#" class="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">Edit</a>
                            </div>

                            <span class="text-gray-600">Informations de connexion</span>

                            <div class="w-full p-8 mx-2 flex justify-center">
                            </div>

                            <div class="pb-6">
                                <label for="name" class="font-semibold text-gray-700 block pb-1">E-mail</label>
                                <div class="flex">
                                    <input  id="email" class="border-1  rounded-r px-4 py-2 w-full" type="email" value="example@example.com" />
                                </div>
                            </div>
                            <div class="pb-6">
                                <label for="name" class="font-semibold text-gray-700 block pb-1">Mot de passe</label>
                                <div class="flex">
                                    <input disabled id="pwd" class="border-1  rounded-r px-4 py-2 w-full" type="password" value="**********" />
                                </div>
                                <a href="#" class="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">Changer le mot de passe</a>

                            </div>
                        </div>

                        <div class="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
                            <div class="rounded  shadow p-6">
                                <div class="pb-6">
                                    <label for="name" class="font-semibold text-gray-700 block pb-1">Nom</label>
                                    <div class="flex">
                                        <input id="lastname" class="border-1  rounded-r px-4 py-2 w-full" type="text" value="Nom" />
                                    </div>
                                </div>
                                <div class="pb-6">
                                    <label for="name" class="font-semibold text-gray-700 block pb-1">Prénom</label>
                                    <div class="flex">
                                        <input id="firstname" class="border-1  rounded-r px-4 py-2 w-full" type="text" value="Prénom" />
                                    </div>
                                </div>

                                <div class="pb-4">
                                    <label for="about" class="font-semibold text-gray-700 block pb-1">Numéro de téléphone</label>
                                    <input id="tel" class="border-1  rounded-r px-4 py-2 w-full" type="text" value="Numero" />

                                    <span class="text-gray-600 pt-4 block opacity-70">Personal login information of your account</span>
                                </div>

                            </div>

                        </div>
                   
                </div>
           
        </form>
        </div >
    )
}
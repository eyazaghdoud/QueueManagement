import Nav from "../Nav/Navbar";
import './queue.css';
import CurrentTicket from "./CurrentTicket";

export default function Queue() {
    const numberOfItems = 5;
    return (
        <>
            <Nav />
            <CurrentTicket/>
            <div class="flex flex-col bg-white ">
                <h1
                    class="flex py-5 lg:px-20   font-bold text-2xl text-gray-800"
                >
                    File d'attente
                </h1>
                <div
                    class="flex overflow-x-scroll pb-7 hide-scroll-bar"
                >
                    <div
                        class="flex flex-nowrap ml-10 "
                    >
                        {Array.from({ length: numberOfItems }, (_, index) => (
     
                        <div class="inline-block px-3">
                            <div
                                class="w-64 h-64 max-w-xs  overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                                style={{height:'150px'}}
                            >
                                <div style={{padding:'50px'}}>
                               <p key={index}>Ticket {index + 1}</p>
                               <p key={index}>Nom et prénom </p>
                               </div>

                            </div>
                        </div>
                         ))}
                    </div>
                </div>
            </div>
           

        </>
    );
}

import logo from '../../assets/agil.gif';
export default function LoginNav() {
    return (
        <>
<nav className="border-gray-200 mb-10 mt-10" >
    <div className="w-full mx-auto">
        <div className="mx-2 flex flex-wrap items-center justify-between">
            <a href="#" className="flex">
               {/* <svg className="h-10 mr-3" width="51" height="70" viewBox="0 0 51 70" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                        <path d="M1 53H27.9022C40.6587 53 51 42.7025 51 30H24.0978C11.3412 30 1 40.2975 1 53Z"
                            fill="#76A9FA"></path>
                        <path
                            d="M-0.876544 32.1644L-0.876544 66.411C11.9849 66.411 22.4111 55.9847 22.4111 43.1233L22.4111 8.87674C10.1196 8.98051 0.518714 19.5571 -0.876544 32.1644Z"
                            fill="#A4CAFE"></path>
                        <path d="M50 5H23.0978C10.3413 5 0 15.2975 0 28H26.9022C39.6588 28 50 17.7025 50 5Z"
                            fill="#1C64F2"></path>
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="51" height="70" fill="white"></rect>
                        </clipPath>
                    </defs>
                </svg>
    */}    <img className="h-10 mr-3" width="51" height="70" viewBox="0 0 51 70" fill="none"
    src={logo}/>
                <span className="self-center text-lg font-semibold whitespace-nowrap">Agil-Rendez-vous et file d'attente</span>
            </a>
            
          
            
        </div>
    </div>
</nav>

<script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></script>
</>
    )
};
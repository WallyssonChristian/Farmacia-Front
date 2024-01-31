import { Basket } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
            <div className='w-full bg-gray-900 text-white grid grid-cols-3 p-5'>

                    <div className='grid items-center place-items-start'>
                        <Link to='/home' className="text-2xl font-bold hover:text-green-300 place-items-start">Z-Drugs</Link>
                    </div>
                    
                    <div>
                        <form>
                            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"></label>
                            <div className="relative">
                                
                                {/* Icone Lupa Pesquisa */}
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"> 
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>

                                <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Remedios, Terapia e muito mais..." required />
                                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Search</button>
                            </div>
                        </form>
                    </div>

                    <div className='flex place-content-end gap-6 items-center'>
                        <Link to='/categorias' className="hover:text-green-300 font-bold">Categorias</Link>
                        <Link to='/cadastroCategoria' className="hover:text-green-300 font-bold">Cadastrar Categoria</Link>
                        <Link to='' className="hover:text-green-300 font-bold"><Basket size={32} /></Link>
                            
                    </div>

            </div>
        </>
  )
}

export default Navbar
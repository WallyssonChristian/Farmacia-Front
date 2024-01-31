import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react"


function Footer() {

    let data = new Date().getFullYear()
    return (
        <>
            <div id='Atendimento' className='grid grid-cols-4 bg-gray-900 text-white justify-between items-center p-5 w-full place-items-center'>

                <div>
                    <div className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 16 16">
                            <path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12Z" stroke="#FFF" stroke-miterlimit="10"></path><path d="M8 4.5V8h3.5" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <h1 className='uppercase px-3 font-bold text-xl'>Atendimento</h1>
                    </div>
                    <p>25hrs por dia, tudo pela sua saúde</p>
                </div>

                <div>
                    <div className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32">
                            <path d="M28 22.162V9.837a1.014 1.014 0 0 0-.512-.875l-11-6.186a.973.973 0 0 0-.976 0l-11 6.186A1.013 1.013 0 0 0 4 9.837v12.325a1.014 1.014 0 0 0 .512.875l11 6.187a.977.977 0 0 0 .976 0l11-6.187a1.013 1.013 0 0 0 .512-.875z" stroke="#798281" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22.125 19.063v-6.5L10 5.875M27.863 9.325 16.113 16m0 0L4.136 9.325M16.112 16 16 29.35" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <h1 className='uppercase px-3 font-bold text-xl'>Trocas e Devoluções</h1>
                    </div>
                    <p>O que não te mata te cura</p>

                </div>

                <div>
                    <div className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32">
                            <path d="M26.74 8.984a1.872 1.872 0 0 0-1.515-.779h-4.602V5.47a1.834 1.834 0 0 0-.143-.702 1.79 1.79 0 0 0-.4-.587 1.865 1.865 0 0 0-1.307-.535H3.983c-.49 0-.96.194-1.308.535a1.79 1.79 0 0 0-.4.588c-.093.222-.141.46-.142.702v18.692H5.2a3.856 3.856 0 0 0 1.344 2.286c.708.585 1.6.905 2.522.905.923 0 1.813-.32 2.52-.903a3.884 3.884 0 0 0 1.347-2.288h6.132c.164.893.64 1.705 1.346 2.286.708.585 1.6.905 2.523.905.92 0 1.812-.32 2.518-.903a3.866 3.866 0 0 0 1.346-2.288h3.068V13.82c0-.282-.088-.557-.252-.784l-2.874-4.052zM3.982 5.471h14.792V15.5H3.983L3.981 5.471zm5.086 20.06a2.1 2.1 0 0 1-1.155-.347 2.057 2.057 0 0 1-.767-.92 2.026 2.026 0 0 1 .45-2.237c.295-.289.665-.484 1.066-.561a2.12 2.12 0 0 1 1.2.116c.38.155.707.418.934.755.23.34.352.737.352 1.142 0 .542-.22 1.065-.61 1.449-.391.385-.918.6-1.47.6v.002zm13.866 0c-.41 0-.81-.12-1.156-.347a2.06 2.06 0 0 1-.766-.92 2.024 2.024 0 0 1 .452-2.237c.294-.289.665-.484 1.065-.561.403-.078.82-.04 1.2.116a2.049 2.049 0 0 1 1.284 1.897c0 .542-.22 1.065-.61 1.449-.389.385-.918.6-1.467.6l-.002.002zm5.084-3.194h-1.329a3.879 3.879 0 0 0-1.421-1.976 3.966 3.966 0 0 0-4.668 0 3.888 3.888 0 0 0-1.422 1.976h-6.354a3.877 3.877 0 0 0-1.422-1.976 3.966 3.966 0 0 0-4.668 0 3.866 3.866 0 0 0-1.421 1.976H3.983v-5.014h24.034v5.014zm0-6.837h-7.394v-5.472h4.6l2.792 3.936.002 1.536z" fill="#FFF"></path>
                        </svg>
                        <h1 className='uppercase px-3 font-bold text-xl'>Frete</h1>
                    </div>
                    <p>Enviamos para todo o Brasil!</p>

                </div>

                <div className=''>
                    <div className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32">
                            <path d="M28 7H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1ZM21 21h4M15 21h2M3 12.112h26" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <h1 className='uppercase px-3 font-bold text-xl'>Parcelamento</h1>
                    </div>
                    <p>Em até 360x com muito juros</p>
                </div>
            </div>

            <div className="flex justify-center bg-gray-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                        Z-Drugs | Wallysson Araujo | Copyright: {data}
                    </p>
                    <p className='text-lg'>Acesse minhas redes sociais</p>
                    <div className='flex gap-2'>
                        <a href="https://github.com/WallyssonChristian/" className="hover:text-green-300 font-bold" target="_blank">
                            <GithubLogo size={48} weight='bold' />
                        </a>
                        <a href="https://www.linkedin.com/in/wallysson-araujo/" className="hover:text-green-300 font-bold" target="_blank">
                            <LinkedinLogo size={48} weight='bold' />
                        </a>
                        <a href="https://www.instagram.com/w_christian7/" className="hover:text-green-300 font-bold" target="_blank">
                            <InstagramLogo size={48} weight='bold' />
                        </a>
                        <a href="https://httpstatusdogs.com/img/404.jpg" className="hover:text-green-300 font-bold" target="_blank">
                            <FacebookLogo size={48} weight='bold' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
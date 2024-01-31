function Home() {
    return (
        <>
            {/* Background */}
            < div id="container" className='flex justify-center bg-emerald-300' >

                {/* Container */}
                < div id="subcontainer" className=' grid grid-cols-2 container' >

                    {/* Grid Left Side */}
                    < div id="texto" className='flex flex-col gap-4 items-center justify-center py-4' >

                        <h2 className="text-4xl font-bold">Seja Bem Vindo!</h2>
                        <p className="text-xl">Encontre o que você precisa para sua saúde!</p>

                        <div className="flex justify-around gap-4">
                            <div className="rounded text-white border-white border-solid border-2 px-4 py-2">
                                Ver Produtos
                            </div>
                        </div>
                    </div >

                    {/* Grid Right Side */}
                    < div id="imagem" className="flex justify-center" >
                        <img src='https://ik.imagekit.io/Zabo/Z-Drug/Medicine-bro.png?updatedAt=1706704412052' alt="Imagem da página home" className="w-2/3"></img>
                    </div >
                </div >



            </div >
        </>
    )
}

export default Home
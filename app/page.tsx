import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      {/* Primer texto */}
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Construción sistema Inventario&nbsp;
          <code className="font-mono font-bold"> audiovisual </code>
        </p>
      </div>




      {/* texto Central */}
      <div className="flex items-center space-x-2">
        <div className="bg-gray-500 w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl font-mono font-bold">
          I
        </div>
        <span className="text-3xl font-mono font-semibold text-gray-500">
          nventario
        </span>
        <div>
          <span className="text-base items-center justify-center font-mono font-semibold text-gray-500">
            A/V
          </span>
        </div>
      </div>



      <div className="mb-32 ml-30  grid text-center  lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://tavoludra1.github.io/docinven/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Encontrar la información del proyecto.
          </p>
        </a>

        <a
          href="https://github.com/tavoludra1/docinven"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Github{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Repositorio del sistema de inventario.
          </p>
        </a>

        <a
          href="https://telecafe.gov.co/inicio"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Telecafé{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Web de la empresa Telecafé.
          </p>
        </a>
        <a
          href="https://tavoludra1.github.io/docinven/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Ingresar{' '}

            <span className=" inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
              </svg>
            </span>

          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Ingresar al proyecto.
          </p>
        </a>


      </div>
    </main>
  )
}

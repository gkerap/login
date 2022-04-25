import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    
      <div className="lg:flex">
      <div className="hidden lg:flex items-center justify-center bg-[#385DC5] flex-1 h-screen">
                <div className="w-full h-full  text-xl bg-cover bg-center bg-no-repeat bg-[url('/Splash.png')]">
                    
                </div>
            </div>
            <div className="lg:w-1/2 xl:max-w-screen-sm">
                
                <div className="mt-2 py-6 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-6 xl:px-24 xl:max-w-2xl">
                    <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold">Sign in</h2>
                    <p className=" mt-4 text-indigo-400">Please kindly sign in with your email and password</p>
                    <div className="mt-12">
                        <form>
                            <div>
                                <div className="text-sm font-bold text-gray-700 tracking-wide">Email Address</div>
                                <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="" placeholder="george@gmail.com"/>
                            </div>
                            <div className="mt-8">
                                <div className="flex justify-between items-center">
                                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                                        Password
                                    </div>
                                    <div>
                                        <a className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                                        cursor-pointer">
                                            Forgot Password?
                                        </a>
                                    </div>
                                </div>
                                <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="" placeholder="Enter your password"/>
                            </div>
                            <div className="mt-10">
                                <button className="bg-indigo-500 text-gray-100 p-4 w-full rounded tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                shadow-lg">
                                    Log In
                                </button>
                            </div>
                        </form>
                        <div className='flex justify-around mt-6'>
                        <button type="button" className="py-2.5 px-8 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded border border-[#385DC5] hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700  dark:text-gray-400 dark:border-blue-600 dark:hover:text-blue-500 ">Continue with Google</button>
                        <button type="button" className="py-2.5 px-8 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded border border-[#385DC5] hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700  dark:text-gray-400 dark:border-blue-600 dark:hover:text-blue-500 ">Continue with Microsoft</button>

                        </div>
                        <div className="mt-8 text-sm font-display font-semibold text-gray-700 text-center">
                            Dont have an account ? <a className="cursor-pointer text-indigo-600 hover:text-indigo-800">Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
  

      {/* <footer classNameName={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span classNameName={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
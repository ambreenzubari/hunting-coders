import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "NEXT JS PAGE",
  description: "My Page Description",
  icons: {
    icon: "vercel.svg",
  },
};

export default function Home(props:any) {
  return (
    <div>

      <Head>
        <title>Hunting Coder</title>
        <meta
          name="description"
          content="Hunting Coder - A blog for hunting coders by a hunting coder"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
        <div>
          <div className="text-center mb-12 flex items-center flex-col">
            <h1 className="text-5xl text-black font-bold">Hunting Coder</h1>
            <Image src={"/coder.jpg"} alt=""  width={237} height={158} className="rounded-xl	my-4"/>

            <p className="text-xl text-gray-700">
              A blog for hunting coders by a hunting coder
            </p>
         
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
            <p className="text-3xl font-semibold mb-6">Popular Blogs</p>
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold">
                  How to learn JavaScript in 2022?
                </h2>
                <p className="text-gray-600">
                  JavaScript is a language used to design logic for the web.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold">
                  How to learn JavaScript in 2022?
                </h2>
                <p className="text-gray-600">
                  JavaScript is a language used to design logic for the web.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold">
                  How to learn JavaScript in 2022?
                </h2>
                <p className="text-gray-600">
                  JavaScript is a language used to design logic for the web.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold">
                  How to learn JavaScript in 2022?
                </h2>
                <p className="text-gray-600">
                  JavaScript is a language used to design logic for the web.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold">
                  How to learn JavaScript in 2022?
                </h2>
                <p className="text-gray-600">
                  JavaScript is a language used to design logic for the web.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold">
                  How to learn JavaScript in 2022?
                </h2>
                <p className="text-gray-600">
                  JavaScript is a language used to design logic for the web.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold">
                  How to learn JavaScript in 2022?
                </h2>
                <p className="text-gray-600">
                  JavaScript is a language used to design logic for the web.
                  JavaScript is a language used to design logic for the web.
                  JavaScript is a language used to design logic for the web.
                  JavaScript is a language used to design logic for the web.
                  JavaScript is a language used to design logic for the web.
                  JavaScript is a language used to design logic for the web.
                  JavaScript is a language used to design logic for the web.
                  JavaScript is a language used to design logic for the web.
                  JavaScript is a language used to design logic for the web.
                  JavaScript is a language used to design logic for the web.
                  JavaScript is a language used to design logic for the web.
                  JavaScript is a language used to design logic for the web.
                  JavaScript is a language used to design logic for the web.
                  JavaScript is a language used to design logic for the web.
                  JavaScript is a language used to design logic for the web.
                  JavaScript is a language used to design logic for the web.
                  JavaScript is a language used to design logic for the web.
                  JavaScript is a language used to design logic for the web.
                  JavaScript is a language used to design logic for the web.
                  JavaScript is a language used to design logic for the web.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );



  
}



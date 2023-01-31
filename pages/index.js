import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import data from "../data.json";

const inter = Inter({ subsets: ["latin"] });

function LinkCard({ url, title, image }) {
  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='flex items-center p-1 w-full rounded-md hover:scale-105 transition-all bg-gray-100 mb-3 max-w-3xl border-4 border-gray-900'
    >
      <div className='flex text-center w-full'>
        <div className='w-10 h-10'>
          {
            <Image
              className='rounded-sm'
              alt={title}
              src={image}
              width={40}
              height={40}
            />
          }
        </div>
        <h2 className='flex justify-center items-center font-mono w-full text-neutral-800 -ml-10 '>
          {title}
        </h2>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>sagnik.links</title>
        <meta name='description' content='' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className=' h-screen flex flex-col'>
        <div className='flex flex-wrap justify-center mt-16'>
          <div className='flex flex-col items-center w-6/12 sm:w-4/12 px-4'>
            <Image
              src={data.avatar}
              alt={data.name}
              width={100}
              height={100}
              className='rounded-full max-w-full h-auto align-middle border-4 border-gray-900 hover:scale-110'
            />
            <h1 className=' justify-center font-bold text-2xl mt-2'>
              {data.name}
            </h1>
          </div>
          <div className='p-4 w-full ml-12 mr-12 mb-8 text-xl'>
            {data.links.map((link) => (
              <LinkCard key={link.href} {...link} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

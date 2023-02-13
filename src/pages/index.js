import Head from 'next/head'
import Layout from "@/components/layout";


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>CodeSwallow</title>
      </Head>
      <section>
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
              <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                  Home
              </h1>
              <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                  Coming soon...
              </p>
          </div>
      </section>
    </Layout>
  )
}

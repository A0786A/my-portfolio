import Head from 'next/head'
import Layout from '@/components/layout/Layout'
import HobbiesGrid from '@/components/hobbies/HobbiesGrid'

export default function Hobbies({ theme, toggleTheme }) {
  return (
    <Layout theme={theme} toggleTheme={toggleTheme}>
      <Head>
        <title>Hobbies - Ali Alam</title>
        <meta name="description" content="Learn about Ali Alam's hobbies and interests outside of professional work." />
      </Head>
      <section id="hobbies" className="py-16 md:py-24 page-transition">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Hobbies</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Beyond coding and AI, here are some activities that keep me inspired and balanced.
            </p>
          </div>
          <HobbiesGrid />
        </div>
      </section>
    </Layout>
  )
}
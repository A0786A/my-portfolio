import Head from 'next/head'
import Layout from '@/components/layout/Layout'
import ProjectGrid from '@/components/projects/ProjectGrid'

export default function Projects({ theme, toggleTheme }) {
  return (
    <Layout theme={theme} toggleTheme={toggleTheme}>
      <Head>
        <title>Projects - Ali Alam</title>
        <meta name="description" content="Explore Ali Alam's AI and machine learning projects." />
      </Head>
      <section id="projects" className="py-16 md:py-24 page-transition">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here's a selection of my recent work in artificial intelligence, machine learning, and web development.
            </p>
          </div>
          <ProjectGrid />
        </div>
      </section>
    </Layout>
  )
}
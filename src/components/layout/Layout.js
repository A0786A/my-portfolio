import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({ children, theme, toggleTheme }) {
  return (
    <div className={`min-h-screen flex flex-col ${theme === "dark" ? "dark" : ""}`}>
      <Head>
        <title>Ali Alam | AI Developer & ML Engineer</title>
        <meta name="description" content="Personal portfolio of Ali Alam, an AI Developer and Machine Learning Engineer specializing in building intelligent applications and solutions." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8B5CF6" />
        <meta property="og:title" content="Ali Alam | AI Developer & ML Engineer" />
        <meta property="og:description" content="Personal portfolio of Ali Alam, an AI Developer and Machine Learning Engineer specializing in building intelligent applications and solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alialam.dev" />
        <meta property="og:image" content="https://alialam.dev/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ali Alam | AI Developer & ML Engineer" />
        <meta name="twitter:description" content="Personal portfolio of Ali Alam, an AI Developer and Machine Learning Engineer specializing in building intelligent applications and solutions." />
        <meta name="twitter:image" content="https://alialam.dev/og-image.jpg" />
        <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet" />
      </Head>
      
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
import { Helmet } from 'react-helmet';

const HelmetTag = () => {

    return (
        <>
        <Helmet>
        {/* Basic Info */}
        <title>Mark Valles | Fullstack Developer Portfolio</title>
        <link rel="icon" href="/idea.png" type="image/png" />
        <meta name="description" content="The personal portfolio of Mark Valles, a Fullstack Developer skilled in React, Vite, and modern web technologies." />
        <meta name="author" content="Mark Valles" />
        <meta name="keywords" content="Mark Valles, Fullstack Developer, React Developer, Vite, Web Developer, Portfolio" />

        {/* Viewport and Charset */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Social Media (Open Graph for Facebook, LinkedIn) */}
        <meta property="og:title" content="Mark Valles | Fullstack Developer Portfolio" />
        <meta property="og:description" content="Explore projects and experience of Mark Valles, a skilled fullstack developer." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cabael.github.io/markvalles.github.io" />
        <meta property="og:image" content="https://cabael.github.io/markvalles.github.io/img/me.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mark Valles | Fullstack Developer Portfolio" />
        <meta name="twitter:description" content="Browse the work and expertise of Mark Valles in fullstack development." />
        <meta name="twitter:image" content="https://cabael.github.io/markvalles.github.io/img/me.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
        </>
    )
    
}

export default HelmetTag
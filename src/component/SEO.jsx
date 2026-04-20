import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords, url }) => {
  const siteName = "Enactus FUTO";
  const defaultDesc = "Enactus FUTO is a student-led entrepreneurial organization at Federal University of Technology Owerri, creating social impact through innovative projects.";
  const defaultKeywords = "Enactus FUTO, Enactus Nigeria, FUTO student organization, entrepreneurship FUTO, social impact Owerri, Enactus Federal University Technology Owerri, FUTO, Federal University of Technology Owerri, FUTO clubs, FUTO organizations, FUTO students, FUTO social entrepreneurship, FUTO innovation, FUTO sustainability, FUTO community development, FUTO student leaders, FUTO projects, Enactus Nigeria, Enactus clubs Nigeria ";

  return (
    <Helmet>
      {/* Basic */}
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description || defaultDesc} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="author" content="Enactus FUTO" />

      {/* Open Graph (WhatsApp, Facebook previews) */}
      <meta property="og:title" content={title || siteName} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || "https://enactusfuto.org"} />
      <meta property="og:image" content="https://enactusfuto.org/og-image.jpg" />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || siteName} />
      <meta name="twitter:description" content={description || defaultDesc} />
      <meta name="twitter:image" content="https://enactusfuto.org/og-image.jpg" />

      {/* Canonical */}
      <link rel="canonical" href={url || "https://enactusfuto.org"} />
    </Helmet>
  );
};

export default SEO;
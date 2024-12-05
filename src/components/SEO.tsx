import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  type?: string;
  image?: string;
  article?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
  jsonLd?: any;
}

export const SEO = ({
  title,
  description,
  type = 'website',
  image = '/zein-alamah.webp',
  article = false,
  publishedTime,
  modifiedTime,
  tags,
  jsonLd
}: SEOProps) => {
  const siteUrl = window.location.origin;
  const url = window.location.href;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:site_name" content="Zein Alamah" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Article Specific */}
      {article && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {article && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {article && tags && tags.map((tag) => (
        <meta property="article:tag" content={tag} key={tag} />
      ))}

      {/* JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};
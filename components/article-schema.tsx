type ArticleSchemaProps = {
  title: string
  description: string
  url: string
}

export function ArticleSchema({ title, description, url }: ArticleSchemaProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    publisher: {
      "@type": "Organization",
      name: "Rootit",
      url: "https://rootit.fi",
    },
    inLanguage: "fi-FI",
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

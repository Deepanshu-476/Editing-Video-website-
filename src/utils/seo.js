// src/utils/seo.js
export const updateMetaTags = ({ title, description, keywords }) => {
  document.title = `${title} | EditFlow`
  
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', description)
  }
  
  const metaKeywords = document.querySelector('meta[name="keywords"]')
  if (metaKeywords) {
    metaKeywords.setAttribute('content', keywords)
  }
}
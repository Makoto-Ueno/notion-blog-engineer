export const GTM_ID = "GTM-5B6RMF7"

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}
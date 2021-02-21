let apiUrl
const apiUrls = {
  production: 'https://api.fda.gov/drug/event.json?limit=1000',
  development: 'https://api.fda.gov/drug/event.json?limit=1000'

}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl

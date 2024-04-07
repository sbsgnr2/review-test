export function extractGeoData(data: string) {
  const postalCodeRegex = /<span class="postal-code">(.*?)<\/span>/
  const localityRegex = /<span class="locality">(.*?)<\/span>/
  const regionRegex = /<span class="region">(.*?)<\/span>/
  const countryRegex = /<span class="country-name">(.*?)<\/span>/

  const extractData = (regex: any, input: any) => {
    const match = regex.exec(input)
    return match ? match[1] : null
  }

  const postalCode = extractData(postalCodeRegex, data)
  const locality = extractData(localityRegex, data)
  const region = extractData(regionRegex, data)
  const country = extractData(countryRegex, data)

  return { postalCode, locality, region, country }
}

export function getPromoData() {
  return fetch('http://localhost:3333/promocodesdata')
    .then(data => data.json())
  }
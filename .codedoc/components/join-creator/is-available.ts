import Airtable from 'airtable';


const list = new Airtable({ apiKey: 'keyQGj55fyhHaDFwL' }).base('appiGf2nOevW1GDnA')('Prospective Creators');

export function isAvailable(domain: string) {
  return new Promise(resolve => {
    list.select({
      filterByFormula: `{domain name}='${domain.toLowerCase()}'`
    })
    .firstPage()
    .then(res => {
      if (res.length > 0) resolve(false);
      else resolve(true);
    })
    .catch(() => resolve(false));
  });
}

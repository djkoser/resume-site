import * as fs from 'fs';
import { GetServerSideProps } from 'next';

// Create a page component that returns nothing
const Sitemap = () => {
  return null;
};

/*Take advantage of the getServerSideProps function which gets called once we hit the URL endpoint savisquirrelnest.com/sitemap.xml, this only runs on the server, this function returns json which will be used to render the page */
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const BASE_URL = 'http://savisquirrelnest.com';

  const staticPaths = fs
    .readdirSync('pages')
    .filter((staticPage) => {
      // Exclude the following pre-built files from the sitemap (not necessary for crawlers to see these)
      return !['api', '_app.tsx', '_document.tsx', '404.tsx', 'sitemap.xml.tsx', 'checkout.tsx'].includes(staticPage);
    })
    // map the paths for the page components to the base url savisquirrelnest.com
    .map((staticPagePath) => {
      return `${BASE_URL}/${staticPagePath}`;
    });

  // Below is example code for generating dynamic paths -> product lists, posts, etc

  // example product = {
  //   id: 2123,
  //   name: "Fantastic Product",
  //   price: 12.4
  // }

  // const products = await getAllProducts(); // some remote API call maybe!

  // const dynamicPaths = products.map((singleProduct) => {
  //   return `${BASE_URL}/product/${singleProduct.id}`;
  // });
  // This will eventually utilize the concatenation between static and dynamic paths, not just static paths
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${staticPaths
    .map((url) => {
      return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
    })
    .join('')}</urlset>`;

  // Setting the header type on the response to indicate that what will be returned will be an XML file
  res.setHeader('Content-Type', 'text/xml');
  // Writes the sitemap to the response
  res.write(sitemap);
  // Ends the write stream
  res.end();
  // Return no props to be used by the sitemap component
  return {
    props: {}
  };
};

export default Sitemap;

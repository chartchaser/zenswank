import React from 'react';
import Product from '../Product';


interface ProductPageProps {
  params: {
    id: string;
  };
}

async function fetchProduct(id: string): Promise<ProductData> {
  const apiUrl = `https://deserving-passion-335e1b9ecb.strapiapp.com/api/curated-boxes/${id}?populate=Pictures`;

  const res = await fetch(apiUrl);

  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }

  const data: ProductResponse = await res.json();
  return data.data;
}

const ProductPage = async ({ params }: ProductPageProps) => {
    try {
      const product = await fetchProduct(params.id);
  
      // Select the first image to be displayed as the main image
      const mainImage = product.attributes.Pictures.data[0];
  
      return (
        <div className="container mx-auto p-6 max-w-6xl">
          <Product product={product} mainImage={mainImage} />
        </div>
      );
    } catch (error) {
      console.error('Error fetching product:', error);
      return <div>Failed to load product. Please try again later.</div>;
    }
  };
  
  export default ProductPage;

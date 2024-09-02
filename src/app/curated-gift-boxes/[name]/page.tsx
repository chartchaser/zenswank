import { notFound } from 'next/navigation';
import React from 'react';
import Product from '../Product';
import { Metadata } from 'next';

// Function to capitalize the first letter
function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// Function to fetch product by name
async function fetchProductByName(name: string) {
  const capitalizedName = capitalizeFirstLetter(name);
  const apiUrl = `https://deserving-passion-335e1b9ecb.strapiapp.com/api/curated-boxes?filters[Name][$eq]=${capitalizedName}&populate=Pictures`;

  try {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await res.json();
    if (data.data && Array.isArray(data.data) && data.data.length > 0) {
      return data.data[0]; // Return the first product in the array
    } else {
      return null; // No product found
    }
  } catch (error) {
    console.error('Failed to fetch product:', error);
    return null;
  }
}

// Define dynamic metadata
export async function generateMetadata({ params }: { params: { name: string } }): Promise<Metadata> {
  const product = await fetchProductByName(params.name);

  if (!product) {
    return {
      title: 'Product not found',
    };
  }

  return {
    title: `${product.attributes.Name}`,
  };
}

const ProductPage = async ({ params }: { params: { name: string } }) => {
  const product = await fetchProductByName(params.name);

  if (!product) {
    return notFound(); // Render the 404 page if no product is found
  }

  const mainImage = product.attributes.Pictures.data[0];

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <Product product={product} mainImage={mainImage} />
    </div>
  );
};

export default ProductPage;

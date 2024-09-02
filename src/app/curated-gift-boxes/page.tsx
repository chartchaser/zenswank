import React from 'react';
import ProductButton from './ProductButton';

interface Product {
  id: number;
  attributes: {
    Name: string;
    Price: number;
    Pictures: {
      data: Array<{
        attributes: {
          url: string;
        };
      }>;
    };
  };
}

async function fetchAllProducts(): Promise<Product[]> {
  const apiUrl = `https://deserving-passion-335e1b9ecb.strapiapp.com/api/curated-boxes?populate=Pictures`;

  try {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await res.json();
    return data.data || []; // Return the array of products
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
}

const ProductsPage = async () => {
  const products = await fetchAllProducts();

  return (
    <div className="container mx-auto p-6 max-w-6xl min-h-screen">
      <h1 className="text-xl font-semibold orange uppercase font-roboto-condensed">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded shadow">
            <ProductButton name={product.attributes.Name}>
              <img
                src={product.attributes.Pictures.data[0]?.attributes.url}
                alt={product.attributes.Name}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h2 className="text-xl font-semibold orange uppercase font-roboto-condensed">{product.attributes.Name}</h2>
              <p className="text-gray-700">${product.attributes.Price}</p>
            </ProductButton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

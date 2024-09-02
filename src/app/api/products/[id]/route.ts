import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  
  // Define the external API URL using the dynamic id
  const externalApiUrl = `https://deserving-passion-335e1b9ecb.strapiapp.com/api/curated-boxes/${id}?populate=Pictures`;

  try {
    // Fetch data from the external API
    const res = await fetch(externalApiUrl);

    if (!res.ok) {
      // If the external API responds with an error, return a 404 status
      return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }

    // Parse the response as JSON
    const product = await res.json();

    // Return the product data as JSON
    return NextResponse.json(product);
  } catch (error) {
    // Handle any network or other errors
    console.error('Error fetching product:', error);
    return NextResponse.json({ message: 'Error fetching product' }, { status: 500 });
  }
}

'use client';

import React, { useState } from 'react';

interface ProductProps {
    product: ProductData;
    mainImage: PictureData;
}

export default function Product({ product, mainImage }: ProductProps) {
    // State to manage the main image
    const [currentMainImage, setCurrentMainImage] = useState(mainImage);

    return (
        <div className="flex flex-col lg:flex-row gap-10 p-6 bg-white">
            {/* Product Name Section for Mobile */}
            <div className="block lg:hidden text-center mb-4">
                <h1 className="text-xl font-semibold orange uppercase font-roboto-condensed">{product.attributes.Name}</h1>
            </div>

            {/* Main Image Section */}
            <div className="flex-1">
                <div className="relative overflow-hidden group">
                    <img
                        src={currentMainImage.attributes.formats.large?.url || currentMainImage.attributes.url}
                        alt={currentMainImage.attributes.alternativeText || 'Product Image'}
                        className="w-full h-96 object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110 cursor-pointer"
                        onMouseEnter={(e) => e.currentTarget.classList.add('scale-110')}
                        onMouseLeave={(e) => e.currentTarget.classList.remove('scale-110')}
                    />
                </div>
                {/* Thumbnails */}
                <div className="flex flex-wrap mt-4 gap-2 justify-center lg:justify-start">
                    {product.attributes.Pictures.data.map((picture) => (
                        <img
                            key={picture.id}
                            src={picture.attributes.formats.thumbnail?.url || picture.attributes.url}
                            alt={`Thumbnail ${picture.id}`}
                            className="md:w-16 md:h-16 h-24 w-24 object-cover border-2 border-gray-300 cursor-pointer hover:border-gray-500"
                            onClick={() => setCurrentMainImage(picture)}
                        />
                    ))}
                </div>
            </div>

            {/* Product Details Section */}
            <div className="flex-1">
                {/* Product Name for Desktop */}
                <div className='flex justify-start'>
                    <div className="hidden lg:block mb-4">
                        <h1 className="text-2xl font-semibold orange font-roboto-condensed uppercase">{product.attributes.Name}</h1>
                    </div>

                </div>

                <p className="text-xl font-semibold text-gray-500 mb-4">${product.attributes.Price.toFixed(2)}</p>
                <div className="text-gray-600 mb-6 space-y-4 font-roboto-condensed">
                    {product.attributes.Description.map((desc, index) => (
                        <p key={index}>
                            {desc.children.map((child, idx) =>
                                child.bold ? (
                                    <strong key={idx}>{child.text}</strong>
                                ) : (
                                    <span key={idx}>{child.text}</span>
                                )
                            )}
                        </p>
                    ))}
                </div>
                <button disabled={product.attributes.Quantity < 1 ? true : false} className={`w-full py-1 ${product.attributes.Quantity < 0 ? "bg-gray-500" : "bg-black"} text-white text-lg font-light uppercase tracking-widest transition-colors duration-300 hover:bg-gray-800`}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

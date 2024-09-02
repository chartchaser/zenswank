// Footer
interface FooterLinks {
    href: string;
    text: string;
  }
  
  // About Me
  type AboutMe = [{
    mainTitle: string,
    mainArticleImage: string,
    lowerArticleImage: string,
    articleTitle: string,
    articleText: string,
    lowerArticleTitle: string,
    lowerArticleText: string
  }]


  // Product page types
  interface PictureFormat {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: string | null;
    size: number;
    width: number;
    height: number;
    sizeInBytes: number;
  }
  
  interface PictureAttributes {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      large?: PictureFormat;
      small?: PictureFormat;
      medium?: PictureFormat;
      thumbnail?: PictureFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any | null;
    createdAt: string;
    updatedAt: string;
  }
  
  interface PictureData {
    id: number;
    attributes: PictureAttributes;
  }
  
  interface Pictures {
    data: PictureData[];
  }
  
  interface ProductAttributes {
    Name: string;
    Description: Array<{
      type: string;
      children: Array<{
        text: string;
        type: string;
        bold?: boolean;
      }>;
    }>;
    Price: number;
    Quantity: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    Pictures: Pictures;
  }
  
  interface ProductData {
    id: number;
    attributes: ProductAttributes;
  }
  
  interface ProductResponse {
    data: ProductData;
    meta: any;
  }
  
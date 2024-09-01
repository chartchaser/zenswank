import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchBar from '../comp/search/SearchBar';
import Link from 'next/link';
import { footerLinks } from "@/utilities/config";



export default function Footer() {
  return (
    <footer className="py-8 bg-customOrange text-white">
      <div className="container mx-auto text-center">
        <ul className="flex flex-col space-y-4">
        <div className="flex justify-center">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FacebookIcon className="text-black hover:text-gray-900" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramIcon className="text-black hover:text-gray-900" />
          </a>
        </div>
          {footerLinks.map((e: FooterLinks, index: number) => (
            <li key={index}>
              <Link href={e.href} className="font-bold uppercase text-black my-8 tracking-wide text-sm">
                {e.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className="w-1/3 mx-auto mt-8">
          <SearchBar border={true} />
        </div>
        <div className="mt-8">
          <p className='tracking-widest text-xs text-black font-light'>&copy; ZENSWANK GIFT COMPANY {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}

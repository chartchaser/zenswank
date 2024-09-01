/* eslint-disable @next/next/no-img-element */
'use client';
import { navLinks } from '@/utilities/config';
import { styled, alpha } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import {ShopLatest} from '../Components/WideLinks/ShopLatest';

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  return (
    <header>
      <ShopLatest/>
      <nav className="container mx-auto py-4 justify-between items-center lg:flex hidden">
      
        {/* Left Column: MUI SearchBar */}
        <div className="w-1/4 uppercase">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </div>

        {/* Middle Column: Picture with Links Below */}
        <div className="w-1/2 flex flex-col items-center">
          <img src="/images/ZenSwank.png" alt="Logo" style={{ height: 125, width: 220 }} />
          <ul className="flex justify-center space-x-12 mt-4">
            {navLinks.map((link: any) => (
              <li key={link.href}>
                <a href={link.href} className="text-black hover:text-gray-900 font-roboto-condensed uppercase tracking-wider">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: MUI Icons */}
        <div className="w-1/4 flex justify-end space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FacebookIcon className="text-gray-600 hover:text-gray-900" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramIcon className="text-gray-600 hover:text-gray-900" />
          </a>
        </div>
        
      </nav>

      <nav className="container mx-auto py-4 flex justify-between items-center md:hidden">
      
        <div className="flex w-1/3 jusitfy-start pl-6">
          <SearchIcon />
        </div>
        <div className="flex w-1/3 justify-center">
          <img src="/images/ZenSwank.png" alt="Logo" style={{ height: 60, width: 120 }} />
        </div>
        <div className="flex w-1/3 justify-end pr-6">
          <button className="md:hidden" onClick={toggleModal} aria-label="Open Menu">
            <MenuIcon className="text-gray-600 hover:text-gray-900" />
          </button>
        </div>
      </nav>

      {/* Slide-in Modal */}
      <div
        className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ${
          isModalOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-end w-full p-4">
          <button onClick={toggleModal} aria-label="Close Menu">
            <CloseIcon className="text-black" />
          </button>
        </div>
        <ul className="space-y-2 text-left mt-0 ml-8">
          {navLinks.map((link: any) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-black text-lg font-roboto-condensed hover:underline"
                onClick={toggleModal}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

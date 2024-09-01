'use client'
import CloseIcon from '@mui/icons-material/Close';
import { Dispatch, SetStateAction } from 'react';

type WideLinkProps = {
    isOpen: Boolean,
    setIsOpen: Dispatch<SetStateAction<Boolean>>
  };

export default function WideLinkClose({isOpen, setIsOpen}:WideLinkProps) {

    return (
        <button onClick={() => {
            if (isOpen === true) {
                setIsOpen(false)   
               
            } else {
                setIsOpen(true)
      
            }
        }}>
            <CloseIcon fontSize='inherit' />
        </button>
    )
}
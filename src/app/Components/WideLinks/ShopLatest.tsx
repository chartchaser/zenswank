import CloseIcon from '@mui/icons-material/Close';

export default function ShopLatest() {
    return (
        <div className="w-full py-1 md:flex justify-between items-center bg-black hidden">
            <div className="w-1/3 flex justify-start ">
                {/* Left content here */}
            </div>
            <div className="w-1/3 flex justify-center uppercase text-white py-2 text-sm font-light">
                Shop our latest boxes!
            </div>
            <div className="w-1/3 flex justify-end text-white pr-6">
                <CloseIcon fontSize='inherit'/>
            </div>
        </div>
    );
}

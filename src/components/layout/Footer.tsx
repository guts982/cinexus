import React from 'react';

const Footer = () => {
    return (
        <footer className='w-full  text-md  border-t border-slate-300 dark:border-slate-600 '>
            <div className="flex justify-center items-center font-light py-2">
                Copyright © {new Date().getFullYear()} | Amit Karn | Nepal
            </div>
            <div className="h-1 w-full bg-accent"></div>
        </footer>
    );
};

export default Footer;
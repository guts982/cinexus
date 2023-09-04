"use client";
import {useState, KeyboardEvent, useCallback, useEffect} from 'react';
import { useRouter, usePathname, useSearchParams} from 'next/navigation';
import { motion } from 'framer-motion';
import { useDebounce } from 'use-debounce';
import { useDispatch } from 'react-redux';
import { Button } from '@/components/ui/button';

const MotionButton = motion(Button)

const SearchBox = () => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const [query,setQuery] = useState(searchParams.get('query') || '');
    const [debouncedQuery] = useDebounce(query, 300);

    const dispatch = useDispatch();

    useEffect(()=>{
        // console.log("debounced val",debouncedQuery);
        handleSearch()
    },[dispatch, debouncedQuery])


    // Get a new searchParams string by merging the current
    // searchParams with a provided key/value pair
    const createQueryString = useCallback(
        (name: string, value: string) => {
        const params = new URLSearchParams(searchParams)
        params.set('page','1');
        params.set(name, value)
    
        return params.toString()
        },
        [searchParams]
    )

    const handleKeyDown = (e:KeyboardEvent<HTMLInputElement>)=>{
        if(e.key.toLowerCase()=="enter") handleSearch()
    }   
    const handleSearch = () => {
        router.push(pathname + '?' + createQueryString('query', query))
    }

    return (
        <div className='w-full px-2 flex flex-col sm:flex-row justify-center items-center gap-2'>
            <input type="text" name="query" value={query} 
                className='w-full sm:w-11/12 md:w-9/12 bg-light-light dark:bg-dark-default/50 outline-none border border-light-font dark:border-dark-font 
                px-2 py-1 sm:px-4 sm:py-2  rounded-md tracking-wider'
            onChange={e=>setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            />
            <motion.button type="button" onClick={handleSearch}
            className='bg-accent  text-accent-foreground 
            font-bold px-2 py-1 sm:px-4 sm:py-2 rounded-md tracking-widest' 
            whileHover={{ opacity:.9}}
            whileTap={{scale:.8, }}
            >Search</motion.button>
        </div>
    );
};

export default SearchBox;
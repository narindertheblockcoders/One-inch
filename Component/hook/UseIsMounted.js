import { useEffect, useState } from 'react'

export default function UseIsMounted() {
    const [mounted,setMounted] = useState(false);

    useEffect(()=>{
        setMounted(true)
    },[])
  return mounted;
}

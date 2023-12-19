import React,{ useState } from 'react'
function Header() {
    const [expanded, setExpanded] = useState(false);
    const handleButtonClick = () => {
            setExpanded(!expanded);
          };
  return (
    <div>
    <div className='h-auto w-full bg-violet-500 flex justify-between items-center px-4'>
        <img className='w-20' src="https://logodownload.org/wp-content/uploads/2020/09/la-rams-logo-1.png" alt="" />
        <button onClick={handleButtonClick} className='text-3xl hidden max-[613px]:block'>{expanded?<i class="fa-solid fa-xmark"></i>:<i class="fa-solid fa-bars"></i>}</button>
        <ul className='flex w-96 justify-between font-semibold max-[613px]:hidden'>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Services</a></li>
        </ul>
        <div>
            <button className='w-20 h-8 bg-green-400 rounded-xl font-bold'>Sign-up</button>
        </div>
    </div>
    <div className='bg-violet-500 fixed w-full justify-center hidden max-[613px]:flex'>
    {expanded&&(
        <ul className='flex flex-col justify-between h-36 font-semibold '>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Services</a></li>
        </ul>
            

        )
        }
    </div>
    </div>
  )
}

export default Header
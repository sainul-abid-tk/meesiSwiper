import React,{useState} from 'react'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

function Home() {
    const [currentIndex,setCurrentIndex] = useState(0)
    const slides = [
        {
          url: 'https://cdn.mos.cms.futurecdn.net/G2CKMfQNr36pEAQGqekFXL-1200-80.jpg.webp',
          year:'2009'
        },
        {
          url: 'https://cdn.mos.cms.futurecdn.net/DGdMbvUJ3ZeuQMVgWK9foU-1200-80.jpg.webp',
          year:'2010'
        },
        {
          url: 'https://cdn.mos.cms.futurecdn.net/S4jyBJuGedr2XXYkYdpdm7-1200-80.jpg.webp',
          year:'2011'
        },
    
        {
          url: 'https://cdn.mos.cms.futurecdn.net/6dFrzwHDfzxK9U3uQVtB4K-1200-80.jpg.webp',
          year:'2012'
        },
        {
          url: 'http://3.bp.blogspot.com/-nF3QFguryYw/VpRNDNF_aHI/AAAAAAAAJMo/BnTQD2H9qUw/s1600/12496433_957211191021684_8323812904140467990_o.jpg',
          year:'2015'
        },
        {
          url: 'https://news.premierbet.cm/wp-content/uploads/sites/2/2019/12/2019-12-02T205834Z_1703487012_RC28ND9JD013_RTRMADP_3_SOCCER-BALLON.jpg',
          year:'2019'
        },
        {
          url: 'https://static.independent.co.uk/2021/11/29/22/GettyImages-1236893667.jpg?width=1200',
          year:'2021'
        },
        {
          url: 'https://akcdn.detik.net.id/community/media/visual/2019/12/03/2ecb437d-e4b6-4e9a-94de-354395256fa3_169.jpeg?w=700&q=90',
          year:'2023'
        },
      ];
      const move=(index)=>{
        setCurrentIndex(index)
      }
      const prevImg=()=>{
        const isFirstSlide=currentIndex===0
        const newIndex=isFirstSlide?slides.length-1:currentIndex-1;
        setCurrentIndex(newIndex)
      }
      const nextImg=()=>{
       
        const isLastSlide=currentIndex===slides.length -1;
        const newIndex=isLastSlide?0:currentIndex+1;
        setCurrentIndex(newIndex)
      }
  return (
    <>
    <div style={{backgroundImage:`url(${slides[currentIndex].url})`}}  className='bg-cover flex flex-col h-screen  justify-center items-center  space-x-3 '>
        <div style={{backgroundImage:`url(${slides[currentIndex].url})`}} id='slider' className='w-[900px] h-[570px]   mt-10 bg-cover relative rounded-3xl flex flex-col justify-center'>
        <div id='butn' className='text-white text-2xl px-3 flex justify-between butn'>
        <ArrowCircleLeftIcon fontSize="large" className='cursor-pointer' onClick={prevImg}/>
        <ArrowCircleRightIcon fontSize="large" className='cursor-pointer' onClick={nextImg}/>
        </div>
        <h1 className='text-7xl font-extrabold text-white absolute bottom-8 left-[43%]'>{slides[currentIndex].year}</h1>
        </div>
        <div className='mt-3 flex w-56 justify-between'>
          {
            Array.from({length:8}).map((items,index)=>(
              <div onClick={()=>move(index)} id={currentIndex==index?'white':'black'} className='w-5 h-5 text-center text-sm font-bold  rounded-full cursor-pointer'>{index+1}</div>
            ))
          }
        </div>
     </div>
      
     </>
  )
}

export default Home
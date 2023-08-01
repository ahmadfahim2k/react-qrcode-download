import React from 'react'
import ImageUrlInput from './ImageUrlInput';
import QrCode from './QrCode';

function Home() {

    const data = [
        'image-1',
        'image-2',
        'image-3',
    ]

  return (
    <div className='mt-4 flex flex-col items-center'>
        <span className='my-2 text-3xl font-semibold'>
            Select an image to generate QR Code
        </span>
        <div className='flex flex-row justify-around items-center'>
            {data.map((img, i) => {
                return (
                    <div key={i}>
                        <ImageUrlInput imgName={img} />
                    </div>
                )
            })}
        </div>
        <div className='mt-4 flex flex-col items-center'>
            <span className='text-2xl font-semibold'>
                Scan to download the Image
            </span>
            <QrCode />
        </div>
    </div>
  )
}

export default Home;
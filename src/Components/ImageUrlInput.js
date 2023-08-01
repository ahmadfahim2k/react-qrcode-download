import { useRecoilState, useSetRecoilState } from 'recoil';
import { activeImgAtom, qrCodeAtom } from '../Recoil';

function ImageUrlInput({ imgName="image"}) {

    const imgUrl = `/images/${imgName}.png`;
    const [activeImg, setActiveImg] = useRecoilState(activeImgAtom);
    const setQrCode = useSetRecoilState(qrCodeAtom);

    function handleClick() {
        setActiveImg(imgUrl);
        console.log(`${window.location.href}img/${imgName}`);
        setQrCode(`${window.location.href}img/${imgName}`);
    }

  return (
    <div className={`m-2 p-1 rounded-xl cursor-pointer select-none ${activeImg === imgUrl ? 'shadow-xl border-2 border-black' : ''}`} onClick={handleClick}>
        <img className='rounded-xl' src={imgUrl} height={200} width={200} alt='' />
    </div>
  )
}

export default ImageUrlInput;
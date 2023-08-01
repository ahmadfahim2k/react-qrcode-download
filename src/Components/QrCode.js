import QRCode from 'qrcode';
import { useEffect, useRef } from 'react'
import { useRecoilValue } from 'recoil';
import { qrCodeAtom } from '../Recoil';

function QrCode() {

    const value = useRecoilValue(qrCodeAtom);
    const canvasRef = useRef();

    useEffect(() => {
        QRCode.toCanvas(
            canvasRef.current,
            value || " ",
            { width: 300, height: 300},
            (error) => error && console.error(error)
        )
    }, [value]);

    return (
        <div>
            <canvas ref={canvasRef} />
        </div>
    )
}

export default QrCode;
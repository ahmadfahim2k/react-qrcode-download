import axios from 'axios';
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';

function AutomaticImageDownload() {

    const { imgName } = useParams();

    useEffect(() => {
        const downloadImage = async (imageSrc, nameOfDownload = 'my-image.png') => {
            try {
                console.log(imageSrc);
                const response = await axios.get(imageSrc, { responseType: 'blob'});
                const blobImage = new Blob([response.data]);
                const href = URL.createObjectURL(blobImage);

                const anchorElement = document.createElement('a');
                anchorElement.href = href;
                anchorElement.download = nameOfDownload;

                document.body.appendChild(anchorElement);
                anchorElement.click();

                document.body.removeChild(anchorElement);
                window.URL.revokeObjectURL(href);
            } catch (err) {
                console.log('Error downloading image: ', err);
            }
        };

        //Call downloadImage when component mounts
        const imgUrl = `/images/${imgName}.png`;
        downloadImage(imgUrl, `${imgName}.png`);
    }, [imgName]);

    return (
        <div>
            <img src={`/images/${imgName}.png`} alt='' />
        </div>
    )
}

export default AutomaticImageDownload;
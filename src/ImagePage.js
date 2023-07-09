import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Helmet from 'react-helmet';

const ImagePage = () => {
  const [imageId, setImageId] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  useEffect(() => {
    fetchImage();
  }, [imageId]);

  const fetchImage = async () => {
    const pathname = window.location.pathname;
    const valueFromUrl = pathname.split('/image/')[1];
    console.log("Value From URL:" + valueFromUrl);
    setImageId(valueFromUrl)
    console.log(imageId)
    try {
      if (imageId != null) {
        const response = await axios.get(`https://picsum.photos/id/${imageId}/1200/630.jpg`, {
          responseType: 'blob',
        });
        console.log(response);
        const picsumId = response.headers['picsum-id'];
        console.log('Picsum ID:', picsumId);

        setImageUrl(URL.createObjectURL(response.data))
        console.log(imageUrl);
      }

    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };
  return (
    <div>
      <Helmet>
        <meta property="og:image" content="https://upload.wikimedia.org/wikipedia/commons/2/27/Square_200x200.svg" />
        <meta property="og:image:url" content="https://upload.wikimedia.org/wikipedia/commons/2/27/Square_200x200.svg" />
        <meta property="twitter:image" content={`https://picsum.photos/id/${imageId}/1200/630.jpg`} />

        <title>OpenSix Assignment</title>
        <meta name="description" content="A random image sharing app" />
        <meta name="keywords" content="..." />
        <meta property="og:url" content={`https://point-six-assignment-db.vercel.app/image/${imageId}`} />
        <meta property="og:title" content="Random Image Generator - OpenSix" />
        <meta property="og:description" content="..." />


        {/* <meta name="theme-color" content="#E6E6FA" />
        <meta property='og:title' content='TITLE OF YOUR WEBSITE' />
        <meta property='og:image' content={`https://picsum.photos/id/${imageId}/200.jpg`} />
        <meta property='og:description' content='A Random Image' />
        <meta property="og:image:url" content={`https://picsum.photos/id/${imageId}/1200/630.jpg`} />
        <meta property="twitter:image" content={`https://picsum.photos/id/${imageId}/1200/630.jpg`} /> */}
      </Helmet>
      <img src={imageUrl} alt="Random" />
    </div>
  );
};

export default ImagePage;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

const RandomImageGenerator = () => {
  const [imageId, setImageId] = useState(0);
  const [image, setImage] = useState('');

  useEffect(() => {
    fetchImage();
  }, []);

  const fetchImage = async () => {
    try {
      const response = await axios.get('https://picsum.photos/1200/630.jpg', {
        responseType: 'blob',
      });
      console.log(response);
      const picsumId = response.headers['picsum-id'];
      console.log('Picsum ID:', picsumId);
      const imageUrl = URL.createObjectURL(response.data);
      setImageId(picsumId);
      setImage(imageUrl)
      console.log(imageUrl);
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  const shareUrl = `${window.location.origin}/image/${imageId}`;
  const shareTitle = 'Random Image';

  return (
    <div>
      <img src={image} alt="Random" style={{ display: 'block', margin: '0 auto' }} />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <FacebookShareButton url={shareUrl}>
          <button>Share on Facebook</button>
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} title={shareTitle}>
          <button>Share on Twitter</button>
        </TwitterShareButton>
        <WhatsappShareButton url={shareUrl} title={shareTitle}>
          <button>Share on WhatsApp</button>
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default RandomImageGenerator;
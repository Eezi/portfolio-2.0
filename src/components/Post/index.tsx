import React, { FC } from 'react'
import './styles.css';

interface Props {
  title: string
  url: string
  imgPath: string
}

const Post: FC<Props> = ({ title, url, imgPath }) => {
  const imgStyles = {
    backgroundImage: `url(${imgPath})`
  }

  const handleImgClick = () => {
    window.open(url); 
  }
  return (
    <div>
      <div style={imgStyles} onClick={handleImgClick} className="imgDiv bg-cover bg-center h-40 w-70 rounded-2xl hover:cursor-pointer"/>
      <h6 className="title text-center mt-3">{title}</h6>
    </div>
  );
};

export default Post;

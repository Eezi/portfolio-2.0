import React, { FC, ReactElement } from 'react'

interface CardProps {
    title: string,
    description: string,
    imgPath: string,
    url: string,
  }

const Card: FC<CardProps> = ({ title, description, imgPath, url }) => (
        <div className="bg-gray-900 rounded-lg min-w-50px max-w-xs mb-5 mx-4">
            <img src={imgPath} alt=""
                className="w-full z-0 h-48 transition duration-300 rounded-t-lg sm:h-56 opacity-80 hover:opacity-100" />

            <div className="px-4 py-4 mb-6 h-60 text-center">
                <div className="mb-2 text-2xl font-bold text-purple-600 uppercase">{title}</div>
                <span className="text-sm">
                    {description}
                </span>
            </div>
            <a
            target="_blank"
            href={url}
            className="w-100 block py-3 text-center text-lg font-extrabold text-gray-50 transition duration-300 bg-purple-600 rounded-b-lg hover:bg-purple-700">
            VIEW
            PROJECT</a>
        </div>
);

export default Card;

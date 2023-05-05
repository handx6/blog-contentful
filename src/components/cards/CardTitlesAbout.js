import React from 'react'

export default function CardTitlesAbout({titleGray, titleBlack, style}) {
  return (
    <div className={style}>
      <h5 className="text-xs font-semibold text-gray-300 pb-1">
        {titleGray}
      </h5>
      <h2 className="text-xl font-semibold text-black pb-4">
        {titleBlack}
      </h2>
    </div>
  );
}

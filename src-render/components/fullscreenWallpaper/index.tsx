import React from 'react';
import './index.scss';

export interface FullscreenWallpaperProps {
  filename: string;
  onClick?: (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
}

export default function FullscreenWallpaper(props: FullscreenWallpaperProps) {

  return (
    <div className="screen-lock">
      <img src={props.filename} alt={''} onClick={props.onClick} />
    </div>
  )
}
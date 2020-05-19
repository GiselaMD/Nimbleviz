import React, { FC } from 'react';
import ReelForWebsite from '../../assets/ReelForWebsite.mp4';
import { VideoWrapper, BackgroundVideo } from './styles';

type VideoProps = {};

const Video: FC<VideoProps> = () => (
  <VideoWrapper>
    <BackgroundVideo autoPlay muted loop>
      <source src={ReelForWebsite} type="video/mp4"></source>
    </BackgroundVideo>
  </VideoWrapper>
);
export default Video;

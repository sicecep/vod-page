import React, { Component } from 'react';
import Player from '../components/Video';
import { vod_playback, vod_poster } from '../config';

export default class Landing extends Component {
  render() {
    const video_url = vod_playback;
    const video_type = 'application/x-mpegURL'
    const videoJsOptions = {
      autoplay: true,
      controls: true,
      width: 854,
      height: 480,
      poster: vod_poster,
      sources: [
        {
          src: video_url,
          type: video_type
        }
      ]
    };

    return (
      <div>
        Sample Video :
        <Player {...videoJsOptions} />
      </div>
    );
  }
}
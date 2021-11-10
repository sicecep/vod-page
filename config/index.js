const dev = process.env.NODE_ENV !== 'production'

export const stream_key = 'sssss'
export const playback = 'https://stream.mux.com/gKFH4Q36tPVFbRn7KftbeY9v1JdLV24zotheyg3TI1k.m3u8'

export const vod_playback = 'https://stream.mux.com/kHJ3SpO68bXY003LKssI2BFgCV3Gi5cQbipjEy18ilrA.m3u8'
export const vod_poster = 'https://image.mux.com/kHJ3SpO68bXY003LKssI2BFgCV3Gi5cQbipjEy18ilrA/thumbnail.png?width=854&height=480&fit_mode=pad'

export const server = dev ? 'http://localhost:3000' : 'https://live-stream-tip2.netlify.app';
// https://maxbase.org


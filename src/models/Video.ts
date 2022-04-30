type Video = {
  id: string
  title: string
  channel: string
  owner: string
  thumbnail?: string
}

export default Video


  export const getVideo = (objJson: any): Video => {
    const {
      id,
      title,
      owner,
      thumbnail,
      channel,
    } = objJson

    const Videos: Video = {
      id,
      title,
      channel,
      thumbnail,
      owner: channel
    }

  return Videos
}
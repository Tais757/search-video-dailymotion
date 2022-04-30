import Video from '../models/Video'


const renderVideoDetails = (video: Video, container: HTMLElement) => {
  const htmlContent = `
    <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;">

    <iframe style="width:85%;height:85%;position:absolute;left:0px;top:0px;overflow:hidden"
      frameborder="0" type="text/html" src="https://www.dailymotion.com/embed/video/${video.id}" 
      width="85%" height="85%" allowfullscreen allow="autoplay">
      
    </iframe>

    <h2>${video.title}</h2>

    <button id="backbtn" onclick="history.back()">Voltar</butt>
    
    </div>
  `

  container.innerHTML = htmlContent
}

export default renderVideoDetails

import axios from 'axios'
import { API_URL } from '../config'
import { getVideo } from '../models/Video'
import renderVideoCard from './VideoCard'

const $ = document.querySelector.bind(document)

const http = axios.create({
  baseURL: API_URL,
})

const renderVideoForm = (container: HTMLElement) => {
  const htmlContent = `
    <form id="video-form">
        <input type="text" id="filter" placeholder="Digite o título do video">
        <button>Pesquisar</button>
    </form>
    `

  container.innerHTML = htmlContent
  const videoForm = <HTMLFormElement>$('#video-form')
  videoForm.onsubmit = filter
}

const filter = async (event: Event) => {
  event.preventDefault()
  const filterInput = <HTMLInputElement>$('#filter')
  const queryText = filterInput.value
  if (queryText) {
    const response = await http.get('/videos', {
      params: {
        search: queryText,
      },
    })

    if (response.status == 200) {
      const { data } = response
      const { list } = data
      const resultArea = <HTMLDivElement>$('#result-area')
      resultArea.innerHTML = ''
      list.forEach((jsonObj: any) => {
        const video = getVideo(jsonObj)
        renderVideoCard(video, resultArea)
      })
    }
  }
}


export default renderVideoForm

import { getVideo } from './models/Video'
import axios from 'axios'

import renderVideoDetails from './components/VideoDetails'
import { API_URL } from './config'
import './style.css'

const $ = document.querySelector.bind(document)

const searchVideo = async (id: string) => {
  const http = axios.create({
    baseURL: API_URL,
  })

  const response = await http.get(`/video/${id}`)

  if (response.status == 200) {
    const { data } = response
    const Videos = getVideo(data)
    const container = <HTMLDivElement>$('#container')
    renderVideoDetails(Videos, container)
  }
}

const params = new URLSearchParams(document.location.search)
const id = params.get('id')
if (id) {
  searchVideo(id)
}

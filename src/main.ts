import renderVideoForm from './components/VideoForm'
import './style.css'

const $ = document.querySelector.bind(document)

const container = <HTMLDivElement>$('#container')
renderVideoForm(container)
const resultArea = document.createElement('div')
resultArea.id = 'result-area'
container.insertAdjacentElement('beforeend', resultArea)

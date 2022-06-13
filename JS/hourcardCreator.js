export default class createHourCards{
  #time
  #timeRow
  #timeSpan
  #icon
  #iconRow
  #iconImage
  #temp
  #tempRow
  #tempSpan
  #feelsLike
  #feelsLikeRow
  #feelsLikeSpan
  #description
  #descriptionRow
  #descriptionSpan
  #mainContainer

  constructor(container, hourNumber){

    this.#time = document.createElement('div')
    this.#time.classList.add('col-12', 'd-flex', 'justify-content-center')
    this.#time.innerHTML = 'Time &nbsp;'
    this.#timeSpan = document.createElement('span')
    this.#timeSpan.id = `h${hourNumber}-time`
    this.#time.appendChild(this.#timeSpan)

    this.#icon = document.createElement('div')
    this.#icon.classList.add('col-12', 'd-flex', 'justify-content-center')
    this.#iconImage = document.createElement('img')
    this.#iconImage.id = `h${hourNumber}-icon`
    this.#icon.appendChild(this.#iconImage)

    this.#temp = document.createElement('div')
    this.#temp.classList.add('col-12', 'd-flex', 'justify-content-center')
    this.#temp.innerHTML = 'Temp'
    this.#tempSpan = document.createElement('span')
    this.#tempSpan.id = `h${hourNumber}-temp`
    this.#temp.appendChild(this.#tempSpan)

    this.#feelsLike = document.createElement('div')
    this.#feelsLike.classList.add('col-12', 'd-flex', 'justify-content-center')
    this.#feelsLike.innerHTML = 'Feels like'
    this.#feelsLikeSpan = document.createElement('span')
    this.#feelsLikeSpan.id = `h${hourNumber}-feelsLike`
    this.#feelsLike.appendChild(this.#feelsLikeSpan)

    this.#description = document.createElement('div')
    this.#description.classList.add('col-12', 'd-flex', 'justify-content-center')
    this.#descriptionSpan = document.createElement('span')
    this.#descriptionSpan.id = `h${hourNumber}-description`
    this.#description.appendChild(this.#descriptionSpan)


    this.#timeRow = document.createElement('div')
    this.#timeRow.classList.add('row')
    this.#timeRow.appendChild(this.#time)

    this.#iconRow = document.createElement('div')
    this.#iconRow.classList.add('row')
    this.#iconRow.appendChild(this.#icon)

    this.#tempRow = document.createElement('div')
    this.#tempRow.classList.add('row')
    this.#tempRow.appendChild(this.#temp)

    this.#feelsLikeRow = document.createElement('div')
    this.#feelsLikeRow.classList.add('row')
    this.#feelsLikeRow.appendChild(this.#feelsLike)

    this.#descriptionRow = document.createElement('div')
    this.#descriptionRow.classList.add('row')
    this.#descriptionRow.appendChild(this.#description)

    this.#mainContainer = document.createElement('div')
    this.#mainContainer.classList.add('col', 'bg-dark', 'text-light', 'm-2')
    this.#mainContainer.id = `h${hourNumber}`

    this.#mainContainer.appendChild(this.#timeRow)
    this.#mainContainer.appendChild(this.#iconRow)
    this.#mainContainer.appendChild(this.#tempRow)
    this.#mainContainer.appendChild(this.#feelsLikeRow)
    this.#mainContainer.appendChild(this.#descriptionRow)

    container.appendChild(this.#mainContainer)



  }
}
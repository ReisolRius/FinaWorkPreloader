/* PRELOADER */

document.addEventListener('DOMContentLoaded', () => {
    const mediaFiles = document.querySelectorAll('img')
    let i = 0
    console.log(mediaFiles)

    Array.from(mediaFiles).forEach(file => {
        file.onload = () => {
            i++

            percents.innerHTML = ((i * 100) / mediaFiles.length).toFixed()

            if(i === mediaFiles.length) {
                preloader.classList.add('preloader--hide')
                percents.innerHTML = 100
            }
        }
    })
})
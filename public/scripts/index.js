window.addEventListener('DOMContentLoaded', _ => {

    const movieItem = document.querySelectorAll('.movie-trend-item')

    movieItem.forEach(item => {
        item.addEventListener('mouseover', (e) => {
            const currentPositionX = e.clientX - item.getBoundingClientRect().left
            const currentPositionY = e.clientY - item.getBoundingClientRect().top
            const itemWidth = item.clientWidth / 2
            let moveY

            const itemHeight = item.clientHeight

            if (currentPositionY > itemHeight / 2) {
                moveY = "-60px"
            } else {
                moveY = "30px"
            }

            if (currentPositionX > itemWidth) {
                item.style.backgroundPosition = `right ${moveY}`
            } else {
                item.style.backgroundPosition = `left ${moveY}`
            }
        })

        item.addEventListener('mouseleave', () => {
            item.style.backgroundPosition = 'center'
        })
    })
})
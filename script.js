let isExplore = true

    function changeCard(event) {
        const card = event.currentTarget
        const backgroundImage = isExplore ? 'url(./Assets/bg-ignite.svg)': 'url(./Assets/bg-explore.svg)'
        isExplore = !isExplore
        card.style.backgroundImage = backgroundImage
    }

let isBlue = true

    function changeColor(event) {
        const background = event.currentTarget
        const backgroundChange = isBlue ? '#00033b' : '#061B0F'
        isBlue = !isBlue
        background.style.background = backgroundChange
    }
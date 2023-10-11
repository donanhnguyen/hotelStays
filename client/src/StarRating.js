import { useEffect } from "react"

function StarRating ({rating}) {

    useEffect(() => {
        const stars = document.querySelectorAll('.rating span');
        for (let i = 0; i < rating; i++) {
            stars[i].style.color = '#ffa200';
        }
    }, [])

    function displayStars () {
        return (
        <div class="rating">
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
        </div>
        )
    }

    return (
        <div>
            {displayStars()}
        </div>
    )

    

}

export default StarRating
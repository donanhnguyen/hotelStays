import { useEffect } from "react"

function StarRating ({rating}) {

    useEffect(() => {
        const stars = document.querySelectorAll('.rating span');
        for (let i = 4; i >= (5-rating); i--) {
            stars[i].style.color = '#ffa200';
        }
    }, [rating])

    return (
        <div className="rating">
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
        </div>
    )

}

export default StarRating
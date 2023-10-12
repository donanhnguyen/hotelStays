import { useEffect } from "react"

function StarRating ({rating}) {

    useEffect(() => {
        const stars = document.querySelectorAll('.rating span');
        for (let i = 4; i >= (5-rating); i--) {
            stars[i].style.color = 'orange';
        }
    }, [rating])

    return (
        <div className="rating">
            {[5,4,3,2,1].map((index) => (
                        <span
                        key={index}
                        style={{
                            color: rating !== null && index <= rating ? 'orange' : 'gray',
                            cursor: 'pointer',
                        }}
                        >
                        &#9733;
                        </span>
                    ))}
        </div>
    )

}

export default StarRating
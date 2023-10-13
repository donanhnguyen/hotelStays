function StarRating({ rating }) {
    const ratingFloored = Math.floor(rating);
  
    return (
      <div className="rating">
        {[4,3,2,1,0].map((index) => {
          return (
            <span
              key={index}
              style={{
                color: index < ratingFloored ? 'orange' : 'gray', // Use "<" instead of "<="
                cursor: 'pointer',
              }}
            >
              &#9733;
            </span>
          );
        })}
      </div>
    );
  }
  
export default StarRating
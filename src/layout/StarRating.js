
import React,{useState} from 'react';

const Star = ({ selected = false, onClick = f => f }) => (
    <div className={selected ? "star selected": "star"} onClick={onClick}/>
);

export default function StarRating({totalStars}) {
    const [stars, selectStars] = useState(0);

    return (
        <div className="star-rating">
            {[...Array(totalStars)].map((n, i) => (
                <Star 
                    key={i}
                    selected={i < stars}
                    onClick={() => selectStars(i + 1)}
                />
            ))}
            <p>{stars} of {totalStars}</p>    
        
        </div>
    )

}
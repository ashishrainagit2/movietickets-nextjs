const MovieOnTopCard = (props) => {
    const ImagePath = "https://image.tmdb.org/t/p/original/" + props.posterImg;
    return (
        <div className="masterImage">
            <img src={ImagePath} alt="Main Poster"/>
            <style jsx>{`
                .masterImage {
                    text-align: center;
                    margin: 0 auto;
                    overflow: hidden;
                    height : 600px;
                    width: 100%;
                }
                .masterImage img {
                }
            `}
            </style>
        </div>
    )
}

export default MovieOnTopCard
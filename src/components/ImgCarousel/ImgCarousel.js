import React from "react";
import {Carousel} from "react-bootstrap"

const ImgCarousel = ({images}) => {
    var style = {
        height: "30vh",
        width: "100%",
        display: "flex",
        justifyContent: "center"
    }

    var imgStyle = {
        maxWidth: "100%"
    }

    return (
        <Carousel style={{backgroundColor: "black"}}>
          {images.map((image, index) => {
              return (
                <Carousel.Item>
                    <div className="imageContainer" 
                        style={style}>
                            <img
                                className="d-block h-100"
                                src={image}
                                style={imgStyle}
                                alt={"not found"}
                            />
                    </div>
                </Carousel.Item>
              )
          })}
        </Carousel>
    );
};

export default ImgCarousel;
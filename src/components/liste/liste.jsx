import './liste.css'
import "react-multi-carousel/lib/styles.css"
import {NavLink} from "react-router-dom"
import Carousel from "react-multi-carousel";

const Liste = (props) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 10,
            slidesToSlide: 10,
            partialVisibilityGutter: 40
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
            slidesToSlide: 6,
            partialVisibilityGutter: 30
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2,
            partialVisibilityGutter: 20
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
            partialVisibilityGutter: 10
        }
    }

    return (
        <>
            <div className="allContainers listContainer">
                {props.elements[0] ? (
                    <>
                        <div>
                            <h2 className="rowHeader">
                                <NavLink to={props.genre.url} className="rowTitle">
                                    <div className="row-header-title">{props.genre.title}</div>
                                </NavLink>
                            </h2>
                            <Carousel responsive={responsive} itemClass="carousel-item">
                                {props.elements.map(element => (
                                    <NavLink to={element.url}>
                                        <img src={element.image}
                                             className="box-image" alt={element.id}/>
                                    </NavLink>
                                ))}
                            </Carousel>
                        </div>
                        <div className="focus-trap-wrapper previewModal--wrapper mini-modal has-smaller-buttons"
                             tabIndex="-1">
                            <div role="dialog" aria-modal="true" tabIndex="-1"
                                 className="previewModal--container mini-modal has-smaller-buttons">

                            </div>
                        </div>
                    </>
                ) : (
                    <i></i>
                )}
            </div>
        </>
    )
}

export default Liste
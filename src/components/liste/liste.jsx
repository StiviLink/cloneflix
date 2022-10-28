import './liste.css'
import "react-multi-carousel/lib/styles.css"
import {NavLink, useNavigate} from "react-router-dom"
import Carousel from "react-multi-carousel";
import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import allActions from "../../actions";

const Liste = (props) => {
    const navigate = new useNavigate()
    const dispatch = useDispatch()
    const favoris = useSelector(state => state.favoriReducer)
    console.log(props.element)
    const addFavori = e => {
        e.preventDefault()
        dispatch(allActions.favoriAction.addFavori(selection))
    }
    const delFavori = e => {
        e.preventDefault()
        dispatch(allActions.favoriAction.delFavori(selection))
    }
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
    const [selection, setSelection] = useState({})
    const [display, setDisplay] = useState("none")
    const [left, setLeft] = useState("-42px")
    const style = {
        width: "280px",
        height : "320px",
        marginTop: "30px",
        marginLeft: left,
        transformOrigin: "center center",
        transform: "translateX(56px) translateY(0px) scaleX(1) scaleY(1) translateZ(0px)",
        zIndex: "3",
        opacity: "1",
        boxShadow: "rgba(0, 0, 0, 0.75) 0px 3px 10px",
        display: display,
        background: "black"
    }
    const mouseOver = (e, element, index) => {
        e.preventDefault()
        setSelection(element)
        let i = index
        while (i>5){
            i -= 6
        }
        setLeft(`${i*240-42}px`)
        setDisplay("Block")
    }
    const allButtons = elt => <div className="allButtons">
            {!(favoris[0] && favoris.find(x => x.id===elt.id)) ? (
                <button aria-label="Ajouter à Ma liste"
                        className="button-favori" type="button" onClick={addFavori}>
                    <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z"
                                  fill="currentColor"></path>
                        </svg>
                    </div>
                </button>
            ) : (
                <button aria-label="Retirer de ma liste"
                        className="button-favori" type="button" onClick={delFavori}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
                              fill="currentColor"></path>
                    </svg>
                </button>
            )}
            <button aria-label="Plus d'infos" onClick={() => navigate(elt.url)}
                    className="button-favori" type="button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg" >
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z"
                          fill="currentColor"></path>
                </svg>
            </button>
        </div>
    const previewModal = <div className="previewModal--wrapper">
        <div role="dialog" aria-modal="true" tabIndex="-1"
             onMouseLeave={() => setDisplay("none")} style={style}>
            <div className="image-hover">
                <img src={selection.backdrop} className="box-image" alt={selection.id}
                     onClick={() => navigate(selection.url)}/>
            </div>
            <h2>{selection.title}</h2>
            {allButtons(selection)}
        </div>
    </div>
    const carousel = props.type==="all" ? <Carousel responsive={responsive} itemClass="carousel-item">
        {props.elements.map((element, index) => (
            <>
                <img src={element.image}
                     className="box-image" alt={element.id}
                     onMouseOver={e => mouseOver(e, element, index)}
                />
            </>
        ))}
    </Carousel> : ""
    const carouselTitle = props.type==="all" ? <h2 className="rowHeader">
        <NavLink to={props.genre.url} className="rowTitle">
            <div className="row-header-title">{props.genre.title}</div>
        </NavLink>
    </h2> : ""
    const genreContainer = props.type!=="info" ? <div className="genre-container">
        {props.elements.map(element => (
            <div className="genre-content" onMouseOver={() => setSelection(element)}>
                <div className="genre-box-image">
                    <img src={element.image}
                         className="box-image" alt={element.id} onClick={() => navigate(element.image)}
                    />
                </div>
                {allButtons(element)}
            </div>
        ))}
    </div> : ""
    const genreTitle = props.type==="genre" ? <h1 style={{marginLeft:"2%"}}>Genre {props.genre.title}</h1> : ""
    const favoriTitle = <h1 style={{marginLeft:"2%"}}>Mes favoris</h1>
    const favoriFoot = props.type==="favoris" ? <center><h1><i>Aucun favori</i></h1></center> : ""
    const infoTitle = props.type==="info" ? <div className="box-image-info">
        <img src={props.element.image}
             className="box-image" alt={props.element.id} onClick={() => navigate(props.element.image)}
        />
    </div> : ""
    const infoContainer = props.type==="info" ? <div className="info-container">
        <div><span>Titre : </span>{props.element.title ? props.element.title  : props.element.name}</div>
        <div><span>Description : </span>{props.element["overview"]}</div>
        <div><span>Date de sortie : </span>{props.element["release_date"] ? props.element["release_date"] : props.element["first_air_date"]}</div>
        <div><span>Note : </span>{props.element["vote_average"]}/10</div>
    </div> : ""
    const allContainer = (title, content, footer, foot=<i></i>) => <div className="allContainers listContainer">
        {props.elements || props.element?  <>
            {title}
            {content}
            {footer}
        </> : foot}
    </div>
    return (
        <>
            {
                props.type==="all" ? allContainer(carouselTitle, carousel, previewModal)
                    : props.type==="genre" ? allContainer(genreTitle, genreContainer, previewModal)
                        : props.type==="favoris" ? allContainer(favoriTitle, genreContainer,previewModal, favoriFoot)
                            : props.type==="info" ? allContainer(infoTitle, infoContainer)
                                : <></>
            }
        </>
    )
}

export default Liste
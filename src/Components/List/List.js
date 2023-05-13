import React, { useRef, useState, useEffect } from 'react'
import './list.scss'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ListItem from '../ListItem/ListItem';
import axios from 'axios';

function List({ title, url }) {
    const [isMove, setIsMove] = useState(false);
    const [slideNumber, setslideNumber] = useState(0)

    const listRef = useRef();

    const handleClick = (direction) => {
        setIsMove(true)
        let distance = listRef.current.getBoundingClientRect().x - 50
        if (direction === "left" && slideNumber > 0) {
            setslideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        if (direction === "right" && slideNumber < 5) {
            setslideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }

    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setMovies(response.data.results)
            })

    }, [])

console.log(movies,"jkl");
    return (
        <div className="list">
            <span className="listTitle" >{title}</span>
            <div className="wrapper">
                <ArrowBackIosIcon
                    className='sliderArrow left'
                    onClick={() => handleClick('left')}
                    style={{ display: !isMove && 'none ' }}
                />
                <div className="container" ref={listRef} >
                    {
                        movies.map((data, i) => (

                            <ListItem key={data.id} index={i} item={data} />

                        ))

                    }

                </div>
                <ArrowForwardIosIcon className='sliderArrow right' onClick={() => handleClick('right')} />
            </div>


        </div>
    )
}

export default List
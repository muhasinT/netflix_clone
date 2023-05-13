import React, { useEffect, useState } from 'react'
import './banner.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PermDeviceInformationOutlinedIcon from '@mui/icons-material/PermDeviceInformationOutlined';
import axios from 'axios';
import { fetchUrl, image_url } from '../../Request/requests'


function Banner() {  //{ type }
    const [movie, setMovie] = useState([])

    useEffect(() => {

        axios.get(`${fetchUrl.history}`)
            .then((response) => {
                console.log(response.data.results, 'n,b,n')
                setMovie(response.data.results[2])

            }

            )
    }, [])

    return (
        <header className='banner' style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${movie ? image_url + movie.backdrop_path : ''})`,
            backgroundPosition: 'center center'
        }} >
            {/* {type && (
                <div className="category">
                    <span>{type === 'Movie' ? "Movies" : "Series"}</span>
                    <select name="genre " id="Genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-Fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>

                    </select>
                </div>
            )} */}

            <div className='info'>
                <span className='title'>
                    {movie ? movie.original_title : ""}
                </span>
                <span className='describtion'>
                    {movie ? movie.overview : ""}
                </span>
                <div className='buttons'>
                    <button className='play'>
                        <PlayArrowIcon />
                        <span> Play</span>
                    </button>
                    <button className='more'>
                        <PermDeviceInformationOutlinedIcon />
                        <span>Info</span>
                    </button>


                </div>


            </div>

        </header>

    )
}

export default Banner
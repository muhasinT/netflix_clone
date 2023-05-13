import React, { useState } from 'react'
import './listItem.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import { image_url } from '../../Request/requests';
import YouTube from 'react-youtube'
import axios from 'axios'
import { API_KEY } from '../../Request/requests'


function ListItem({ index, item }) {
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 0,
        },
    };
    const [isHovered, setIsHovered] = useState(false);
    const [urlId, setUrlId] = useState('');

    function playTrailer() {
        axios.get(`https://api.themoviedb.org/3/movie/${item.id}/videos?api_key=${API_KEY}&language=en-US66732`)
            .then(response => {
                if (response.data.results.length !== 0) {
                    setUrlId(response.data.results[0])
                }


            })
    }
    playTrailer();
    return (
        <div className="list_item"
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={`${image_url + item.backdrop_path} `}
                alt={item.title} />
            {isHovered && (
                <>
                    <div className="itemInfo">
                        <div className="genre">{item.title}
                            <span className="itemInfoTop">{item.release_date}</span>
                        </div>
                        <div className="icons">
                            <PlayArrowIcon className='icon button' onClick={function playTrailer() {
                                 urlId && < YouTube opts={opts} videoId={urlId.key} /> 
                            }
                            } />
                            < AddIcon className='icon' />
                            <ThumbUpOutlinedIcon className='icon' />
                            <ThumbDownOutlinedIcon className='icon' />
                        </div>
                        <div className="describtion">{item.overview} </div>

                    </div>

                </>
            )}

        </div>

    )
}

export default ListItem
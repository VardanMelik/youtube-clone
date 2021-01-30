import React from 'react';
import './VideoCard.css';
import Avatar from '@material-ui/core/Avatar';

function Video({ image, title, channel, views, timestamp, channelImage }) {
    return (
        <div className="videoCard">
            <img className="videoCard__thumbnail" src={image} alt="" />
            <div className="video__info">
                <Avatar
                    src={channelImage}
                    className="video__avatar"
                    alt={channel}
                />
                <div className="video__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} - {timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Video

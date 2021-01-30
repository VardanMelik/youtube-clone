import React from 'react';
import './ChannelRow.css';
import Avatar from '@material-ui/core/Avatar';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';

function ChannelRow({ image, channel, verified, subs, noOfVideos, description}) {
    return (
        <div className="channelRow">
            <Avatar
                src={image} 
                className="channelRow__logo" 
                alt=""/>
                <div className="channelRow__text">
                    <h4>{channel} { verified && <VerifiedUserOutlinedIcon/>}</h4>
                    <p>{subs} subscribers - {noOfVideos}</p>
                    <p>{description}</p>
                </div>
             
        </div>
    )
}

export default ChannelRow 

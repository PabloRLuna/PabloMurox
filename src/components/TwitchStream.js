import React from 'react';

const TwitchStream = ({ channelName = 'pablomuro' }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '600px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Video Stream */}
      <div
        style={{
          flex: 1,
          border: '1px solid #333',
          borderRadius: '8px 8px 0 0',
          overflow: 'hidden'
        }}
      >
        <iframe
          src={`https://player.twitch.tv/?channel=${channelName}&parent=${window.location.hostname}`}
          height="100%"
          width="100%"
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
        />
      </div>

      {/* Chat */}
      <div
        style={{
          height: '300px',
          border: '1px solid #333',
          borderRadius: '0 0 8px 8px',
          overflow: 'hidden'
        }}
      >
        <iframe
          src={`https://www.twitch.tv/embed/${channelName}/chat?darkpopout`}
          height="100%"
          width="100%"
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
        />
      </div>
    </div>
  );
};

export default TwitchStream;

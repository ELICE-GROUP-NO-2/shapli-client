import React, { useEffect, useState } from "react";
import axios from "axios";

export default function HomePage() {
  const [videos, setVideos] = useState([]);


  const YOUTUBE_API = process.env.REACT_APP_YOUTUBE_API_KEY;

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems`,
          {
            params: {
              part: "contentDetails,snippet",
              maxResults: 50, // 가져올 비디오의 최대 수
              playlistId: "PL9e5lRNBawPaWQsAo0_RHAWp6iKTjv6La", // 가져오려는 재생목록 ID
              key: YOUTUBE_API,
            },
          }
        );
        setVideos(response.data.items);
        console.log(response.data);
      } catch (error) {
      }
    };

    fetchVideos();
  }, [YOUTUBE_API]);

  return (
    <div>
      <h1>재생목록 보여지나?</h1>
      <ul>
        {videos.map((video) => (
          <li key={video.contentDetails.videoId}>
            <h2>{video.snippet.title}</h2>
            <img
              src={video.snippet.thumbnails.default.url}
              alt={video.snippet.title}
            />
            <a
              href={`https://www.youtube.com/watch?v=${video.contentDetails.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              링크
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

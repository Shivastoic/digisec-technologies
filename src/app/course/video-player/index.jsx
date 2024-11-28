"use client";

import { useState, useRef } from "react";
import { FaPlay } from "react-icons/fa6";

export default function VideoPlayer({ src }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoClick = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };

    return (
        <div className="relative flex items-center justify-center rounded-xl overflow-hidden p-1 border-2 border-blue_light">
            {/* Video Player */}
            <video
                ref={videoRef}
                src={src}
                className="w-full h-full rounded-lg"
                loop
                loading="lazy"
                style={{ zIndex: 1 }}
                onClick={handleVideoClick} // Toggle play/pause on video click
            />
            {/* Custom Play Button */}
            {!isPlaying && (
                <button
                    onClick={handleVideoClick} // Play video on button click
                    className="size-32 absolute flex items-center justify-center bg-yellow_logo bg-opacity-50 text-white rounded-full p-4 md:p-6 hover:scale-110 transition duration-200"
                    style={{ zIndex: 2 }}
                >
                    <FaPlay className="text-4xl md:text-5xl pl-1" />
                </button>
            )}
        </div>
    );
}

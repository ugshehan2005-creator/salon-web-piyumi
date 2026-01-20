import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import videoSrc from '../assets/bg-video.mp4';

gsap.registerPlugin(ScrollTrigger);

const BackgroundVideo = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Ensure video metadata is loaded before animating
        video.onloadedmetadata = () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1, // Smooth scrubbing
                }
            });

            // Animate video current time from 0 to total duration
            // Using a small buffer (0.1) to avoid potential glitches at very end
            tl.fromTo(video,
                { currentTime: 0 },
                { currentTime: video.duration || 10, ease: "none" }
            );
        };
    }, []);

    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden -z-50">
            <video
                ref={videoRef}
                muted
                playsInline
                preload="auto"
                className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2 opacity-90"
            >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* Reduced overlay opacity to make video clearer */}
            <div className="absolute inset-0 bg-cream/20 mix-blend-overlay" />
        </div>
    );
};

export default BackgroundVideo;

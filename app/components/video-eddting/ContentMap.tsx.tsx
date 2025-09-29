"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, X, Volume2, VolumeX } from "lucide-react";
import Image from "next/image";
// 🔹 Types
type VideoProject = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
};

type VideoProjects = {
  [category: string]: VideoProject[];
};

type VideoModalProps = {
  video: VideoProject | null;
  isOpen: boolean;
  onClose: () => void;
};

type VideoCardProps = {
  video: VideoProject;
  onPlay: (video: VideoProject) => void;
};

type VideoCategoryProps = {
  category: string;
};

// 🔹 Sample data
const videoProjects: VideoProjects = {
  "Motion Graphics": [
    {
      id: 1,
      title: "Random",
      description:
        "A vibrant motion graphics piece showcasing cosmic energy and particle effects",
      thumbnail: "/images/portfolio/THUMBNAIL/THUMBNAIL (9).jpg",
      videoUrl: "/videos/motiongraphicsound.mp4",
    },
    {
      id: 2,
      title: "Urban Motion Series",
      description: "Dynamic urban landscapes with motion graphic overlays",

      thumbnail: "/api/placeholder/300/200",
      videoUrl: "#",
    },
    {
      id: 3,
      title: "Abstract Fluid Dynamics",
      description:
        "Fluid simulation with vibrant color transitions and abstract forms",

      thumbnail: "/api/placeholder/300/200",
      videoUrl: "#",
    },
    {
      id: 4,
      title: "Product Reveal Animation",
      description: "Sleek product reveal with dynamic motion graphics",

      thumbnail: "/api/placeholder/300/200",
      videoUrl: "#",
    },
  ],
  Typography: [
    {
      id: 1,
      title: "Dynamic Promo Typography",
      description: "Glowing neon text animation with urban backdrop",

      thumbnail: "/api/placeholder/300/200",
      videoUrl: "/videos/typography/DYNAMIC PROMO TYPOGRAPHY SOUND.mp4",
    },
    {
      id: 2,
      title: "Kinetic Typography",
      description:
        "Text animation with liquid metal properties and reflections",

      thumbnail: "/videos/typography/KINETIC TYPOGRAPHY SOUND 2.mp4",
      videoUrl: "#",
    },
    {
      id: 3,
      title: "Skyline Typography",
      description:
        "Text animation with liquid metal properties and reflections",

      thumbnail: "/api/placeholder/300/200",
      videoUrl: "/videos/typography/SKYLINE TYPOGRAPHY SOUND.mp4",
    },
    {
      id: 4,
      title: "Typography opener",
      description:
        "Text animation with liquid metal properties and reflections",

      thumbnail: "/api/placeholder/300/200",
      videoUrl: "/videos/typography/TYPOGRAPHY OPENER SOUND.mp4",
    },
    {
      id: 5,
      title: "General Typography",
      description:
        "Text animation with liquid metal properties and reflections",

      thumbnail: "/api/placeholder/300/200",
      videoUrl: "/videos/typography/TYPOGRAPHYYYY SOUND.mp4",
    },
  ],
  "Real Estate Promo": [
    {
      id: 1,
      title: "Rhythmic Text Animation",
      description: "Text synchronized to music rhythm with dynamic movement",

      thumbnail: "/api/placeholder/300/200",
      videoUrl: "/videos/real-estate-promo/REAL ESTATE INTRO PROMO SOUND.mp4",
    },
    {
      id: 2,
      title: "3D Kinetic Words",
      description: "Three-dimensional text moving through virtual space",

      thumbnail: "/api/placeholder/300/200",
      videoUrl: "/videos/real-estate-promo/REAL ESTATE PROMO SOUND.mp4",
    },
    {
      id: 3,
      title: "3D Kinetic Words",
      description: "Three-dimensional text moving through virtual space",

      thumbnail: "/api/placeholder/300/200",
      videoUrl: "/videos/real-estate-promo/REAL ESTATE SLIDESHOW SOUND.mp4",
    },
    {
      id: 4,
      title: "3D Kinetic Words",
      description: "Three-dimensional text moving through virtual space",

      thumbnail: "/api/placeholder/300/200",
      videoUrl: "/videos/real-estate-promo/REAL ESTATE SLIDESHOW.mp4",
    },
    {
      id: 5,
      title: "3D Kinetic Words",
      description: "Three-dimensional text moving through virtual space",

      thumbnail: "/api/placeholder/300/200",
      videoUrl: "/videos/real-estate-promo/REAL ESTATE STYLISH PROMO SOUND.mp4",
    },
  ],
  "Fashion Promo": [
    {
      id: 1,
      title: "Chic Runway Highlights",
      description:
        "A bold and stylish promo capturing the essence of modern runway fashion.",
      thumbnail: "/images/portfolio/video-editing/fas-pro.jpg",
      videoUrl: "/videos/fashion-promo/FASHION PROMO 2 SOUND.mp4",
    },
    {
      id: 2,
      title: "Streetwear Vibes",
      description:
        "Energetic visuals showcasing trendy street fashion with an urban edge.",
      thumbnail: "/images/portfolio/video-editing/fas-pro1.jpg",
      videoUrl: "/videos/fashion-promo/STOMP FASHION SOUND.mp4",
    },
    {
      id: 3,
      title: "Elegant Fashion Teaser",
      description:
        "A sleek teaser video emphasizing elegance, style, and creative fashion trends.",
      thumbnail: "/images/portfolio/video-editing/fas-pro2.jpg",
      videoUrl: "/videos/fashion-promo/STOMP FASHION SOUND.mp4",
    },
  ],
};

// 🔹 Video Player Modal
const VideoModal = ({ video, isOpen, onClose }: VideoModalProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  if (!isOpen || !video) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative bg-black rounded-lg overflow-hidden w-full max-w-4xl"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-75 transition-all"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        <div className="relative">
          <video
            ref={videoRef}
            className="w-full h-auto max-h-[70vh]"
            poster={video.thumbnail}
            onClick={togglePlay}
          >
            <source src={video.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <div className="flex items-center justify-between">
              <button
                className="text-white hover:text-blue-400 transition-colors"
                onClick={togglePlay}
              >
                {isPlaying ? (
                  <div className="w-10 h-10 flex items-center justify-center bg-black bg-opacity-50 rounded-full">
                    <div className="w-2 h-6 bg-white mx-0.5"></div>
                    <div className="w-2 h-6 bg-white mx-0.5"></div>
                  </div>
                ) : (
                  <div className="w-10 h-10 flex items-center justify-center bg-black bg-opacity-50 rounded-full">
                    <Play size={24} fill="white" className="pl-1" />
                  </div>
                )}
              </button>

              <button
                className="text-white hover:text-blue-400 transition-colors"
                onClick={toggleMute}
              >
                {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
              </button>
            </div>
          </div>
        </div>

        <div className="p-4 bg-neutral-900 text-white">
          <h3 className="text-xl font-bold mb-2">{video.title}</h3>
          <p className="text-neutral-400">{video.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

// 🔹 Video Card
const VideoCard = ({ video, onPlay }: VideoCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div
        className="relative overflow-hidden cursor-pointer"
        onClick={() => onPlay(video)}
      >
        <div className="aspect-video relative">
          <Image
            src={video.thumbnail}
            alt={video.title}
            width={400}
            height={225}
            className="w-full h-full object-cover"
          />
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-white bg-opacity-90 rounded-full p-3 shadow-lg transform hover:scale-110 transition-transform">
              <Play size={24} className="text-black pl-1" fill="black" />
            </div>
          </motion.div>
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-lg mb-1 text-neutral-800 dark:text-white line-clamp-1">
            {video.title}
          </h3>
          <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-3 line-clamp-2">
            {video.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// 🔹 Category Component
export const VideoCategory = ({ category }: VideoCategoryProps) => {
  const videos = videoProjects[category] || [];
  const [selectedVideo, setSelectedVideo] = useState<VideoProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayVideo = (video: VideoProject) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="pb-10"
      >
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-white mb-2">
            {category}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            {videos.length} {videos.length === 1 ? "project" : "projects"}
          </p>
        </div>

        {videos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {videos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onPlay={handlePlayVideo}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-neutral-100 dark:bg-neutral-800 rounded-xl">
            <p className="text-neutral-500 dark:text-neutral-400">
              No projects available for this category
            </p>
          </div>
        )}
      </motion.div>

      <VideoModal
        video={selectedVideo}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

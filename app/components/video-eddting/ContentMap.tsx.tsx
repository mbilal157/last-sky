"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
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
  Typography: [
    {
      id: 1,
      title: "Dynamic Promo Typography",
      description: "Glowing neon text animation with urban backdrop",

      thumbnail: "/api/placeholder/300/200",
      videoUrl: "https://www.youtube.com/watch?v=AY_PWpfAt_M",
    },
    {
      id: 2,
      title: "Dynamic Promo Typography",
      description: "Glowing neon text animation with urban backdrop",

      thumbnail: "/api/placeholder/300/200",
      videoUrl: "https://www.youtube.com/watch?v=qfhxIhswYRU",
    },
    {
      id: 3,
      title: "Dynamic Promo Typography",
      description: "Glowing neon text animation with urban backdrop",

      thumbnail: "/api/placeholder/300/200",
      videoUrl: "https://www.youtube.com/watch?v=NkXqqwW48r",
    },
  ],
  Wedding: [
    {
      id: 1,
      title: "Rhythmic Text Animation",
      description: "Text synchronized to music rhythm with dynamic movement",

      thumbnail: "/api/placeholder/300/200",
      videoUrl: "https://www.youtube.com/watch?v=TIOG22vi5Vc&feature=youtu.be",
    },
    {
      id: 2,
      title: "3D Kinetic Words",
      description: "Three-dimensional text moving through virtual space",

      thumbnail: "/api/placeholder/300/200",
      videoUrl: "https://www.youtube.com/watch?v=vRulY2oo65M",
    },
    {
      id: 3,
      title: "3D Kinetic Words",
      description: "Three-dimensional text moving through virtual space",

      thumbnail: "/api/placeholder/300/200",
      videoUrl: "https://www.youtube.com/watch?v=kQZ4N2vsLMM",
    },
    {
      id: 4,
      title: "3D Kinetic Words",
      description: "Three-dimensional text moving through virtual space",

      thumbnail: "/api/placeholder/300/200",
      videoUrl: "https://www.youtube.com/watch?v=ZERRulxpUyM",
    },
    {
      id: 5,
      title: "3D Kinetic Words",
      description: "Three-dimensional text moving through virtual space",

      thumbnail: "/api/placeholder/300/200",
      videoUrl: "https://www.youtube.com/watch?v=-so9sXCGEPI",
    },
    {
      id: 6,
      title: "3D Kinetic Words",
      description: "Three-dimensional text moving through virtual space",

      thumbnail: "/api/placeholder/300/200",
      videoUrl: "https://www.youtube.com/watch?v=x0r_A6jQtiE",
    },
  ],
  Promo: [
    {
      id: 1,
      title: "Chic Runway Highlights",
      description:
        "A bold and stylish promo capturing the essence of modern runway fashion.",
      thumbnail: "/images/portfolio/video-editing/promo.jpg",
      videoUrl: "https://www.youtube.com/watch?v=FBnJEG1EwGE",
    },
  ],
};

// 🔹 Video Player Modal
const VideoModal = ({ video, isOpen, onClose }: VideoModalProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

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
          <div className="relative w-full max-h-[70vh]">
            {video.videoUrl.includes("youtube.com") ||
            video.videoUrl.includes("youtu.be") ? (
              // 🔹 Use proper YouTube embed link
              <iframe
                className="w-full h-[70vh]"
                src={(() => {
                  let videoId = "";
                  if (video.videoUrl.includes("watch?v=")) {
                    videoId = video.videoUrl
                      .split("watch?v=")[1]
                      ?.split("&")[0];
                  } else if (video.videoUrl.includes("youtu.be/")) {
                    videoId = video.videoUrl
                      .split("youtu.be/")[1]
                      ?.split("?")[0];
                  }
                  return `https://www.youtube.com/embed/${videoId}`;
                })()}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              // 🔹 Use native video player for .mp4 files
              <video
                ref={videoRef}
                className="w-full h-auto max-h-[70vh]"
                poster={video.thumbnail}
                controls
                autoPlay
              >
                <source src={video.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <div className="flex items-center justify-between"></div>
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

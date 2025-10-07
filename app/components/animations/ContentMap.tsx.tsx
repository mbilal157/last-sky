"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
import Image from "next/image";
import { InfiniteMovingCards } from "../video-eddting/allmovcards";
// 🔹 Types
type VideoProject = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  category: string;
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
  Logo: [
    {
      id: 1,
      title: "MB Logo",
      description:
        "A bold and stylish promo capturing the essence of modern runway fashion.",
      thumbnail: "/images/portfolio/animations/logo1.png",
      videoUrl: "https://youtu.be/JdoHVjzYt7A",
      category: "Logo",
    },
    {
      id: 2,
      title: "Noor-e-islam",
      description:
        "A bold and stylish promo capturing the essence of modern runway fashion.",
      thumbnail: "/images/portfolio/animations/logo2.jpg",
      videoUrl: "https://youtu.be/tz2iRTSOZmc",
      category: "Logo",
    },
    {
      id: 3,
      title: "NoBills tech",
      description:
        "A bold and stylish promo capturing the essence of modern runway fashion.",
      thumbnail: "/images/portfolio/animations/logo3.png",
      videoUrl: "https://youtu.be/HL8DoLtQ4Fw",
      category: "Logo",
    },
    {
      id: 4,
      title: "CalmZen Sounds",
      description:
        "A bold and stylish promo capturing the essence of modern runway fashion.",
      thumbnail: "/images/portfolio/animations/logo4.jpg",
      videoUrl: "https://youtu.be/xobf0TNSL1E",
      category: "Logo",
    },
    {
      id: 5,
      title: "Power of focus",
      description:
        "A bold and stylish promo capturing the essence of modern runway fashion.",
      thumbnail: "/images/portfolio/animations/logo5.jpg",
      videoUrl: "https://youtu.be/VEXfFJCxYoY",
      category: "Logo",
    },
    {
      id: 6,
      title: "Blue wings",
      description:
        "A bold and stylish promo capturing the essence of modern runway fashion.",
      thumbnail: "/images/portfolio/animations/logo6.jpg",
      videoUrl: "https://youtu.be/Yz8ldcne3fw",
      category: "Logo",
    },
    {
      id: 7,
      title: "Mufti Saleem Rabani",
      description:
        "A bold and stylish promo capturing the essence of modern runway fashion.",
      thumbnail: "/images/portfolio/animations/logo7.jpg",
      videoUrl: "https://youtu.be/eFgGj2rG3M0",
      category: "Logo",
    },
  ],
  Motion: [
    {
      id: 1,
      title: "Championship 2025 promo",
      description:
        "A bold and stylish promo capturing the essence of modern runway fashion.",
      thumbnail: "/images/portfolio/video-editing/sports.jpg",
      videoUrl: "https://www.youtube.com/watch?v=YKqRiyCcsOQ",
      category: "Sports",
    },
  ],
};

const createAllVideos = (): VideoProject[] => {
  const allVideos: VideoProject[] = [];
  Object.values(videoProjects).forEach((categoryVideos) => {
    allVideos.push(...categoryVideos);
  });
  return allVideos;
};

// Add All category to videoProjects
videoProjects.All = createAllVideos();

// 🔹 Video Player Modal (same as before)
const VideoModal = ({ video, isOpen, onClose }: VideoModalProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  if (!isOpen || !video) return null;
  const getYouTubeEmbedUrl = (url: string) => {
    let videoId = "";
    if (url.includes("watch?v=")) {
      videoId = url.split("watch?v=")[1]?.split("&")[0];
    } else if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1]?.split("?")[0];
    } else if (url.includes("shorts/")) {
      videoId = url.split("shorts/")[1]?.split("?")[0];
    }
    return `https://www.youtube.com/embed/${videoId}`;
  };

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
              <iframe
                className="w-full h-[70vh]"
                src={getYouTubeEmbedUrl(video.videoUrl)}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
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
          <span className="inline-block mt-2 px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
            {video.category}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

// 🔹 Video Card
const VideoCard = ({ video, onPlay }: VideoCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isReel = video.videoUrl.includes("shorts/"); // ✅ Detect Reels

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
        {/* ✅ Use aspect-[9/16] for Reels (vertical) */}
        <div
          className={
            isReel ? "aspect-[9/16] relative" : "aspect-video relative"
          }
        >
          <Image
            src={video.thumbnail}
            alt={video.title}
            width={400}
            height={isReel ? 700 : 225}
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
interface InfiniteMovingCardsItem {
  title: string;
  src: string;
  description?: string;
  category?: string;
  videoUrl?: string;
  id?: number;
}
const AllVideosCarousel = ({ videos }: { videos: VideoProject[] }) => {
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

  // Convert videos to InfiniteMovingCards format with proper typing
  const carouselItems: InfiniteMovingCardsItem[] = videos.map((video) => ({
    title: video.title,
    src: video.thumbnail,
    description: video.description,
    category: video.category,
    videoUrl: video.videoUrl,
    id: video.id,
  }));

  // Split into rows for the carousel
  const rowSizes = [6, 6, 6, 5];
  const chunkedVideos: InfiniteMovingCardsItem[][] = [];
  let start = 0;

  for (const size of rowSizes) {
    if (start >= carouselItems.length) break;
    chunkedVideos.push(carouselItems.slice(start, start + size));
    start += size;
  }

  // Properly typed click handler
  const handleItemClick = (item: InfiniteMovingCardsItem) => {
    const video = videos.find((v) => v.id === item.id);
    if (video) handlePlayVideo(video);
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
            All Videos
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            {videos.length} {videos.length === 1 ? "project" : "projects"}
          </p>
        </div>

        <div className="space-y-8">
          {chunkedVideos.map((row, idx) => (
            <div key={idx} className="relative">
              <InfiniteMovingCards
                items={row}
                speed="normal"
                direction={idx % 2 === 0 ? "right" : "left"}
                rows={1}
                onItemClick={handleItemClick} // Use the properly typed handler
              />
            </div>
          ))}
        </div>
      </motion.div>

      <VideoModal
        video={selectedVideo}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

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

  // Use custom layout for All category, grid layout for others
  if (category === "All") {
    return <AllVideosCarousel videos={videos} />;
  }

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
                key={`${category}-${video.id}`}
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

"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
import Image from "next/image";
import { InfiniteMovingCards } from "./allmovcards";
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
  Typography: [
    {
      id: 1,
      title: "Dynamic Promo Typography",
      description: "Glowing neon text animation with urban backdrop",

      thumbnail: "/images/portfolio/video-editing/typo1.jpg",
      videoUrl: "https://www.youtube.com/watch?v=AY_PWpfAt_M",
      category: "Typography",
    },
    {
      id: 2,
      title: "Dynamic Promo Typography",
      description: "Glowing neon text animation with urban backdrop",

      thumbnail: "/images/portfolio/video-editing/typo3.jpg",
      videoUrl: "https://www.youtube.com/watch?v=qfhxIhswYRU",
      category: "Typography",
    },

    {
      id: 3,
      title: "Dynamic Promo Typography",
      description: "Glowing neon text animation with urban backdrop",

      thumbnail: "/images/portfolio/video-editing/typo2.jpg",
      videoUrl: "https://www.youtube.com/watch?v=NkXqqwW48rY",
      category: "Typography",
    },
    {
      id: 4,
      title: "Dynamic Promo Typography",
      description: "Glowing neon text animation with urban backdrop",

      thumbnail: "/images/portfolio/video-editing/typo4.jpg",
      videoUrl: "https://www.youtube.com/watch?v=VY-OfO7U1xQ",
      category: "Typography",
    },
  ],
  Wedding: [
    {
      id: 1,
      title: "Rhythmic Text Animation",
      description: "Text synchronized to music rhythm with dynamic movement",

      thumbnail: "/images/portfolio/video-editing/wed2.jpg",
      videoUrl: "https://www.youtube.com/watch?v=TIOG22vi5Vc&feature=youtu.be",
      category: "Wedding",
    },
    {
      id: 2,
      title: "3D Kinetic Words",
      description: "Three-dimensional text moving through virtual space",

      thumbnail: "/images/portfolio/video-editing/wed1.jpg",
      videoUrl: "https://www.youtube.com/watch?v=vRulY2oo65M",
      category: "Wedding",
    },
    {
      id: 3,
      title: "3D Kinetic Words",
      description: "Three-dimensional text moving through virtual space",

      thumbnail: "/images/portfolio/video-editing/wed6.jpg",
      videoUrl: "https://www.youtube.com/watch?v=kQZ4N2vsLMM",
      category: "Wedding",
    },
    {
      id: 4,
      title: "Best promo",
      description: "Three-dimensional text moving through virtual space",

      thumbnail: "/images/portfolio/video-editing/wed3.jpg",
      videoUrl: "https://www.youtube.com/watch?v=ZERRulxpUyM",
      category: "Wedding",
    },
    {
      id: 5,
      title: "New weddding",
      description: "Three-dimensional text moving through virtual space",

      thumbnail: "/images/portfolio/video-editing/wed4.jpg",
      videoUrl: "https://www.youtube.com/watch?v=-so9sXCGEPI",
      category: "Wedding",
    },
    {
      id: 6,
      title: "3D Words",
      description: "Three-dimensional text moving through virtual space",

      thumbnail: "/images/portfolio/video-editing/wed5.jpg",
      videoUrl: "https://www.youtube.com/watch?v=x0r_A6jQtiE",
      category: "Wedding",
    },
    {
      id: 7,
      title: "3D Kinetic Words",
      description: "Three-dimensional text moving through virtual space",

      thumbnail: "/images/portfolio/video-editing/wed7.jpg",
      videoUrl: "https://www.youtube.com/watch?v=qpc2aVlbV3U",
      category: "Wedding",
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
      category: "Promo",
    },
    {
      id: 2,
      title: "Chic Runway Highlights",
      description:
        "A bold and stylish promo capturing the essence of modern runway fashion.",
      thumbnail: "/images/portfolio/video-editing/story-fra.jpg",
      videoUrl: "https://www.youtube.com/watch?v=rzGYMXeTpqc",
      category: "Promo",
    },
  ],
  RealEstate: [
    {
      id: 1,
      title: "Chic Runway Highlights",
      description:
        "A bold and stylish promo capturing the essence of modern runway fashion.",
      thumbnail: "/images/portfolio/video-editing/real1.jpg",
      videoUrl: "https://www.youtube.com/watch?v=ei0lbYPYyN4",
      category: "RealEstate",
    },
    {
      id: 2,
      title: "Chic Runway Highlights",
      description:
        "A bold and stylish promo capturing the essence of modern runway fashion.",
      thumbnail: "/images/portfolio/video-editing/real2.jpg",
      videoUrl: "https://www.youtube.com/watch?v=2AtsQrYLLhs",
      category: "RealEstate",
    },
    {
      id: 3,
      title: "Chic Runway Highlights",
      description:
        "A bold and stylish promo capturing the essence of modern runway fashion.",
      thumbnail: "/images/portfolio/video-editing/real3.jpg",
      videoUrl: "https://www.youtube.com/watch?v=HCv95_5BvCk",
      category: "RealEstate",
    },
    {
      id: 4,
      title: "Chic Runway Highlights",
      description:
        "A bold and stylish promo capturing the essence of modern runway fashion.",
      thumbnail: "/images/portfolio/video-editing/real4.jpg",
      videoUrl: "https://www.youtube.com/watch?v=OQVpVi1QCLM",
      category: "RealEstate",
    },
  ],
  Sports: [
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
  Stories: [
    {
      id: 1,
      title: "Story One",
      description:
        "A bold and stylish promo capturing the essence of modern runway fashion.",
      thumbnail: "/images/portfolio/video-editing/newtre.jpg",
      videoUrl: "https://www.youtube.com/shorts/QTjtgbkITew",
      category: "Stories",
    },
    {
      id: 2,
      title: "Fashion Story",
      description:
        "A bold and stylish promo capturing the essence of modern runway fashion.",
      thumbnail: "/images/portfolio/video-editing/fastre.jpg",
      videoUrl: "https://www.youtube.com/shorts/aaN7JC4iH4U",
      category: "Stories",
    },
    {
      id: 3,
      title: "Real estate promo story",
      description:
        "A bold and stylish promo capturing the essence of modern runway fashion.",
      thumbnail: "/images/portfolio/video-editing/respro.jpg",
      videoUrl: "https://www.youtube.com/shorts/1jn7qrG0JXk",
      category: "Stories",
    },
    {
      id: 4,
      title: "Real estate promo 2 story",
      description:
        "A bold and stylish promo capturing the essence of modern runway fashion.",
      thumbnail: "/images/portfolio/video-editing/comoff.jpg",
      videoUrl: "https://www.youtube.com/shorts/BPpeZK35YCU",
      category: "Stories",
    },
    {
      id: 5,
      title: "Fitness story",
      description:
        "A bold and stylish promo capturing the essence of modern runway fashion.",
      thumbnail: "/images/portfolio/video-editing/fit2.jpg",
      videoUrl: "https://www.youtube.com/shorts/WlWTmWZOQNg",
      category: "Stories",
    },
    {
      id: 6,
      title: "Fitness 2 story",
      description:
        "A bold and stylish promo capturing the essence of modern runway fashion.",
      thumbnail: "/images/portfolio/video-editing/fit1.jpg",
      videoUrl: "https://www.youtube.com/shorts/sXXX638WfCM",
      category: "Stories",
    },
    {
      id: 7,
      title: "Fashion Story 2",
      description:
        "A bold and stylish promo capturing the essence of modern runway fashion.",
      thumbnail: "/images/portfolio/video-editing/fesal.jpg",
      videoUrl: "https://www.youtube.com/shorts/kclhtOd398k",
      category: "Stories",
    },
    {
      id: 8,
      title: "Wedding Story 1",
      description:
        "A bold and stylish promo capturing the essence of modern runway fashion.",
      thumbnail: "/images/portfolio/video-editing/fesal.jpg",
      videoUrl: "https://www.youtube.com/shorts/W9l1vN0YwE",
      category: "Stories",
    },
    {
      id: 9,
      title: "Wedding 2",
      description:
        "A bold and stylish promo capturing the essence of modern runway fashion.",
      thumbnail: "/images/portfolio/video-editing/fesal.jpg",
      videoUrl: "https://www.youtube.com/shorts/5WGPrHWCIZE",
      category: "Stories",
    },
    {
      id: 10,
      title: "Wedding 3",
      description:
        "A bold and stylish promo capturing the essence of modern runway fashion.",
      thumbnail: "/images/portfolio/video-editing/fesal.jpg",
      videoUrl: "https://www.youtube.com/shorts/7YR6G0bK6J8",
      category: "Stories",
    },
    {
      id: 11,
      title: "Wedding 4",
      description:
        "A bold and stylish promo capturing the essence of modern runway fashion.",
      thumbnail: "/images/portfolio/video-editing/fesal.jpg",
      videoUrl: "https://www.youtube.com/shorts/KzuewjKhyjI",
      category: "Stories",
    },
    {
      id: 12,
      title: "Wedding 5",
      description:
        "A bold and stylish promo capturing the essence of modern runway fashion.",
      thumbnail: "/images/portfolio/video-editing/fesal.jpg",
      videoUrl: "https://www.youtube.com/shorts/8Q2bsQVOpc0",
      category: "Stories",
    },
    {
      id: 13,
      title: "Wedding 6",
      description:
        "A bold and stylish promo capturing the essence of modern runway fashion.",
      thumbnail: "/images/portfolio/video-editing/fesal.jpg",
      videoUrl: "https://www.youtube.com/shorts/FIpGMSkvamM",
      category: "Stories",
    },
    {
      id: 14,
      title: "Wedding 7",
      description:
        "A bold and stylish promo capturing the essence of modern runway fashion.",
      thumbnail: "/images/portfolio/video-editing/fesal.jpg",
      videoUrl: "https://www.youtube.com/shorts/1zQGe6EAe-I",
      category: "Stories",
    },
    {
      id: 15,
      title: "Travel 1",
      description:
        "A bold and stylish promo capturing the essence of modern runway fashion.",
      thumbnail: "/images/portfolio/video-editing/fesal.jpg",
      videoUrl: "https://www.youtube.com/shorts/PvUC6kMzfhQ",
      category: "Stories",
    },
    {
      id: 16,
      title: "Travel 2",
      description:
        "A bold and stylish promo capturing the essence of modern runway fashion.",
      thumbnail: "/images/portfolio/video-editing/fesal.jpg",
      videoUrl: "https://www.youtube.com/shorts/htoI5kGHxWY",
      category: "Stories",
    },
    {
      id: 17,
      title: "New 1",
      description:
        "A bold and stylish promo capturing the essence of modern runway fashion.",
      thumbnail: "/images/portfolio/video-editing/fesal.jpg",
      videoUrl: "https://www.youtube.com/shorts/F5QGcd3b8Xk",
      category: "Stories",
    },
    {
      id: 18,
      title: "New 2",
      description:
        "A bold and stylish promo capturing the essence of modern runway fashion.",
      thumbnail: "/images/portfolio/video-editing/fesal.jpg",
      videoUrl: "https://youtube.com/shorts/bCB6OYfd_lU?feature=share",
      category: "Stories",
    },
    {
      id: 19,
      title: "New 3",
      description:
        "A bold and stylish promo capturing the essence of modern runway fashion.",
      thumbnail: "/images/portfolio/video-editing/fesal.jpg",
      videoUrl: "https://youtube.com/shorts/gTTLMMBpPd8?feature=share",
      category: "Stories",
    },
    {
      id: 20,
      title: "New 4",
      description:
        "A bold and stylish promo capturing the essence of modern runway fashion.",
      thumbnail: "/images/portfolio/video-editing/fesal.jpg",
      videoUrl: "https://youtube.com/shorts/4E2HmtFNLJY?feature=share",
      category: "Stories",
    },
    {
      id: 21,
      title: "New 5",
      description:
        "A bold and stylish promo capturing the essence of modern runway fashion.",
      thumbnail: "/images/portfolio/video-editing/fesal.jpg",
      videoUrl: "https://youtube.com/shorts/nZhCu_1HV5Q?feature=share",
      category: "Stories",
    },
    {
      id: 22,
      title: "New 6",
      description:
        "A bold and stylish promo capturing the essence of modern runway fashion.",
      thumbnail: "/images/portfolio/video-editing/fesal.jpg",
      videoUrl: "https://youtube.com/shorts/KbFiR_-j6oc?feature=share",
      category: "Stories",
    },
  ],
  Fashion: [
    {
      id: 1,
      title: "Fashion promo",
      description:
        "A bold and stylish promo capturing the essence of modern runway fashion.",
      thumbnail: "/images/portfolio/video-editing/fas-pro1.jpg",
      videoUrl: "https://www.youtube.com/watch?v=292WH5DYAms",
      category: "Fashion",
    },
    {
      id: 2,
      title: "Fashion promo",
      description:
        "A bold and stylish promo capturing the essence of modern runway fashion.",
      thumbnail: "/images/portfolio/video-editing/fas-pro.jpg",
      videoUrl: "https://www.youtube.com/watch?v=qnNo8F4Cbzo",
      category: "Fashion",
    },
    {
      id: 3,
      title: "Fashion Promo",
      description:
        "A bold and stylish promo capturing the essence of modern runway fashion.",
      thumbnail: "/images/portfolio/video-editing/fas-pro2.jpg",
      videoUrl: "https://www.youtube.com/watch?v=uCiQjHgBdOM",
      category: "Fashion",
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

import Skeleton from "@/components/ui/GridSkeleton";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export const grid_items: GridItem[] = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: Skeleton,
    icon: IconClipboardCopy,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: Skeleton,
    icon: IconFileBroken,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: Skeleton,
    icon: IconSignature,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: Skeleton,
    icon: IconTableColumn,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: Skeleton,
    icon: IconArrowWaveRightUp,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: Skeleton,
    icon: IconBoxAlignTopLeft,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: Skeleton,
    icon: IconBoxAlignRightFilled,
  },
];

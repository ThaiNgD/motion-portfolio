import Skeleton from "@/components/ui/GridSkeleton";
import {
  IconArrowWaveRightUp,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export const grid_items: GridItem[] = [
  {
    title: "Hobby",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: Skeleton,
    icon: IconClipboardCopy,
  },
  {
    title: "Experience",
    description: "Dive into the transformative power of technology.",
    header: Skeleton,
    icon: IconFileBroken,
  },
  {
    title: "Education",
    description: "Discover the beauty of thoughtful and functional design.",
    header: Skeleton,
    icon: IconSignature,
  },
  {
    title: "About Me",
    description: "Experience the thrill of bringing ideas to life.",
    header: Skeleton,
    icon: IconBoxAlignTopLeft,
  },
  {
    title: "Skill",
    description:
      "Understand the impact of effective communication in our lives.",
    header: Skeleton,
    icon: IconTableColumn,
  },
  {
    title: "Project",
    description: "Join the quest for understanding and enlightenment.",
    header: Skeleton,
    icon: IconArrowWaveRightUp,
  },
];

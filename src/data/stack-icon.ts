import { IconType } from "react-icons";
import { FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiBootstrap,
  SiDjango,
  SiElectron,
  SiExpress,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiSqlite,
  SiTypescript,
} from "react-icons/si";
export const stack_icon: Record<string, IconType> = {
  react: FaReact,
  next: SiNextdotjs,
  tailwind: RiTailwindCssFill,
  nestjs: SiNestjs,
  django: SiDjango,
  typescript: SiTypescript,
  electronjs: SiElectron,
  mysql: SiMysql,
  postgre: SiPostgresql,
  sqlite: SiSqlite,
  bootstrap: SiBootstrap,
  express: SiExpress,
};

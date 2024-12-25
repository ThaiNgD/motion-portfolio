import { Icon, IconProps } from "@tabler/icons-react";
import { ForwardRefExoticComponent, RefAttributes, useMemo } from "react";

const IconHolder = ({
  icon,
}: {
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
}) => {
  const Icon = useMemo(() => icon, [icon]);

  return <Icon />;
};

export default IconHolder;

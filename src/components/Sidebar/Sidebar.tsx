import { MouseEvent, ReactNode } from "react";

import "./Sidebar.css";

interface Props {
  children: ReactNode;
  onBackdropClick: () => void;
}

const Sidebar: React.FunctionComponent<Props> = ({
  children,
  onBackdropClick,
}: Props) => {
  const onSidebarClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };
  return (
    <div className="backdrop" onClick={onBackdropClick}>
      <div className="takeOver" onClick={onSidebarClick}>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;

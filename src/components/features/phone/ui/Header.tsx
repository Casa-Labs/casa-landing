import Title from "@/components/ui/Title";
import { Bell } from "lucide-react";

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between rounded-t-sm border-b-2 px-4 py-1">
      <Title classStyle="text-2xl" />
      <Bell size={20} />
    </div>
  );
};

export default Header;

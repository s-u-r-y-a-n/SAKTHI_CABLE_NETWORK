import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdReportGmailerrorred } from "react-icons/md";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { MdLogout } from "react-icons/md";


export const IconsObject = {
  burgerMenu: (size = 25) => <GiHamburgerMenu size={size} />,
  dashboardIcon: (size = 25) => <MdOutlineSpaceDashboard size={size} />,
  accountIcon: (size = 25) => <VscAccount size={size} />,
  customerIcon: (size = 25) => <RiCustomerService2Fill size={size} />,
  complaintIcon: (size = 25) => <MdReportGmailerrorred size={size} />,
  reportIcon: (size = 25) => <MdOutlineCurrencyRupee size={size} />,
  logoutIcon: (size = 25) => <MdLogout size={size} />,
};

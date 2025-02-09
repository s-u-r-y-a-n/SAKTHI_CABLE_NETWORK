import { IconsObject } from "../assets/Icons/Icons";

export const menus = [
    { menuName: "Dashboard", menuIcon: IconsObject.dashboardIcon(27), path: "/home/dashboard" },
    {
        menuName: "Profile", menuIcon: IconsObject.accountIcon(27),
        subMenus: [
            { subMenuName: "My Account", path: "/home/my-account" },
            { subMenuName: "Update Password", path: "/home/update-password" }]
    },
    {
        menuName: "Customers", menuIcon: IconsObject.customerIcon(27),
        subMenus: [
            { subMenuName: "All Customers", path: "/home/all-customers" },
            { subMenuName: "New Customer", path: "/home/new-customer" },
            { subMenuName: "Customer Contact", path: "/home/customer-contact" },
            { subMenuName: "Customer Feedback", path: "/home/customer-feedback" },
        ]
    },
    { menuName: "Complaints", menuIcon: IconsObject.complaintIcon(27), path: "/home/complaints" },
    { menuName: "Reports", menuIcon: IconsObject.reportIcon(27), path: "/home/reports" }
];

"All Customers", "New Customer", "Customer Contact", "Customer Feedback"
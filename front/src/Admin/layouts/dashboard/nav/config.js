import SvgColor from "../../../components/svg-color";

const icon = (name) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);
const privilege = true;
const navConfig = [
  {
    show: true,
    title: "dashboard",
    path: "/app",
    icon: icon("ic_analytics"),
  },
  {
    show: privilege,
    title: "Add new user",
    path: "/newUser",
    icon: icon("ic_lock"),
  },
  {
    show: privilege,
    title: "users",
    path: "/user",
    icon: icon("ic_user"),
  },
  {
    show: privilege,
    title: "Sessions",
    path: "/sessions",
    icon: icon("ic_blog"),
  },
  {
    show: true,
    title: "Events",
    path: "/events",
    icon: icon("ic_blog"),
  },
  {
    show: true,
    title: "Blog",
    path: "/blogs",
    icon: icon("ic_blog"),
  },
];

export default navConfig;

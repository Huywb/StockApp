import { IoMdHome } from "react-icons/io";
import { FaImage } from "react-icons/fa6";
import { BiSolidVideos } from "react-icons/bi";
import { FaThList } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
export const MenuList = [
    {
        name:'Home',
        icon: <IoMdHome></IoMdHome>,
        route: '/'
    },
    {
        name:'Photos',
        icon: <FaImage></FaImage>,
        route: '/photo'
    },
    {
        name:'Videos',
        icon: <BiSolidVideos></BiSolidVideos>,
        route: '/video'
    },
    {
        name:'Collections',
        icon: <FaThList></FaThList>,
        route: '/collection'
    },
    {
        name:'Favorite',
        icon: <FaHeart></FaHeart>,
        route: '/favorite'
    }
]
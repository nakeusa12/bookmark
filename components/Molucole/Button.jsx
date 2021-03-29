const Button = ({bgColor, bgColorHover, name}) => {
    return ( 
        <button className={`px-6 py-2 cursor-pointer text-white transition-all duration-300 ${bgColor} rounded shadow-lg hover:${bgColorHover}`}>
            {name}
        </button>
     );
}
 
export default Button;
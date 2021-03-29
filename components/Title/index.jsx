const Title = ({title, subtitle}) => {
    return ( 
        <>
          <h2 className="text-4xl font-semibold text-center">{title}</h2>
            <p className="w-full text-xl text-center text-gray-500 md:w-2/4">
             {subtitle}
            </p>
        </>
     );
}
 
export default Title;
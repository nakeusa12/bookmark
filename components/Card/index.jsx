import Button from "../Molucole/Button"

const Card = ({marginTop, marginTopD, image, name, version}) => {
    return ( 
        <>
            <div className={`w-full rounded-md shadow-xl md:w-1/4 h-96 ${marginTop} md:${marginTopD}`}>
              <div className="flex flex-col items-center py-10">
                  <div className="w-32 h-32">
                    <img src={image} className="object-contain w-full h-full" alt=""/>
                  </div>
                  <h4 className="mt-4 text-xl font-bold">{name}</h4>
                  <p className="mt-2 text-sm font-medium text-gray-500">Minimum version {version}</p>
              </div>
              <div className="flex items-center justify-center py-6 border-t-2 border-gray-200 border-dashed">
                <Button bgColor="bg-blue-600" bgColorHover="bg-blue-800" name="Add & Install Extention" />
              </div>
            </div>
        </>
     );
}
 
export default Card;
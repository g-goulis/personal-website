type Props = {
    imageURL: string;
    altText?: string;
};

/**
 * The main container for the page
 *
 * @param children
 * @constructor
 */
const Banner = ({ imageURL, altText = "Banner image"}: Props) => {
    return (
        <img src={imageURL} alt={altText} className={"w-full h-96 object-cover opacity-80"}/>
    );
};

export default Banner;

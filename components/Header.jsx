import Image from "next/image";
function Header({title}){
    return (
        <div className="hero">
            <h1>{title ? title : "Default title"}</h1>
            <Image className="heroImage"  layout="fill" src="/images/microscopio.jpg"/>
        </div>
    );

}

export default Header;
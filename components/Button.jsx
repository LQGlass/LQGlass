import Link from "next/link";

const Button = (props) => {
    return (

        <Link href={props.url}><button className={props.class}>  {props.content}</button></Link>

    )
}

export default Button;
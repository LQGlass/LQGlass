import Link from "next/link";

const Button = (props) => {
    return (

        <button className={props.class}> <Link href={props.url}>{props.content}</Link></button>

    )
}

export default Button;
import Link from "next/link"
export default function Header(){
return(
    <div>
        <ul className="flex gap-5 bg-orange-600">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>       
        <li>
          <Link href="/contact-us">contact-us</Link>
        </li>
      </ul>
    </div>
)
};
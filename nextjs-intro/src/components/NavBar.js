import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
const router = useRouter();

  return <nav>
    <Link href="/" className="hello">
      <span style={{ color: router.pathname === '/' ? 'black': 'gray'}}>Home</span>
    </Link>
    <Link href="/about">
      <span style={{ color: router.pathname === '/about' ? 'black': 'gray'}}>About</span>
    </Link>
  </nav>
}
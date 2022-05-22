import React from 'react'
import Link from 'next/link';

function Layout({children}) {
  return (
    <div>
      <Link href="/home">
        <a>홈</a>
      </Link>
      <Link href="/about">
        <a>어바웃</a>
      </Link>
      <div>{children}</div>
    </div>
  )
}

export default Layout;

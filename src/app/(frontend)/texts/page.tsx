import Link from 'next/link'
import React from 'react'
import './texts.css'

export default async function TextsPage() {
  return (
    <div className="texts-wrapper">
      <Link href="/" className="back-arrow">
        ←
      </Link>
      <h2>texts</h2>
      <div className="texts-links">
        <Link href="/texts/uhr">
          Harald Uhr
          <br /> <span>GENUGGEKRIEGT</span>
        </Link>
        <Link href="/texts/hirsch">
          Dr. Thomas Hirsch
          <br /> <span>In actual fact (likenesses)</span>
        </Link>
        <Link href="/texts/aberle">
          Christian Aberle
          <br />
          <span>Handgeblasene Mundstücke</span>
        </Link>
        <Link href="/texts/donauer">
          Carla Donauer
          <br /> <span>not one thing that you want is upstream</span>
        </Link>
        <Link href="/texts/heym">
          Michael Heym
          <br /> <span>Das Unsichtbare im Blick</span>
        </Link>
      </div>
    </div>
  )
}

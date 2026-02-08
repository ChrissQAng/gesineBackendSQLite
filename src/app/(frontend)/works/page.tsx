import Link from 'next/link'
import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import './works.css'

export default async function WorksPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // Fetch all art objects ordered by orderOfObjects
  const artObjects = await payload.find({
    collection: 'artObjects',
    sort: 'orderOfObjects',
    limit: 0,
  })

  return (
    <div className="worksWrapper">
      <Link href="/" className="back-arrow">
        ←
      </Link>
      <h2>works</h2>
      <div className="tileGrid">
        {artObjects.docs.map((item) => (
          <Link key={item.id} href={`/details/${item.id}`} className="tile-wrapper">
            {item.images && item.images[0] && item.images[0].image && (
              <img
                src={
                  typeof item.images[0].image === 'string'
                    ? item.images[0].image
                    : (item.images[0].image as any).url || ''
                }
                alt="Artwork"
              />
            )}
          </Link>
        ))}
        {artObjects.docs.length === 0 && <p>No works available</p>}
      </div>
    </div>
  )
}

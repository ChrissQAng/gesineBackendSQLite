import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import './about.css'

export default async function AboutPage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // Fetch all vita sections ordered by 'order' field
  const vitaSections = await payload.find({
    collection: 'vitaSections',
    sort: 'order',
    limit: 100,
  })

  return (
    <div className="about-wrapper">
      <video autoPlay playsInline loop muted className="background-video">
        <source src="/background-video.mp4" type="video/mp4" />
        Video not supported
      </video>
      <div className="content">
        <a href="/" className="back-arrow">
          ←
        </a>
        <h2>about</h2>

        {vitaSections.docs.map((section) => (
          <div key={section.id} className="vita-section">
            <h4>{section.title}</h4>
            {Array.isArray(section.entries) &&
              section.entries
                .sort((a, b) => (a.order || 0) - (b.order || 0))
                .map((entry, index) => {
                  const hasYear = entry.yearOrPeriod && entry.yearOrPeriod.trim() !== ''
                  return (
                    <div key={index} className={`table-item ${hasYear ? '' : 'no-year'}`}>
                      {hasYear && <p>{entry.yearOrPeriod}</p>}
                      <div
                        className="entry-text"
                        dangerouslySetInnerHTML={{
                          __html:
                            typeof entry.text === 'string'
                              ? entry.text
                              : entry.text?.root?.children
                                  ?.map(
                                    (child: any) =>
                                      child.children?.map((c: any) => c.text).join('') || '',
                                  )
                                  .join('<br/>') || '',
                        }}
                      />
                    </div>
                  )
                })}
          </div>
        ))}
      </div>
    </div>
  )
}

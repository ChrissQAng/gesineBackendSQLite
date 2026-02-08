import type { CollectionConfig } from 'payload'

export const VitaSections: CollectionConfig = {
  slug: 'vitaSections',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'order'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Section Title',
      admin: {
        description: 'e.g., "about", "education", "teaching", "grants, prizes, residencies"',
      },
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      defaultValue: 0,
      label: 'Display Order',
      admin: {
        description: 'Sections are displayed in ascending order (0 first)',
      },
    },
    {
      name: 'entries',
      type: 'array',
      label: 'CV Entries',
      labels: {
        singular: 'Entry',
        plural: 'Entries',
      },
      admin: {
        description: 'Individual CV entries within this section',
      },
      fields: [
        {
          name: 'yearOrPeriod',
          type: 'text',
          label: 'Year or Period',
          admin: {
            description:
              'Optional. e.g., "2024", "2018-2017", leave empty to continue previous year',
          },
        },
        {
          name: 'text',
          type: 'richText',
          required: true,
          label: 'Description',
        },
        {
          name: 'order',
          type: 'number',
          defaultValue: 0,
          label: 'Entry Order',
        },
      ],
    },
  ],
}

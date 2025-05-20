import { defineConfig } from 'astro/config';
import NetlifyCMS from 'astro-netlify-cms';

export default defineConfig({
  integrations: [
    NetlifyCMS({
      config: {
        backend: {
          name: 'git-gateway',
          branch: 'main',
        },
        media_folder: 'public/assets/blog',
        public_folder: '/assets/blog',
        collections: [
          {
            name: 'posts',
            label: 'Blog Posts',
            folder: 'src/pages/posts',
            create: true,
            delete: true,
            extension: 'md',
            format: 'frontmatter',
            fields: [
              { name: 'title', widget: 'string' },
              { name: 'publishDate', widget: 'datetime' },
              { name: 'author', widget: 'string', required: false },
              { name: 'description', widget: 'string', required: false },
              { name: 'body', widget: 'markdown' },
              {
                name: 'layout',
                widget: 'hidden',
                default: '../../layouts/BlogPost.astro',
              },
            ],
          },
        ],
      },
      previewStyles: ['/src/styles/global.css'],
    }),
  ],
});

module.exports = {
  NOT_FOUND_ROUTE: 1,
  STATIC_ROUTE: 2,
  PAGED_ROUTE: 3,
  PAGED_TEMPLATE: 4,
  PAGED_STATIC_TEMPLATE: 5,
  STATIC_TEMPLATE_ROUTE: 6,
  DYNAMIC_TEMPLATE_ROUTE: 7,

  NORMAL_PLUGIN: 'plugin',
  SOURCE_PLUGIN: 'source',
  TRANSFORMER_PLUGIN: 'transformer',

  PER_PAGE: 25,

  SUPPORTED_IMAGE_TYPES: ['.png', '.jpeg', '.jpg', '.gif', '.svg', '.webp'],

  BOOTSTRAP_CONFIG: 'config',
  BOOTSTRAP_SOURCES: 'sources',
  BOOTSTRAP_GRAPHQL: 'graphql',
  BOOTSTRAP_PAGES: 'pages',
  BOOTSTRAP_CODE: 'code',

  internalRE: /^internal\:\/\//,
  transformerRE: /(?:^@?gridsome[/-]|\/)transformer-([\w-]+)/,

  NODE_FIELDS: ['id', 'typeName', 'title', 'slug', 'path', 'date', 'content', 'excerpt'],
  PAGE_FIELDS: ['id', 'typeName', 'path', 'slug'],

  ISO_8601_FORMAT: [
    'YYYY',
    'YYYY-MM',
    'YYYY-MM-DD',
    'YYYYMMDD',

    // Local Time
    'YYYY-MM-DDTHH',
    'YYYY-MM-DDTHH:mm',
    'YYYY-MM-DDTHHmm',
    'YYYY-MM-DDTHH:mm:ss',
    'YYYY-MM-DDTHHmmss',
    'YYYY-MM-DDTHH:mm:ss.SSS',
    'YYYY-MM-DDTHHmmss.SSS',

    // Coordinated Universal Time (UTC)
    'YYYY-MM-DDTHHZ',
    'YYYY-MM-DDTHH:mmZ',
    'YYYY-MM-DDTHHmmZ',
    'YYYY-MM-DDTHH:mm:ssZ',
    'YYYY-MM-DDTHHmmssZ',
    'YYYY-MM-DDTHH:mm:ss.SSSZ',
    'YYYY-MM-DDTHHmmss.SSSZ',

    'YYYY-[W]WW',
    'YYYY[W]WW',
    'YYYY-[W]WW-E',
    'YYYY[W]WWE',
    'YYYY-DDDD',
    'YYYYDDDD'
  ]
}


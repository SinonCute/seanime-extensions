# API Response Samples

This document provides sample responses for all API endpoints in AniMapper.

## Table of Contents

- [Public Endpoints](#public-endpoints)
  - [Search & Discovery](#search--discovery)
  - [Media Metadata](#media-metadata)
  - [Streaming](#streaming)
- [Admin Endpoints](#admin-endpoints)
  - [Statistics](#statistics)
  - [Crawler Management](#crawler-management)
  - [Media Management](#media-management)
  - [Cache Management](#cache-management)

---

## Public Endpoints

### Search & Discovery

#### GET `/api/v1/search`

**Request Example:**
```
GET /api/v1/search?title=attack&mediaType=ANIME&limit=10&offset=0
```

**Success Response (200 OK):**
```json
{
  "success": true,
  "results": [
    {
      "id": 16498,
      "mediaType": "ANIME",
      "titles": {
        "en": "Attack on Titan",
        "ja": "進撃の巨人",
        "vi": "Cuộc tấn công của Titan"
      },
      "images": {
        "coverXl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-C7FPm3m59CyP.jpg",
        "coverLg": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16498-C7FPm3m59CyP.jpg",
        "coverMd": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx16498-C7FPm3m59CyP.jpg",
        "coverColor": "#E4E4E4",
        "bannerUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/16498-8YHjVabJfCr2.jpg"
      },
      "status": "FINISHED",
      "season": "SPRING",
      "seasonYear": 2013,
      "startDate": "2013-04-07",
      "format": "TV"
    }
  ],
  "total": 1,
  "limit": 10,
  "offset": 0,
  "hasNextPage": false
}
```

**Error Response (400 Bad Request):**
```json
{
  "success": false,
  "message": "Invalid season: SUMMER. Must be one of: WINTER, SPRING, SUMMER, FALL",
  "code": "INVALID_PARAMETER"
}
```

---

#### GET `/api/v1/autocomplete`

**Request Example:**
```
GET /api/v1/autocomplete?q=attack&mediaType=ANIME&limit=10
```

**Success Response (200 OK):**
```json
{
  "success": true,
  "query": "attack",
  "suggestions": [
    {
      "id": 16498,
      "title": "Attack on Titan",
      "mediaType": "ANIME"
    },
    {
      "id": 11061,
      "title": "Hunter x Hunter (2011)",
      "mediaType": "ANIME"
    }
  ]
}
```

**Error Response (400 Bad Request):**
```json
{
  "success": false,
  "message": "Query parameter 'q' is required and must not be empty",
  "code": "MISSING_PARAMETER"
}
```

---

#### GET `/api/v1/autocomplete/status`

**Success Response (200 OK):**
```json
{
  "success": true,
  "meilisearchEnabled": true,
  "fallbackEnabled": true
}
```

---

### Media Metadata

#### GET `/api/v1/metadata`

**Request Example:**
```
GET /api/v1/metadata?id=16498
```

**Success Response (200 OK):**
```json
{
  "success": true,
  "result": {
    "id": 16498,
    "mediaType": "ANIME",
    "format": "TV",
    "status": "FINISHED",
    "source": "MANGA",
    "countryOfOrigin": "JP",
    "startDate": "2013-04-07",
    "endDate": "2013-09-29",
    "season": "SPRING",
    "seasonYear": 2013,
    "totalUnits": 25,
    "unitDurationMin": 24,
    "hashtag": "#shingeki",
    "createdAt": 1640995200000,
    "updatedAt": 1640995200000,
    "titles": {
      "en": "Attack on Titan",
      "ja": "進撃の巨人",
      "vi": "Cuộc tấn công của Titan"
    },
    "descriptions": {
      "en": "Several hundred years ago, humans were nearly exterminated by titans...",
      "vi": "Vài trăm năm trước, loài người gần như bị tuyệt chủng bởi các Titan..."
    },
    "images": {
      "coverXl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-C7FPm3m59CyP.jpg",
      "coverLg": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16498-C7FPm3m59CyP.jpg",
      "coverMd": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx16498-C7FPm3m59CyP.jpg",
      "coverColor": "#E4E4E4",
      "bannerUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/16498-8YHjVabJfCr2.jpg"
    },
    "trailer": {
      "site": "youtube",
      "trailerId": "M_UfrS3q6yI",
      "thumbnail": "https://img.youtube.com/vi/M_UfrS3q6yI/maxresdefault.jpg"
    },
    "relations": [
      {
        "relatedMediaId": 16499,
        "relationType": "SEQUEL"
      }
    ],
    "genres": [
      {
        "id": 1,
        "name": "Action"
      },
      {
        "id": 2,
        "name": "Drama"
      }
    ],
    "studios": [
      {
        "id": 1,
        "name": "Wit Studio",
        "isAnimationStudio": true,
        "isMain": true
      }
    ],
    "tags": [
      {
        "id": 1,
        "name": "Gore",
        "description": "Contains graphic violence and gore"
      }
    ],
    "externalIds": [
      {
        "source": "ANILIST",
        "externalKey": null,
        "externalInt": 16498
      },
      {
        "source": "MYANIMELIST",
        "externalKey": null,
        "externalInt": 16498
      }
    ],
    "units": [
      {
        "id": 1,
        "unitKind": "EPISODE",
        "seasonNumber": 1,
        "number": 1,
        "absoluteNumber": 1,
        "releaseDate": "2013-04-07",
        "durationMinutes": 24,
        "imageUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/episode/1.jpg",
        "titles": {
          "en": "To You, in 2000 Years",
          "ja": "二千年後の君へ"
        },
        "descriptions": {
          "en": "Eren Yeager lives in Shiganshina District..."
        },
        "seasonName": "Season 1",
        "externalIds": [
          {
            "source": "ANIZIP",
            "externalKey": null,
            "externalInt": 1
          }
        ]
      }
    ],
    "providers": {
      "ANIMEVIETSUB": {
        "providerMediaId": "shingeki-no-kyojin",
        "similarity": 95.5,
        "mappingType": "AUTO"
      }
    }
  }
}
```

**Error Response (404 Not Found):**
```json
{
  "success": false,
  "message": "Media not found for query: 99999",
  "code": "MEDIA_NOT_FOUND"
}
```

---

#### GET `/api/v1/metadata/batch`

**Request Example:**
```
GET /api/v1/metadata/batch?ids=16498,11061,1535
```

**Success Response (200 OK):**
```json
{
  "success": true,
  "results": [
    {
      "id": 16498,
      "mediaType": "ANIME",
      "format": "TV",
      "status": "FINISHED",
      "titles": {
        "en": "Attack on Titan"
      },
      "images": {
        "coverXl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-C7FPm3m59CyP.jpg"
      }
    },
    {
      "id": 11061,
      "mediaType": "ANIME",
      "format": "TV",
      "status": "FINISHED",
      "titles": {
        "en": "Hunter x Hunter (2011)"
      }
    }
  ],
  "found": 2,
  "requested": 3
}
```

**Error Response (400 Bad Request):**
```json
{
  "success": false,
  "message": "No valid IDs provided",
  "code": "INVALID_ID"
}
```

---

### Streaming

#### GET `/api/v1/stream/episodes`

**Request Example:**
```
GET /api/v1/stream/episodes?id=16498&provider=ANIMEVIETSUB&limit=10&offset=0
```

**Success Response (200 OK):**
```json
{
  "provider": "ANIMEVIETSUB",
  "limit": 10,
  "offset": 0,
  "total": 25,
  "hasNextPage": true,
  "episodes": [
    {
      "episodeNumber": "1",
      "episodeId": "shingeki-no-kyojin$12345"
    },
    {
      "episodeNumber": "2",
      "episodeId": "shingeki-no-kyojin$12346"
    },
    {
      "episodeNumber": "3",
      "episodeId": "shingeki-no-kyojin$12347"
    }
  ]
}
```

**Note for AnimeVietSub:**
- The `episodeId` field contains the `episodeData` format: `{mediaId}${episodeId}`
- This `episodeId` value should be used directly as the `episodeData` parameter when calling `/api/v1/stream/source`
- Example: If `episodeId` is `"shingeki-no-kyojin$12345"`, use it as: `GET /api/v1/stream/source?episodeData=shingeki-no-kyojin$12345&provider=ANIMEVIETSUB`
- Duplicate episode numbers are handled by appending suffixes (e.g., `"1163_1"`, `"1163_2"`) to maintain uniqueness

**Error Response (404 Not Found):**
```json
{
  "success": false,
  "message": "No mapping found for media ID 16498 and provider ANIMEVIETSUB",
  "code": "MAPPING_NOT_FOUND"
}
```

**Error Response (404 Not Found - No Episodes):**
```json
{
  "success": false,
  "message": "No episodes found for media ID: 16498",
  "code": "EPISODES_NOT_FOUND"
}
```

---

#### GET `/api/v1/stream/source`

**Request Example:**
```
GET /api/v1/stream/source?episodeData=episode-1-data-string&provider=ANIMEVIETSUB&server=DU
```

**Success Response (200 OK):**
```json
{
  "server": "DU",
  "type": "HLS",
  "corsProxyRequired": false,
  "proxyHeaders": null,
  "url": "https://api.animapper.com/api/v1/stream/source/m3u8/abc123def456"
}
```

**Error Response (400 Bad Request):**
```json
{
  "success": false,
  "message": "Provider INVALID is not supported for streaming",
  "code": "UNSUPPORTED_PROVIDER"
}
```

---

##### Special Case: AnimeVietSub Provider

AnimeVietSub has special handling for the source endpoint:

**1. Episode Data Format:**
The `episodeData` parameter for AnimeVietSub must follow a specific format:
```
{mediaId}${episodeId}
```
Example: `shingeki-no-kyojin$12345`

**2. Available Servers:**

| Server | Type | Description |
|--------|------|-------------|
| `DU` | HLS | High-quality HLS stream (default if no server specified) |
| `HDX` | EMBED | Embed player URL |

**3. DU Server (HLS) Response:**
When using the `DU` server, the response includes:
- **Type**: `HLS`
- **CORS Proxy Required**: `true`
- **Proxy Headers**: Includes `Referer` header with the AnimeVietSub base URL
- **URL**: Points to a cached M3U8 endpoint instead of the raw stream URL
  - Format: `/api/v1/stream/source/m3u8/{cacheKey}`
  - The cache key is a SHA-256 hash of the `episodeData`
  - M3U8 content is decrypted and cached for 24 hours

**Example Request:**
```
GET /api/v1/stream/source?episodeData=shingeki-no-kyojin$12345&provider=ANIMEVIETSUB&server=DU
```

**Example Response:**
```json
{
  "server": "DU",
  "type": "HLS",
  "corsProxyRequired": true,
  "proxyHeaders": {
    "Referer": "https://animevietsub.page"
  },
  "url": "/api/v1/stream/source/m3u8/a1b2c3d4e5f6..."
}
```

**4. HDX Server (Embed) Response:**
When using the `HDX` server, the response includes:
- **Type**: `EMBED`
- **CORS Proxy Required**: `false`
- **Proxy Headers**: `null`
- **URL**: Direct embed player URL

**Example Request:**
```
GET /api/v1/stream/source?episodeData=shingeki-no-kyojin$12345&provider=ANIMEVIETSUB&server=HDX
```

**Example Response:**
```json
{
  "server": "HDX",
  "type": "EMBED",
  "corsProxyRequired": false,
  "proxyHeaders": null,
  "url": "https://embed.example.com/player?id=12345"
}
```

**5. Server Selection Logic:**
- If no `server` parameter is provided, the system defaults to `DU` server
- If the preferred server is not available, it falls back to the first available server
- Server availability is determined by what the provider returns for that episode

**6. M3U8 Caching:**
- M3U8 content for DU server is automatically cached using SHA-256 hash of `episodeData`
- Cache duration: 24 hours
- Cache size limit: 1000 entries
- To retrieve cached M3U8 content directly, use: `GET /api/v1/stream/source/m3u8/{cacheKey}`

---

#### GET `/api/v1/stream/source/m3u8/{cacheKey}`

**Request Example:**
```
GET /api/v1/stream/source/m3u8/abc123def456
```

**Success Response (200 OK):**
- **Content-Type:** `application/vnd.apple.mpegurl`
- **Body:** Raw M3U8 playlist content

```
#EXTM3U
#EXT-X-VERSION:3
#EXT-X-TARGETDURATION:10
#EXTINF:10.0,
https://example.com/segment1.ts
#EXTINF:10.0,
https://example.com/segment2.ts
#EXT-X-ENDLIST
```

**Error Response (404 Not Found):**
```json
{
  "success": false,
  "message": "M3U8 content not found for cache key: abc123def456",
  "code": "RESOURCE_NOT_FOUND"
}
```

---

## Admin Endpoints

All admin endpoints require authentication via `X-API-Key` header or `Authorization` header with the `ADMIN_API_KEY` environment variable.

**Authentication Header Example:**
```
X-API-Key: your-admin-api-key
```

**Error Response (401 Unauthorized):**
```json
{
  "success": false,
  "message": "Unauthorized",
  "code": "UNAUTHORIZED"
}
```

---

### Statistics

#### GET `/api/v1/admin/stats`

**Success Response (200 OK):**
```json
{
  "success": true,
  "mediaStats": {
    "total": 50000,
    "releasing": 500,
    "finished": 45000,
    "notYetReleased": 2000,
    "cancelled": 100,
    "hiatus": 400
  },
  "mappingStats": {
    "total": 15000,
    "mappingsByProvider": {
      "ANIMEVIETSUB": 8000,
      "ANIMETVN": 5000,
      "DOCLN": 2000
    },
    "averageSimilarity": 92.5
  }
}
```

**Error Response (500 Internal Server Error):**
```json
{
  "success": false,
  "message": "Failed to get statistics: Database connection error",
  "code": "INTERNAL_ERROR"
}
```

---

#### GET `/api/v1/admin/mappings/stats`

**Request Example:**
```
GET /api/v1/admin/mappings/stats?provider=ANIMEVIETSUB
```

**Success Response (200 OK):**
```json
{
  "success": true,
  "provider": "ANIMEVIETSUB",
  "totalMappings": 8000,
  "averageSimilarity": 94.2
}
```

**Error Response (400 Bad Request):**
```json
{
  "success": false,
  "message": "Invalid provider: INVALID",
  "code": "INVALID_PROVIDER"
}
```

---

#### GET `/api/v1/admin/cache/stats`

**Success Response (200 OK):**
```json
{
  "success": true,
  "totalCaches": 5,
  "totalEntries": 1250,
  "totalHits": 50000,
  "totalMisses": 5000,
  "overallHitRate": 0.909,
  "caches": [
    {
      "name": "media-metadata",
      "size": 500,
      "maxSize": 1000,
      "hits": 20000,
      "misses": 2000,
      "hitRate": 0.909
    },
    {
      "name": "episode-list",
      "size": 750,
      "maxSize": 2000,
      "hits": 30000,
      "misses": 3000,
      "hitRate": 0.909
    }
  ]
}
```

---

### Crawler Management

#### POST `/api/v1/admin/crawl/metadata`

**Request Example:**
```
POST /api/v1/admin/crawl/metadata?mode=update&skipExisting=true
```

**Success Response (200 OK):**
```json
{
  "success": true,
  "message": "Metadata crawl started in background",
  "mode": "update",
  "jobId": "1234567890"
}
```

---

#### POST `/api/v1/admin/crawl/source`

**Request Example:**
```
POST /api/v1/admin/crawl/source?provider=ANIMEVIETSUB&mode=incremental&maxUrls=100
```

**Success Response (200 OK):**
```json
{
  "success": true,
  "message": "Source crawl started in background for ANIMEVIETSUB",
  "mode": "incremental",
  "jobId": "9876543210"
}
```

**Error Response (400 Bad Request):**
```json
{
  "success": false,
  "message": "Provider parameter is required"
}
```

---

#### POST `/api/v1/admin/media/{id}/refresh`

**Request Example:**
```
POST /api/v1/admin/media/16498/refresh
```

**Success Response (200 OK):**
```json
{
  "success": true,
  "message": "Force refresh started for media 16498",
  "mode": "refresh",
  "jobId": "5555555555"
}
```

**Error Response (400 Bad Request):**
```json
{
  "success": false,
  "message": "Invalid media ID: invalid"
}
```

---

### Media Management

#### DELETE `/api/v1/admin/media/{id}`

**Request Example:**
```
DELETE /api/v1/admin/media/16498
```

**Success Response (200 OK):**
```json
{
  "success": true,
  "message": "Media 16498 deleted successfully"
}
```

**Error Response (404 Not Found):**
```json
{
  "success": false,
  "message": "Media 99999 not found"
}
```

---

#### DELETE `/api/v1/admin/mapping/{mediaId}`

**Request Example:**
```
DELETE /api/v1/admin/mapping/16498?provider=ANIMEVIETSUB
```

**Success Response (200 OK):**
```json
{
  "success": true,
  "message": "Mapping deleted successfully"
}
```

**Error Response (400 Bad Request):**
```json
{
  "success": false,
  "message": "Provider parameter is required"
}
```

**Error Response (404 Not Found):**
```json
{
  "success": false,
  "message": "Mapping not found"
}
```

---

### Cache Management

#### POST `/api/v1/admin/cache/clear`

**Success Response (200 OK):**
```json
{
  "success": true,
  "message": "All caches cleared successfully"
}
```

**Error Response (500 Internal Server Error):**
```json
{
  "success": false,
  "message": "Failed to clear caches: Cache error"
}
```

---

#### POST `/api/v1/admin/cache/cleanup`

**Success Response (200 OK):**
```json
{
  "success": true,
  "message": "Cache cleanup completed",
  "entriesRemoved": 150
}
```

---

#### DELETE `/api/v1/admin/cache/{name}`

**Request Example:**
```
DELETE /api/v1/admin/cache/media-metadata
```

**Success Response (200 OK):**
```json
{
  "success": true,
  "message": "Cache 'media-metadata' cleared successfully"
}
```

**Error Response (400 Bad Request):**
```json
{
  "success": false,
  "message": "Cache name is required"
}
```

---

## Common Error Codes

| Code | Description | HTTP Status |
|------|-------------|-------------|
| `MISSING_PARAMETER` | Required parameter is missing | 400 |
| `INVALID_PARAMETER` | Parameter value is invalid | 400 |
| `INVALID_ID` | Invalid ID format | 400 |
| `INVALID_PROVIDER` | Invalid provider name | 400 |
| `UNSUPPORTED_PROVIDER` | Provider not supported for operation | 400 |
| `INVALID_PAGINATION` | Invalid pagination parameters | 400 |
| `MEDIA_NOT_FOUND` | Media not found | 404 |
| `MAPPING_NOT_FOUND` | Mapping not found | 404 |
| `EPISODES_NOT_FOUND` | Episodes not found | 404 |
| `RESOURCE_NOT_FOUND` | Resource not found | 404 |
| `UNAUTHORIZED` | Authentication required | 401 |
| `FORBIDDEN` | Access denied | 403 |
| `INTERNAL_ERROR` | Internal server error | 500 |
| `DATABASE_ERROR` | Database operation failed | 500 |
| `EXTERNAL_SERVICE_ERROR` | External service error | 500 |

---

## Notes

- All timestamps are in milliseconds (Unix timestamp)
- Date strings follow ISO 8601 format (YYYY-MM-DD)
- All endpoints support CORS
- Rate limiting: 60 requests per minute
- Pagination: `limit` defaults to 20, max 100 for search endpoints
- Empty arrays and objects are returned as `[]` and `{}` respectively
- Nullable fields may be `null` in responses

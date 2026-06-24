# System Design - Practical Examples

A collection of hands-on examples covering key system design concepts including communication patterns, networking protocols, performance optimization, security, and testing.

## Folder Structure

```
System Design/
├── Communication/
│   ├── Short Polling Sample
│   ├── Long Polling Sample
│   ├── Server Sent Event Sample
│   ├── Web Hooks Sample
│   └── Web Sockets Sample
├── Networking/
│   ├── Rest API Sample
│   ├── GraphQL Sample
│   └── gRPC Sample
├── Performance/
│   ├── Network Optimization/
│   │   ├── example1 - Critical Rendering Path
│   │   ├── example2 - Image Optimization
│   │   ├── example3 - CSS/JS Optimization
│   │   └── example4 - HTTP/2 with HTTPS
│   └── Rendering Patterns/
│       ├── page-router-app (CSR, SSR, SSG with Next.js Pages Router)
│       └── app-router-app (RSC with Next.js App Router)
├── Security/
│   ├── CORS
│   ├── CSRF
│   ├── XSS
│   ├── Iframe Protection
│   ├── Permissions Policy
│   ├── SRI (Subresource Integrity)
│   └── Security Headers
└── Testing/
    ├── Unit Tests
    ├── TDD
    └── E2E Tests
```

## Topics Covered

### Communication
| Pattern | Description |
|---|---|
| Short Polling | Client repeatedly requests data at fixed intervals |
| Long Polling | Server holds request open until new data is available |
| Server Sent Events (SSE) | One-way stream from server to client |
| Web Hooks | Event-driven HTTP callbacks from server to client |
| Web Sockets | Full-duplex, real-time bidirectional communication |

### Networking
| Protocol | Description |
|---|---|
| REST API | Standard HTTP-based API with JSON |
| GraphQL | Query language for APIs — fetch only what you need |
| gRPC | High-performance RPC framework using Protocol Buffers |

### Performance
- **Network Optimization** — Critical Rendering Path, image optimization, asset loading, HTTP/2
- **Rendering Patterns** — CSR, SSR, SSG, and React Server Components (RSC) using Next.js

### Security
| Topic | Description |
|---|---|
| CORS | Cross-Origin Resource Sharing policies |
| CSRF | Cross-Site Request Forgery attacks and mitigations |
| XSS | Cross-Site Scripting vulnerabilities and mitigations |
| Iframe Protection | Clickjacking prevention with frame-ancestors |
| Permissions Policy | Restricting browser feature access |
| SRI | Subresource Integrity for CDN asset validation |
| Security Headers | HTTP security headers best practices |

### Testing
- Unit testing with Jest
- Test-Driven Development (TDD)
- End-to-End (E2E) testing with Puppeteer

## Getting Started

Each example is self-contained. To run any Node.js based example:

```bash
cd "<folder-name>"
npm install
node index.js
```

For Next.js apps:

```bash
cd "Performance/Rendering Patterns/app-router-app"   # or page-router-app
npm install
npm run dev
```

## Tech Stack

- **Runtime**: Node.js
- **Frameworks**: Express.js, Next.js
- **Testing**: Jest, Puppeteer
- **Protocols**: REST, GraphQL, gRPC, WebSockets, SSE

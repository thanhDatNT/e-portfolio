1. App Router and Pages Router
- The App Router uses React's latest features, such as Server Components, which supports shared layouts, nested routing, loading states, error handling,etc. 
- The Pages Router is the original Next.js router, which allowed you to build server-rendered React app.
2. Rendering
- Client Components
    - Benefits: Interactivity (Hooks, event listener) + Browser API (geo-location and localStorage)
    - Usage: "use client" is above the imports
    - How's it work? => Full page load
        - On the server: Render Server Components into React Server Component Payload (RSC payload) + Client Component => render HTML for route on the server
        - On the client: Load HTML -> RSC Payload updates the DOM -> Attach event listener -> HTML can be interactive
- Server components
    - Benefits: 
        - Data fetching -> Improve performance to fetch data
        - Security: Keep sensitive data and logic on the server
        - Caching: the result can be cached and reused on subsequent request and across users.
        - Bundle Sizes: keeps large deps impacting the client JS bundle size on the server.
        - Initial payload: HTML allows users to view the page immediately.
        - SEO & Social Network Shareability
        - Streaming: Split into chunks and stream them to client -> See part of page earlier than full page.
    - How's it work? => Split into chunks (individual route segment and suspense boundaries)
        - React renders RSC Payload -> Next.js uses it + Client components to render HTML on server
        - On the client: HTML show a fast non-interactive preview -> RSC Payload match Client and Server component tree -> Update the DOM
        - JS is used to hydrate Client components -> Interactive app.
    - Server rendering strategies:  
        - Static (default): routes are rendered at build time, or in the background after data revalidation.
        - Dynamic: routes are rendered for each user at request time.
        - Streaming: routes are rendered on the server at request time. The work is split into chunks and streamed to the client as it becomes ready.
3. How routing and navigation works?
**On the client
- Prefetching: preload a route in the background before the user visits it. Link tag provides prefetching and client-side navigation between routes.
- Catching: Router cache. User navigates around the app, RSC Payload of prefetched route segments and visited routes are stored in the cache.
- Partial rendering: only the route segments that change on navigation re-render on the client, and any shared segments (layout) are preserved.
- Soft navigation: renders the segments that have changed while preserving React and browser state, and there is no full page reload.
4. Dynamic route: Dynamic Segments that are filled in at request time or pre-rendered at build time.
5. Streaming and Server Side Rendering:
**Server Side Rendering Steps**:
- All data for a given page is fetched on the server.
- The server then renders the HTML for the page.
- The HTML, CSS, and JavaScript for the page are sent to the client
- A non-interactive UI is shown using the generated HTML, and CSS.
- React hydrates the UI to make it interactive.
=> SSR with React and Next.js helps improve the perceived loading performance by showing a non-interactive page to the user as soon as possible
**Streaming** allows to break down the page's HTML into smaller chunks and progressively send those chunks from the server to the client. It's beneficial when preventing long data requests from blocking the page from rendering.
<Suspense> : Streaming Server Rendering + Selective Hydration
6. Parallel Routes:


/*
  routes.tsx — the route config (ROADMAP step 4.1)
  =================================================

  1. PURPOSE
     One place that says "this URL shows this page". App.tsx will hand this
     config to React Router, so no other file needs to know the URL list.

  2. WHAT IT RENDERS
     Nothing by itself. It builds a router object with `createBrowserRouter`.
     Shape of the config (described, not written out):
       - One parent route at path "/" whose element is <Layout />
       - Children of that parent:
           index route      -> HomePage      (index = "the parent's own URL")
           "resume"         -> ResumePage
           "performance"    -> PerformancePage
           "writing"        -> WritingPage
           "directing"      -> DirectingPage
           "design"         -> DesignPage
           "*"              -> NotFoundPage  (matches anything else)

  3. PROPS
     None. This is a module, not a component.

  4. STATE
     None.

  5. CONCEPTS
     - Client-side routing: clicking a link changes the URL and swaps the page
       without a full browser reload. React Router does this for us.
     - Nested routes: child routes render inside the parent's <Outlet />.
       That's how every page gets the same header without repeating it.
     - Relative child paths: children are written "resume", not "/resume".
       They're joined onto the parent's "/" automatically.
     - Lint note: you may see the `react-refresh/only-export-components`
       warning here, because this .tsx file exports a router object instead
       of a component. It only affects hot reload in dev. We'll decide what to
       do about it if it shows up.

  NEW CONCEPTS (first time in this project)
     a) A route config with createBrowserRouter
        Each route is an object: a `path` and the `element` to show. A parent
        can have `children`; `index: true` marks the child shown at the
        parent's own URL. This bakery site has a shell, a home and a menu:

          import { createBrowserRouter } from "react-router";

          export const router = createBrowserRouter([
            {
              path: "/",
              element: <BakeryShell />,
              children: [
                { index: true, element: <Welcome /> },
                { path: "menu", element: <Menu /> },
              ],
            },
          ]);

        Docs: https://reactrouter.com/start/data/routing

     b) Handing the router to the app
        RouterProvider takes the router and renders whatever matches the URL.

          import { RouterProvider } from "react-router";

          <RouterProvider router={router} />

        Docs: https://reactrouter.com/start/data/installation

  6. STYLING
     None. Routing only.

  7. BUILD STEPS
     1. Install `react-router` (v7). It's the routing library;
        `react-router-dom` is now just an alias for it. We'll talk before you
        run the install.
     2. Import `createBrowserRouter`, Layout, and the seven pages.
     3. Build the config array described in section 2 and export the router.
     4. In App.tsx (BUILD mode), render <RouterProvider router={router} /> and
        delete the Vite boilerplate.

  8. YOUR TURN
     Write the config yourself from the list above. Then type a made-up URL
     like /oops in the browser and check that NotFoundPage catches it.

  9. DONE WHEN
     - Typing each of the six real URLs shows the right stub page.
     - An unknown URL shows NotFoundPage instead of a blank screen.
     - `npm run build` passes.
*/

/*
  submitContact — sends the contact form (ROADMAP step 12.1)
  ==========================================================

  1. PURPOSE
     The only file that knows where contact messages go (Web3Forms for now).
     ContactForm calls this function and gets back "it worked" or "it failed
     because...". To move to your own backend later, change this file only.

  2. WHAT IT RENDERS
     Nothing. It exports an async function and two types.

  3. PROPS
     Not a component. Exports:
     - ContactMessage type: { name: string; email: string; message: string }
       plus an optional honeypot value (see ContactForm)
     - SubmitResult type: { ok: true } | { ok: false; error: string }
     - submitContact(message: ContactMessage): Promise<SubmitResult>

  4. STATE
     None.

  5. CONCEPTS
     - async/await and Promise: sending takes time. An async function returns
       a Promise, a value that arrives later. `await` waits for it.
     - fetch: the browser's built-in way to make HTTP requests. No package
       needed.
     - Discriminated union: SubmitResult is one of two shapes, and checking
       `result.ok` tells TypeScript which one you have.
     - try/catch: fetch throws if the network is down. Catch it and return
       `{ ok: false, error: ... }`, so the form never crashes.
     - Vite env variables: `import.meta.env.VITE_WEB3FORMS_KEY` reads a value
       from a `.env.local` file. Vite only exposes variables that start with
       VITE_ to browser code. Vite's default .gitignore ignores `*.local`
       files, so the key isn't committed. (The Web3Forms key is designed to be
       public, but it still shouldn't be hardcoded.) Vercel needs the same
       variable set in its project settings.
     - Typing env variables: adding the key to Vite's ImportMetaEnv
       interface gives it autocomplete and a string type. We'll do that
       together.

  NEW CONCEPTS (first time in this project)
     a) async/await with a POST fetch
        `await` pauses the async function until the Promise settles. The
        request body must be a string, so objects go through JSON.stringify.

          async function saveNote(text: string) {
            const response = await fetch("https://example.com/api/notes", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ text }),
            });
            return await response.json();
          }

        Docs: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
              https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

     b) try/catch, and why the error is `unknown`
        In strict TypeScript the caught error is `unknown`, because anything
        can be thrown. Check what it is before using it.

          try {
            await saveNote("hi");
          } catch (error) {
            const reason = error instanceof Error ? error.message : "Unknown error";
            console.log(reason);
          }

        Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch

     c) Narrowing a discriminated union
        Checking the shared field tells TypeScript which shape you have.

          type Load = { state: "done"; rows: string[] } | { state: "failed"; reason: string };

          if (load.state === "failed") {
            console.log(load.reason);  // allowed: TypeScript knows it's the failed shape
          }

        Docs: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions

     d) Vite env variables and their type
        .env.local holds   VITE_MAP_TOKEN=abc123
        Code reads         import.meta.env.VITE_MAP_TOKEN
        The type goes in src/vite-env.d.ts:

          interface ImportMetaEnv {
            readonly VITE_MAP_TOKEN: string;
          }

        Docs: https://vite.dev/guide/env-and-mode

  6. STYLING
     None.

  7. BUILD STEPS
     1. Create a Web3Forms access key (free) for the email the messages
        should go to, and put it in `.env.local` as VITE_WEB3FORMS_KEY.
     2. Write the two types.
     3. Write submitContact: POST JSON to Web3Forms' submit endpoint with the
        access key, the message fields, and the honeypot field. Check the
        current Web3Forms docs for the exact endpoint and field names
        (including their honeypot field name) before writing it.
     4. Read the JSON response. Return { ok: true } on success, or
        { ok: false, error } using their message.
     5. Wrap it all in try/catch for network failures.

  8. YOUR TURN
     Write it yourself after reading the Web3Forms docs. Reading API docs
     and turning them into a fetch call is the skill being practised here.

  9. DONE WHEN
     - A test submission arrives in the inbox.
     - With the wifi off, it returns { ok: false } instead of throwing.
     - Nothing outside this file mentions "web3forms".
*/

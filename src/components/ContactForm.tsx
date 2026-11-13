import type { ContactMessage } from "../lib/submitContact";
import type { SubmitEvent } from "react";
import { submitContact } from "../lib/submitContact";
import { useState } from "react";

export function ContactForm() {
    const [values, setValues] = useState<ContactMessage>({
        name: "",
        email: "",
        message: "",
        honeypot: false,
    });
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
        "idle",
    );
    const [errorMessage, setErrorMessage] = useState("");

    let formText = "";
    if (status === "sent") {
        formText = "Thanks! Your message is on its way to Lily.";
    } else if (status === "error") {
        formText = errorMessage;
    }

    async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        setStatus("sending");
        const formResponse = await submitContact(values);
        if (formResponse.ok) {
            setStatus("sent");
            setValues({ name: "", email: "", message: "", honeypot: false });
        } else {
            setErrorMessage(formResponse.error);
            setStatus("error");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-xl">
            <label htmlFor="name" className="font-body font-bold text-plum">
                Name
            </label>
            <input
                id="name"
                value={values.name}
                onChange={(event) =>
                    setValues({ ...values, name: event.target.value })
                }
                name="name"
                type="text"
                autoComplete="name"
                required
                className="bg-white text-plum border-plum border-2 px-3 py-2 rounded-md focus-visible:outline-3"
            />
            <label htmlFor="email" className="font-body font-bold text-plum">
                Email
            </label>
            <input
                id="email"
                value={values.email}
                onChange={(event) =>
                    setValues({ ...values, email: event.target.value })
                }
                name="email"
                type="email"
                autoComplete="email"
                required
                className="bg-white text-plum border-plum border-2 px-3 py-2 rounded-md focus-visible:outline-3"
            />
            <label htmlFor="message" className="font-body font-bold text-plum">
                What's On Your Mind?
            </label>
            <textarea
                id="message"
                value={values.message}
                onChange={(event) =>
                    setValues({ ...values, message: event.target.value })
                }
                name="message"
                required
                className="bg-white text-plum border-plum border-2 px-3 py-2 rounded-md focus-visible:outline-3"
            />
            <input
                type="checkbox"
                name="botcheck"
                hidden
                autoComplete="off"
                tabIndex={-1}
                checked={values.honeypot}
                onChange={(event) =>
                    setValues({ ...values, honeypot: event.target.checked })
                }
            />
            <button
                type="submit"
                disabled={status === "sending"}
                className="px-6 font-display min-h-11 text-white bg-plum rounded-md text-xl disabled:opacity-60"
            >
                {status === "sending" ? "Sending..." : "Send"}
            </button>
            <p role="status" className="text-plum font-body font-bold">
                {formText}
            </p>
        </form>
    );
}
/*
  ContactForm — inquiries form at the bottom of /resume (ROADMAP step 9.2)
  =========================================================================

  1. PURPOSE
     Lets visitors send Lily a message (inquiries only; nothing is for sale).
     Handles the waiting, success and failure states clearly and accessibly.

  2. WHAT IT RENDERS
     <form> containing:
       - Name: <label> + <input type="text" autoComplete="name" required>
       - Email: <label> + <input type="email" autoComplete="email" required>
       - Message: <label> + <textarea required>
       - A hidden honeypot field (see Concepts)
       - <button type="submit">: says "Sending..." and is disabled while
         sending
       - A status message area with role="status" for success or error text

  3. PROPS
     None for now. (Later: an optional `onSent?: () => void` if the page
     needs to react.)

  4. STATE
     - values: { name: string; email: string; message: string }
     - status: "idle" | "sending" | "sent" | "error"
     - errorMessage: string

  5. CONCEPTS
     - Controlled inputs: each input's `value` comes from state, and its
       onChange updates state. React is then the single source of truth for
       what's typed.
     - A union for status: four named states instead of several booleans
       (isSending, isSent, hasError...) that could contradict each other.
     - Form submit: onSubmit on the <form> (not onClick on the button) also
       handles Enter-to-submit. Call event.preventDefault() so the browser
       doesn't reload the page.
     - Calling submitContact: this form doesn't know about Web3Forms. It
       calls submitContact(values) and checks result.ok.
     - Honeypot: a field hidden from people (and from screen readers and
       Tab) that bots fill in anyway. If it has a value, the message is spam.
       Hide it with `hidden` or an off-screen wrapper, and add tabIndex={-1}
       and autoComplete="off".
     - role="status": a live region. Screen readers announce changes to its
       text, so "Message sent!" is heard without moving focus.
     - Labels: every input needs a visible <label htmlFor> tied to its id.
       Placeholder text is not a label.
     - Later, to compare: React 19's form actions (`useActionState`) can
       replace much of this state. Learn the controlled version first.

  NEW CONCEPTS (first time in this project)
     a) A controlled input with a label
        `value` comes from state, and onChange writes back to it. htmlFor is
        JSX's name for the label's `for` attribute.

          const [city, setCity] = useState("");

          <label htmlFor="city">City</label>
          <input id="city" value={city} onChange={(e) => setCity(e.target.value)} />

        Docs: https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable

     b) Updating one field of an object in state
        Copy the old object with spread (...), then overwrite one field.
        Never change the state object directly.

          setAddress({ ...address, zip: "90210" });

        Docs: https://react.dev/learn/updating-objects-in-state

     c) Typing a submit handler
        React's event types are generics: the part in <> says which element
        fired it.

          import type { FormEvent } from "react";

          function handleSearch(event: FormEvent<HTMLFormElement>) {
            event.preventDefault();
            console.log("searching");
          }

          <form onSubmit={handleSearch}>...</form>

        Docs: https://react.dev/learn/responding-to-events#preventing-default-behavior

     d) A live region
        Screen readers announce text that changes inside role="status". The
        element must already be on the page before its text changes.

          <p role="status">{saved ? "Draft saved" : ""}</p>

        Docs: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/status_role

  6. STYLING
     - Stack the fields: `flex`, `flex-col`, `gap-4`, `max-w-xl`.
     - Inputs: light background so plum text has strong contrast. Look up:
       `bg-white`, `text-plum`, `rounded-md`, `border-2`, `border-plum`,
       `px-3`, `py-2`, `focus-visible:outline-*`.
     - Labels: body font, plum, `font-bold`.
     - Button: big and obvious. `min-h-11`, `px-6`, `font-display`,
       `text-xl`, a plum background with white text (check contrast),
       `disabled:opacity-60`.

  7. BUILD STEPS
     1. Build the form markup with labels and no logic.
     2. Make the inputs controlled with `values` state.
     3. Add onSubmit with preventDefault and log the values.
     4. Add `status`, call submitContact, and show success or error.
     5. Add the honeypot field.
     6. Reset the fields after a successful send.

  8. YOUR TURN
     Steps 1–3 yourself. For step 4, sketch on paper what the user should see
     in each of the four statuses before you write code.

  9. DONE WHEN
     - Empty required fields are caught by the browser before sending.
     - The button says "Sending..." and can't be double-clicked.
     - Success and error messages appear and are announced by a screen
       reader.
     - The whole form works with only the keyboard.
     - The honeypot is invisible and can't be tabbed to.
*/

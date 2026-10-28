# Novobank — interactive onboarding demo

[Open the published experience](https://novobank-fintech-chill.riobootomas.chatgpt.site)

Run `npm start` (Node.js 18+) and open http://localhost:53691. No packages need installing. The demo also works by opening index.html, but localhost provides a consistent storage origin.

20 Figma screens/states implemented: Welcome; requirements sheet; sign-in notice; contact; saved progress; verification code; personal details; residential address; document selection; capture; glare error; retry; financial profile; review locked; review ready; submitting; pending; home; funding sheet; profile sheet.

Use the prefilled fictional data. OTP: **123456**, expires in five minutes; resend cooldown: 30 seconds. First simulated capture shows glare; retry succeeds. Review rows allow editing and returning without losing other fields. Consent is required before submission. Processing takes three seconds; Check status on the pending screen opens Home. Profile offers a confirmed reset. Save & exit returns to Welcome, where Resume continues the application.

Progress is saved to this browser's localStorage on field edits and transitions. Reload resumes the current step. Storage failure is handled without crashing. This is a local prototype, not real banking: no SMS, email, document upload, camera access, authentication or money transfer. Use fictional data only. Local storage is not encrypted.

Implementation: plain HTML, CSS and JavaScript; local Figma SVG assets and local fonts; no frontend dependencies or external runtime requests. Fields validate phone, email, date/age, SSN length, residential address, state, ZIP and income. Dialogs support Escape, focus trapping and background inertness; layouts scroll on short screens and respect reduced motion.

Source: https://www.figma.com/design/xkjPbFF7N465fbMIIfUbMc/Proyectos-de-prototipado?node-id=16733-4465

Intentional additions: resumable application; error validation; readable demo agreements; editable review; completion of pending review; informational destinations for complementary Home actions. Contact encryption claim replaced with truthful local-storage copy; review distinguishes photo checked from final application review. No real banking services are connected.



Mobile refinement (October 28, 2026): responsive visual viewport, safe-area padding, wider address fields, consistent SVG icons, document framing, larger consent target, stable dialog scroll, clear validation recovery, editable contact review, profile details and pending feedback. Reviewed in browser at 320×568, 375×667 and 393×852; reduced-height layout at 375×400. These are browser viewport checks, not physical iOS/Android device tests.

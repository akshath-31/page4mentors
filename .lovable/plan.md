

## EmailJS Integration for Contact Form

### Changes Required

**1. Install `@emailjs/browser` package**

**2. Update `src/pages/Contact.tsx`**
- Import `emailjs` from `@emailjs/browser`
- Replace the fake timeout in `onSubmit` with a real `emailjs.send()` call using:
  - Service ID: `service_fhhdafk`
  - Template ID: `template_77hjp5o`
  - Public Key: `zcWoAOVsV2vUcqd7Q`
- Map form fields to template parameters: `from_name` (first + last), `from_email`, `phone`, `message`
- Add error handling with a toast for failures

These are public/client-side keys designed for frontend use, so storing them in the code is safe.


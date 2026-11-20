import { useState } from 'react'

export function ContactSection() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!firstName || !lastName || !email || !message) return

    const subject = encodeURIComponent(`Portfolio Inquiry from ${firstName} ${lastName}`)
    const body = encodeURIComponent(
      `Name: ${firstName} ${lastName}\n` +
      `Email: ${email}\n\n` +
      `Message:\n${message}\n\n` +
      `---\nSent via Portfolio Contact Form`
    )

    window.location.href = `mailto:natharadhanapala@gmail.com?subject=${subject}&body=${body}`
    setFormSubmitted(true)
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-grid" aria-hidden="true" />

      <div className="section-label">
        <span>07</span> CONTACT
      </div>

      <h2 className="contact-display-heading">
        Let's Get In Touch.
      </h2>

      <div className="contact-split-grid">
        {/* LEFT COLUMN: LOCATION, STATUS & INTERACTIVE SOCIAL ICON BUTTONS */}
        <div className="contact-left-info">
          <div className="contact-location-info">
            <p>Colombo, Sri Lanka</p>
            <p>6.9271° N / 79.8612° E</p>
          </div>

          <div className="contact-status-badge">
            <span className="status-dot" aria-hidden="true" />
            Available for AI Internships &amp; Roles
          </div>

          {/* SOCIAL MEDIA + EMAIL + PHONE ICON BUTTONS */}
          <div>
            <span className="contact-email-label" style={{ display: 'block', marginBottom: '14px' }}>
              CONNECT WITH ME
            </span>
            <div className="contact-social-icons-row">
              {/* EMAIL ICON BUTTON */}
              <a
                href="mailto:natharadhanapala@gmail.com"
                className="contact-icon-btn"
                title="natharadhanapala@gmail.com"
                aria-label="Email"
              >
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>

              {/* PHONE ICON BUTTON */}
              <a
                href="tel:+94716524501"
                className="contact-icon-btn"
                title="+94 71 652 4501"
                aria-label="Phone"
              >
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>

              {/* INSTAGRAM ICON BUTTON */}
              <a
                href="https://www.instagram.com/nethuli06/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon-btn"
                title="Follow on Instagram"
                aria-label="Instagram"
              >
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LINKEDIN ICON BUTTON */}
              <a
                href="https://www.linkedin.com/in/nethuli-dhanapala-b84b69385/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon-btn"
                title="Connect on LinkedIn"
                aria-label="LinkedIn"
              >
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* GITHUB ICON BUTTON */}
              <a
                href="https://github.com/nethuli-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon-btn"
                title="Explore GitHub Repositories"
                aria-label="GitHub"
              >
                <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: UNDERLINE INPUTS FORM (NAME, EMAIL, MESSAGE) */}
        <form className="contact-form-minimal" onSubmit={handleContactSubmit}>
          <div className="form-group-block">
            <span className="form-label-title">Name (required)</span>
            <div className="form-name-row">
              <input
                type="text"
                required
                placeholder="First Name"
                className="form-underline-input"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                required
                placeholder="Last Name"
                className="form-underline-input"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group-block">
            <span className="form-label-title">Email (required)</span>
            <input
              type="email"
              required
              placeholder="name@example.com"
              className="form-underline-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group-block">
            <span className="form-label-title">Message (required)</span>
            <textarea
              required
              rows={3}
              placeholder="Tell me about your project, ideas, or opportunity..."
              className="form-underline-textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button type="submit" className="form-submit-btn">
            SUBMIT
          </button>

          {formSubmitted && (
            <div className="form-status-msg">
              ✓ Your email client has been opened with your inquiry to{' '}
              <strong>natharadhanapala@gmail.com</strong>.
            </div>
          )}
        </form>
      </div>

      <footer className="contact-footer">
        <span>© 2026 NETHULI NATHARA</span>
        <span>DESIGNED WITH CURIOSITY.</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </section>
  )
}

export default ContactSection

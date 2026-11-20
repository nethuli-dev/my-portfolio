interface NavbarProps {
  activeSection: string
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

export function Navbar({
  activeSection,
  mobileMenuOpen,
  setMobileMenuOpen,
}: NavbarProps) {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'photos', label: 'Photos' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'courses', label: 'Courses' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <header className="navbar">
      <a href="#home" className="nav-logo" aria-label="Nethuli Nathara Home">
        N<span>.</span>
      </a>

      <button
        type="button"
        className="nav-mobile-toggle"
        aria-label="Toggle navigation menu"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? '✕' : '☰'}
      </button>

      <nav
        className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}
        aria-label="Primary navigation"
      >
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <a href="#contact" className="nav-cta">
        Let's Connect <span>↗</span>
      </a>
    </header>
  )
}

export default Navbar

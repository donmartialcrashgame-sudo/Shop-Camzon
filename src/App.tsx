import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight, Heart, Menu, Search, ShoppingBag, Star, Truck, ShieldCheck, MessageCircle, X, UserRound } from 'lucide-react'

const product = {
  name: 'Shop Camzon Featured Product',
  price: '₦25,000',
  oldPrice: '₦32,000',
  image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=85',
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  return (
    <div className="app-shell">
      <div className="topbar">🚚 Fast delivery across Nigeria <span>•</span> Secure shopping <span>•</span> WhatsApp support</div>

      <header className="header">
        <div className="container header-inner">
          <button className="icon-btn mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <Link to="/" className="logo"><span>Shop</span> Camzon</Link>
          <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#categories" onClick={() => setMenuOpen(false)}>Categories</a>
            <a href="#deals" onClick={() => setMenuOpen(false)}>Deals</a>
            <a href="#why-us" onClick={() => setMenuOpen(false)}>Why Shop Camzon</a>
          </nav>
          <div className="header-actions">
            <button className="icon-btn desktop-search" aria-label="Search"><Search size={20} /></button>
            <Link to="/login" className="icon-btn" aria-label="Account"><UserRound size={20} /></Link>
            <button className="cart-btn" onClick={() => setCartCount(cartCount + 1)}><ShoppingBag size={20} /><span>Cart</span>{cartCount > 0 && <b>{cartCount}</b>}</button>
          </div>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">WELCOME TO SHOP CAMZON</span>
              <h1>Shop smart.<br /><em>Shop easy.</em></h1>
              <p>Discover quality products at prices you'll love. Simple shopping, reliable delivery, and friendly support.</p>
              <div className="hero-actions"><a className="btn btn-primary" href="#products">Shop now <ArrowRight size={18} /></a><a className="btn btn-light" href="#deals">View deals</a></div>
              <div className="hero-trust"><span><ShieldCheck size={18} /> Secure shopping</span><span><Truck size={18} /> Fast delivery</span></div>
            </div>
            <div className="hero-visual">
              <div className="hero-circle"></div>
              <img src={product.image} alt="Featured Shop Camzon product" />
              <div className="floating-card"><span>Featured</span><strong>Great value</strong><small>Shop Camzon pick</small></div>
              <div className="sale-badge">SAVE<br /><strong>22%</strong></div>
            </div>
          </div>
        </section>

        <section className="benefits" id="why-us"><div className="container benefits-grid">
          <div><Truck /><div><strong>Fast Delivery</strong><small>We deliver to your doorstep</small></div></div>
          <div><ShieldCheck /><div><strong>Shop With Confidence</strong><small>Safe and secure experience</small></div></div>
          <div><MessageCircle /><div><strong>We're Here To Help</strong><small>Chat with us on WhatsApp</small></div></div>
        </div></section>

        <section className="section" id="categories"><div className="container"><div className="section-heading"><div><span className="eyebrow">EXPLORE</span><h2>Shop by category</h2></div><a href="#products">View all <ChevronRight size={17} /></a></div>
          <div className="category-grid"><Category title="Electronics" icon="⚡" text="Smart gadgets & more" /><Category title="Fashion" icon="✦" text="Everyday style" /><Category title="Beauty" icon="✿" text="Care & essentials" /><Category title="Home & Living" icon="⌂" text="Make life better" /></div>
        </div></section>

        <section className="section products-section" id="products"><div className="container"><div className="section-heading"><div><span className="eyebrow">HANDPICKED FOR YOU</span><h2>Featured product</h2></div><a href="#products">View all <ChevronRight size={17} /></a></div>
          <div className="product-card"><div className="product-image"><img src={product.image} alt={product.name} /><button className="wishlist"><Heart size={19} /></button><span className="product-tag">FEATURED</span></div><div className="product-info"><div className="stars"><Star size={15} fill="currentColor" /> <Star size={15} fill="currentColor" /> <Star size={15} fill="currentColor" /> <Star size={15} fill="currentColor" /> <Star size={15} fill="currentColor" /><span>(New)</span></div><h3>{product.name}</h3><p className="product-desc">A quality pick from Shop Camzon. More product details will be added from your admin dashboard.</p><div className="price-row"><strong>{product.price}</strong><del>{product.oldPrice}</del></div><button className="btn btn-primary add-cart" onClick={() => setCartCount(cartCount + 1)}>Add to cart <ShoppingBag size={17} /></button></div></div>
        </div></section>

        <section className="deal" id="deals"><div className="container deal-inner"><div><span className="eyebrow">SHOP CAMZON DEALS</span><h2>Good products.<br /><em>Better prices.</em></h2><p>We're building a collection of useful products and special offers made for everyday life.</p><a className="btn btn-white" href="#products">Explore products <ArrowRight size={18} /></a></div><div className="deal-mark">%</div></div></section>

        <section className="newsletter"><div className="container newsletter-inner"><div><span className="eyebrow">STAY IN THE LOOP</span><h2>Get our latest deals</h2><p>Be the first to hear about new products and special offers.</p></div><div className="newsletter-form"><input type="email" placeholder="Your email address" aria-label="Email address" /><button className="btn btn-primary">Subscribe</button></div></div></section>
      </main>

      <footer className="footer"><div className="container footer-grid"><div><Link to="/" className="logo footer-logo"><span>Shop</span> Camzon</Link><p>Your trusted destination for quality products, great prices, and convenient shopping.</p></div><div><h4>Shop</h4><a href="#products">Featured Products</a><a href="#categories">Categories</a><a href="#deals">Deals</a></div><div><h4>Account</h4><Link to="/login">Login</Link><Link to="/login">Create account</Link><a href="#home">Track order</a></div><div><h4>Need help?</h4><a href="https://wa.me/2340000000000">WhatsApp us</a><a href="mailto:support@shopcamzon.com">support@shopcamzon.com</a></div></div><div className="container footer-bottom"><span>© 2026 Shop Camzon. All rights reserved.</span><span>Built for easy shopping in Nigeria.</span></div></footer>
    </div>
  )
}

function Category({ title, icon, text }: { title: string; icon: string; text: string }) {
  return <a className="category-card" href="#products"><span className="category-icon">{icon}</span><div><h3>{title}</h3><p>{text}</p></div><ChevronRight size={19} /></a>
}

export default App

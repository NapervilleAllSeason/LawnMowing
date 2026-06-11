# Naperville All Season - Professional Lawn Mowing Website

A modern, professional website for Naperville All Season lawn mowing and landscaping services.

## 📋 Features

### Pages
- **Home Page (index.html)** - Hero section with services overview and call-to-action buttons
- **Equipment Page (equipment.html)** - Showcase of 6 professional commercial lawn care equipment
- **About Us Page (about.html)** - Company mission, team profiles, values, and service area
- **Quote Request Page (quote.html)** - Contact form that integrates with email

### Design
- **Color Scheme**: Dark Green (#1b4332), Cream (#f1f1e8), Navy Blue (#1e3a5f)
- **Professional Layout**: Modern, clean design with smooth animations
- **Stock Photography**: High-quality lawn care and landscaping images
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects, smooth scrolling, mobile menu

### Functionality
- Mobile hamburger navigation menu
- Smooth scroll animations
- Quote request form with email integration
- Dynamic service selection with checkboxes
- Responsive grid layouts
- Intersection Observer animations

## 📁 File Structure

```
LawnMowing/
├── index.html                 # Home page
├── equipment.html             # Equipment showcase page
├── about.html                 # About Us page
├── quote.html                 # Quote request page
├── styles.css                 # Main stylesheet with color variables
├── equipment-page-styles.css  # Extended styles for all pages
├── script.js                  # JavaScript for interactivity
└── README.md                  # This file
```

## 🎨 Color Palette

- **Dark Green**: `#1b4332` - Primary brand color
- **Cream**: `#f1f1e8` - Background and text highlight
- **Navy Blue**: `#1e3a5f` - Secondary brand color
- **Light Accent**: `#8fd14f` - Call-to-action elements

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/NapervilleAllSeason/LawnMowing.git
cd LawnMowing
```

2. Open `index.html` in your web browser

3. To preview all pages:
   - index.html - Home page
   - equipment.html - Equipment page
   - about.html - About Us page
   - quote.html - Quote request page

## 🔧 Features Breakdown

### Quote Form Integration
The quote form on the quote.html page:
- Collects customer information (name, email, phone)
- Gathers service details (lot size, service type, frequency)
- Creates a formatted email body
- Opens the user's default email client with pre-filled message
- Shows success confirmation

To customize the email recipient, update the email address in `script.js`:
```javascript
const mailtoLink = `mailto:YOUR_EMAIL@example.com?subject=New Quote Request...`;
```

### Navigation
- Sticky navigation bar with business logo
- Mobile hamburger menu for responsive design
- Quick links to all pages
- Prominent "Get a Quote" button

### Responsive Design
- Grid layouts that adapt to screen size
- Mobile-optimized images
- Touch-friendly navigation
- Readable typography on all devices

## 📞 Contact Information

Currently configured in the website:
- **Phone**: (630) 555-0123
- **Email**: info@napervilleallyear.com
- **Service Area**: Naperville, Aurora, Warrenville, Wheaton, Downers Grove, Westmont

Update these in the HTML files and footer sections to your actual contact information.

## 🌐 Service Area

The website highlights service in:
- Naperville
- Aurora
- Warrenville
- Wheaton
- Downers Grove
- Westmont

Edit the `about.html` page to update your service areas.

## 💼 Equipment Showcase

The equipment page features:
1. **Zero Turn Mowers** - John Deere Z540M
2. **Walk-Behind Mowers** - Honda HRX537 Series
3. **String Trimmers** - ECHO SRM-2305SI
4. **Leaf Blowers** - Stihl BR 700X
5. **Lawn Aerators** - Classen 16X A-Matic
6. **Professional Mulchers** - Stihl KM 130

Customize equipment details in `equipment.html` to match your actual fleet.

## 🔐 Security Notes

- Email addresses are visible in the HTML (normal for contact pages)
- Consider using a contact form backend service for better security
- Update all contact information with your actual business details

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Future Enhancements

Consider adding:
- Backend form submission service
- Photo gallery
- Customer testimonials
- Blog section
- Service booking system
- SMS integration

## 📝 License

This website is created for Naperville All Season.

## ✅ Checklist for Launch

- [ ] Replace placeholder contact information with your details
- [ ] Update equipment list with your actual equipment
- [ ] Replace stock photos with your own business photos
- [ ] Update service area list
- [ ] Test all navigation links
- [ ] Test quote form email functionality
- [ ] Test on mobile devices
- [ ] Set up domain name
- [ ] Deploy to web hosting

---

**Created**: June 2024
**Last Updated**: June 11, 2024

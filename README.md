# CBD OPS - Real Estate Website

## 1. Project Overview

CBD OPS is a responsive real-estate website designed to help users browse, search and enquire about properties available for sale or rent.

The website provides a professional and user-friendly platform where visitors can:

- Browse available properties.
- Search and filter properties.
- View detailed property information.
- View property images and galleries.
- Submit property enquiries.
- Contact CBD OPS.
- Navigate between different sections and pages easily.

The website uses a professional black, white and gold visual design to create a modern real-estate brand identity.

---

## 2. Project Objectives

The main objectives of CBD OPS are to:

- Provide an easy-to-use property browsing experience.
- Allow users to search and filter property listings.
- Display detailed information about individual properties.
- Provide property enquiry functionality.
- Provide a contact form for general enquiries.
- Maintain a responsive design across different screen sizes.
- Use JavaScript to provide interactive functionality.
- Apply SEO best practices.
- Provide clear internal navigation.
- Deploy the website online using GitHub Pages.

---

## 3. Website Page Structure

The website consists of the following main pages:

### Home Page
`index.html`

The home page introduces CBD OPS and provides:

- Website branding.
- Navigation.
- Property search.
- Featured properties.
- Calls to action.
- About CBD OPS preview.
- Links to property listings and other website sections.

### Properties Page
`properties.html`

The properties page displays available properties for sale and rent.

Users can filter properties by:

- Location.
- Property type.
- Number of bedrooms.
- Sale or rental status.

Each property listing includes relevant information such as:

- Property name.
- Location.
- Status.
- Bedrooms.
- Bathrooms.
- Garages.
- Price.
- Property image.
- Link to the property details page.

### Property Details Page
`property-details.html`

The property details page displays detailed information for an individual property.

Information includes:

- Property title.
- Status.
- Location.
- Property type.
- Price.
- Bedrooms.
- Bathrooms.
- Garages.
- Description.
- Main property image.
- Property gallery.
- Enquiry option.

Property information is loaded dynamically using JavaScript and URL parameters.

### About Page
`about.html`

The About page provides information about CBD OPS, including its organisation, purpose and property services.

### Contact Page
`contact.html`

The Contact page provides CBD OPS contact information and a validated contact form.

Users can provide:

- Full name.
- Email address.
- Phone number.
- Message type.
- Message.

The form provides validation and user feedback after submission.

### Property Enquiry Page
`enquiry.html`

The enquiry page allows users to submit property-related enquiries.

Users can:

- Select a property.
- Select an enquiry type.
- Provide their personal details.
- Provide a message.
- Submit the enquiry.

JavaScript validation checks the submitted information and displays appropriate error or success messages.

---

## 4. Technologies Used

The project was developed using:

- HTML5
- CSS3
- JavaScript
- Google Fonts
- Git
- GitHub
- GitHub Pages
- Visual Studio Code
- Live Server

---

## 5. JavaScript Functionality

JavaScript is used throughout the website to provide interactive functionality.

Implemented functionality includes:

- Mobile navigation menu.
- Property searching.
- Property filtering.
- Dynamic property details.
- URL parameter handling.
- Property image galleries.
- Contact form validation.
- Property enquiry form validation.
- Dynamic form feedback.
- Property selection on enquiry pages.
- Search result handling.
- No-results messaging.

The property details system uses JavaScript to identify the selected property from the URL and display the corresponding information.

---

## 6. SEO Implementation

SEO improvements were implemented as part of Part 3.

### Page Titles

Each major page has a unique and descriptive title.

Examples include:

- `CBD OPS | Find Your Dream Property`
- `Properties | CBD OPS`
- `Property Details | CBD OPS`
- `About Us | CBD OPS`
- `Contact | CBD OPS`
- `Property Enquiry | CBD OPS`

### Meta Descriptions

Each major page contains a relevant meta description describing its content.

### Heading Structure

The website uses a logical heading hierarchy using:

- H1 for the main page heading.
- H2 for major sections.
- H3 for supporting sections and content.

Each main page contains a clear primary H1 heading.

### Image Alt Text

Images were reviewed and descriptive alternative text was added.

Examples include:

- `Modern family home in Durban`
- `Luxury four bedroom home in Umhlanga`
- `Contemporary coastal home in Ballito`
- `Modern city apartment in Durban`
- `CBD OPS property main image`

This improves accessibility and provides search engines with meaningful information about website images.

### Internal Linking

Internal links were reviewed and improved throughout the website.

The website provides links between:

- Home.
- Properties.
- Property Details.
- About.
- Contact.
- Property Enquiry.

Property listings also link directly to their corresponding property details.

### Robots.txt

A `robots.txt` file was created to allow search-engine crawlers to access the website and identify the sitemap.

### Sitemap

A `sitemap.xml` file was created containing the main CBD OPS website pages.

---

## 7. Forms and Validation

### Contact Form

The contact form uses HTML and JavaScript validation.

Validation checks include:

- Required name.
- Valid email address.
- Valid phone number.
- Message type.
- Required message.

The user receives a meaningful success or error message after attempting to submit the form.

### Property Enquiry Form

The property enquiry form includes:

- Full name.
- Email address.
- Phone number.
- Property selection.
- Enquiry type.
- Message.

JavaScript validates the information before processing the form and displays feedback to the user.

---

## 8. Responsive Design

CBD OPS was designed to work across different screen sizes.

Responsive features include:

- Responsive navigation.
- Mobile menu.
- Flexible layouts.
- Responsive property cards.
- Mobile-friendly forms.
- Responsive images.
- Flexible buttons and content sections.

The website was designed to remain usable on desktop, tablet and mobile screen sizes.

---

## 9. Accessibility

Accessibility considerations implemented in the website include:

- Descriptive image alt text.
- Semantic HTML structure.
- Clear headings.
- Form labels.
- Visible form validation messages.
- Keyboard-friendly form controls.
- Clear navigation.
- Focus states for interactive elements.

---

## 10. Performance and Security Considerations

The website uses a lightweight front-end structure based on HTML, CSS and JavaScript.

Performance considerations include:

- Reusing shared CSS and JavaScript files.
- Avoiding unnecessary page duplication.
- Using appropriately sized website images where possible.
- Keeping the website structure simple and efficient.

Security considerations include:

- Client-side validation for forms.
- Avoiding the use of sensitive information in front-end code.
- Using controlled form fields.
- Avoiding unnecessary external scripts.
- Maintaining clear separation between HTML, CSS and JavaScript.

---

## 11. Version Control

Git and GitHub were used to manage the project.

The repository contains the project source files and documentation.

Repository:

`https://github.com/Thabiso-Kunene/CBD-OPS`

Git was used to track project changes and maintain different stages of development.

---

## 12. Deployment

CBD OPS was prepared for deployment using GitHub Pages.

Published website:

`https://thabiso-kunene.github.io/CBD-OPS/`

The GitHub repository acts as the source for the deployed website.

GitHub Pages provides free hosting for the static HTML, CSS, JavaScript and image files used by CBD OPS.

---

## 13. Project Structure

```text
CBD-OPS/
│
├── index.html
├── properties.html
├── property-details.html
├── about.html
├── contact.html
├── enquiry.html
├── robots.txt
├── sitemap.xml
├── README.md
├── CHANGELOG.md
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── Images/
    ├── Logo.png
    └── Property images
```

---

## 14. Testing

The website was tested during development to confirm that:

- Navigation links work.
- Property filters work.
- Property details load correctly.
- Property images display correctly.
- The property enquiry form validates correctly.
- The contact form validates correctly.
- Success and error messages display correctly.
- Internal links work correctly.
- Images contain descriptive alt text.
- Responsive navigation functions correctly.
- `robots.txt` is present.
- `sitemap.xml` is present.

---

## 15. Future Improvements

Possible future improvements include:

- Connecting enquiries to a backend database.
- Sending enquiry notifications by email.
- Adding user accounts.
- Adding an advanced property search system.
- Adding more properties.
- Adding a property management dashboard.
- Adding online viewing bookings.
- Adding database-driven property listings.
- Improving analytics and reporting.

---

## 16. Conclusion

CBD OPS provides a responsive and professional real-estate website that allows users to browse properties, view property information and communicate with the business.

Part 3 improvements strengthened the website through JavaScript functionality, form validation, SEO optimisation, accessibility improvements, internal linking, sitemap and robots configuration, documentation, version control and deployment preparation.
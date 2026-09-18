# CBD OPS - Changelog

This changelog documents the development, improvements, corrections and refinements made to the CBD OPS real estate website. It records the major changes made during development, including design, functionality, responsiveness, accessibility, property content, image management and documentation.

---

## Version 1.0 - Initial Website Development
**Date: 03 August 2026**

### Affected Files
- `index.html`
- `properties.html`
- `property-details.html`
- `about.html`
- `contact.html`
- `css/style.css`
- `js/script.js`

### Added
- Created the CBD OPS homepage.
- Created the properties listing page.
- Created the property details page.
- Created the About Us page.
- Created the Contact page.
- Added an external CSS stylesheet.
- Added website navigation and footer.
- Added property cards.
- Added property search sections.
- Created the initial HTML5 website structure.
- Established the basic JavaScript structure.

### Reason for Change
The initial development established the core structure of the CBD OPS website and created the foundation for property browsing, property information and customer enquiries.

---

## Version 1.1 - Visual Design and Branding
**Date: 07 August 2026**

### Affected Files
- `index.html`
- `properties.html`
- `property-details.html`
- `about.html`
- `contact.html`
- `css/style.css`

### Added
- Applied the CBD OPS black, white and gold colour scheme.
- Added Google Fonts typography.
- Improved heading and paragraph typography.
- Improved spacing between website sections.
- Improved property card styling.
- Added styled buttons.
- Added navigation hover effects.
- Added button hover effects.
- Added borders and shadows.
- Added decorative design elements.
- Improved page spacing and alignment.
- Improved the overall visual appearance of the website.

### Reason for Change
The website required a stronger and more consistent visual identity. The colour scheme, typography, spacing and decorative elements were improved to create a cohesive CBD OPS design across the website.

---

## Version 1.2 - Responsive Design
**Date: 12 August 2026**

### Affected Files
- `css/style.css`
- `index.html`
- `properties.html`
- `property-details.html`
- `about.html`
- `contact.html`

### Added
- Added CSS media queries.
- Added responsive layouts for different screen widths.
- Added tablet layout adjustments.
- Added mobile layout adjustments.
- Added responsive image styling.
- Adjusted typography for smaller screens.
- Improved mobile navigation.
- Adjusted property cards for smaller displays.
- Improved spacing and sizing on mobile and tablet displays.

### Reason for Change
The website needed to adapt to different devices and screen sizes. Responsive CSS was added to improve the presentation and usability of the website across desktop, tablet and mobile devices.

---

## Version 1.3 - JavaScript and Property Functionality
**Date: 16 August 2026**

### Affected Files
- `js/script.js`
- `index.html`
- `properties.html`
- `property-details.html`
- `contact.html`

### Added
- Added JavaScript functionality for the mobile navigation menu.
- Added property filtering functionality.
- Added dynamic property details using URL parameters.
- Added multiple property listings.
- Added property image galleries.
- Added homepage property search functionality.
- Added contact form validation.
- Added support for multiple property IDs.

### Property IDs
- `modern-home`
- `coastal-home`
- `luxury-home`
- `city-apartment`

### Property Information Added
- Property titles.
- Property status.
- Property locations.
- Property types.
- Property prices.
- Bedroom information.
- Bathroom information.
- Garage information.
- Property descriptions.
- Main property images.
- Property gallery images.

### Reason for Change
The website needed interactive functionality so users could search, filter and view detailed information about different properties.

---

## Version 1.4 - Property Image Integration and Corrections
**Date: 18 August 2026**

### Affected Files
- `js/script.js`
- `property-details.html`
- `properties.html`
- `index.html`
- `Images/`

### Added
- Added additional property images.
- Updated property gallery images.
- Added different images for individual properties.
- Updated image references to use the `Images` folder.
- Corrected property image paths.
- Updated gallery references for individual property IDs.

### Fixed
- Corrected incorrectly assigned property images.
- Reduced unnecessary image duplication between property listings.
- Updated property galleries to better match their respective properties.

### Reason for Change
Property images were refined so that the images displayed on each property page better matched the relevant property.

---

## Version 1.5 - Accessibility and Content Improvements
**Date: 19 August 2026**

### Affected Files
- `index.html`
- `properties.html`
- `property-details.html`
- `about.html`
- `contact.html`
- `css/style.css`
- `js/script.js`

### Added
- Added References sections to website pages.
- Added references for external resources such as Google Fonts.
- Added visible keyboard focus states.
- Added accessible form labels and attributes.
- Added `aria-live` messaging for form feedback.
- Added `aria-live` messaging for property filtering feedback.
- Added `aria-expanded` to navigation controls.
- Improved alternative text for property images.
- Updated property information.
- Updated website content.

### Reason for Change
Accessibility and usability were improved so that interactive elements provide clearer feedback and can be used more effectively by website users.

---

## Version 1.6 - Property Details Improvements
**Date: 20 August 2026**

### Affected Files
- `property-details.html`
- `js/script.js`
- `css/style.css`

### Added
- Improved the property details page layout.
- Improved property information presentation.
- Improved the property image gallery.
- Improved spacing around property details.
- Improved responsive styling for property details.

### Fixed
- Improved the connection between property IDs and displayed information.
- Corrected property detail display issues.
- Removed unnecessary duplicate JavaScript from the property details page.

### Reason for Change
The property details page was refined so that selected properties could display their corresponding information and images in a consistent layout.

---

## Version 1.7 - Property Image Gallery Refinements
**Date: 21 August 2026**

### Affected Files
- `js/script.js`
- `property-details.html`
- `css/style.css`
- `Images/`

### Changed
- Reviewed property gallery assignments.
- Updated the Modern Family Home gallery.
- Updated the Contemporary Coastal Home gallery.
- Updated the Luxury Four Bedroom Home gallery.
- Updated the Modern City Apartment gallery.
- Improved the variety of images used for individual properties.

### Fixed
- Corrected cases where the same image was reused unnecessarily across different properties.
- Updated property gallery references where an incorrect image was assigned.
- Added alternative property images where required.

### Reason for Change
The property gallery content was refined to provide each property with a more appropriate collection of images and reduce unnecessary duplication.

---

## Version 1.8 - Property Image Display Refinement
**Date: 22 August 2026**

### Affected Files
- `property-details.html`
- `css/style.css`

### Changed
- Reviewed the dimensions of the main property image.
- Reviewed gallery image dimensions.
- Adjusted image display behaviour.
- Improved the presentation of property images.

### Fixed
- Addressed excessive image cropping caused by fixed image containers and `object-fit: cover`.
- Improved image display so important parts of property images are less likely to be cut off.

### Reason for Change
Some property images were being cropped because of fixed image containers. The image styling was refined to improve the visibility of the complete property images.

---

## Version 1.9 - Code Cleanup and Website Integration
**Date: 24 August 2026**

### Affected Files
- `index.html`
- `properties.html`
- `property-details.html`
- `about.html`
- `contact.html`
- `css/style.css`
- `js/script.js`

### Fixed
- Standardised navigation across website pages.
- Standardised footer structures.
- Connected pages to the external stylesheet.
- Connected pages to the JavaScript file where required.
- Removed unnecessary duplicate JavaScript.
- Improved the property details URL system.
- Improved property filtering structure.
- Improved homepage search parameters.
- Improved contact form structure.
- Improved validation feedback.

### Reason for Change
The website required code cleanup and integration so that all pages used a consistent structure and shared functionality correctly.

---

## Version 2.0 - Project Documentation
**Date: 01 September 2026**

### Affected Files
- `README.md`
- `CHANGELOG.md`

### Added
- Expanded the project overview.
- Added project objectives.
- Documented website features.
- Documented technologies used.
- Documented website pages.
- Documented the project structure.
- Added accessibility information.
- Added responsive design information.
- Added development information.
- Added future improvement plans.
- Expanded the changelog.
- Added documentation of major development stages.

### Reason for Change
Project documentation was expanded to provide a clearer record of the website's development, structure, functionality and future development plans.

---

## Version 2.1 - Final Website Refinements
**Date: 17 September 2026**

### Affected Files
- `index.html`
- `properties.html`
- `property-details.html`
- `about.html`
- `contact.html`
- `css/style.css`
- `js/script.js`
- `README.md`
- `CHANGELOG.md`

### Changed
- Continued refinement of website layout and presentation.
- Updated property content where required.
- Refined property image usage.
- Improved consistency between website pages.
- Updated project documentation to reflect the current project structure and functionality.

### Reason for Change
The website was refined during the final development stage to bring the pages, property information, styling, functionality and documentation into a consistent structure.

---

# Part 1 Feedback and Improvements

## Feedback Received

The actual feedback received from the Part 1 assessment should be recorded here.

> **[INSERT ACTUAL PART 1 MARKER FEEDBACK HERE]**

## Changes Made in Response

The specific changes made in response to the Part 1 feedback should be listed here after the original feedback has been reviewed.

No marker feedback has been invented or assumed in this changelog.

---

# Testing and Validation

Testing results have not been recorded as completed until final testing has been performed.

The following areas should be checked before submission:

- Website navigation.
- Property search.
- Property filtering.
- Property details.
- Property image galleries.
- Contact form validation.
- Mobile navigation.
- Responsive layouts.
- Responsive images.
- Keyboard navigation.
- Accessibility features.
- Page links.
- JavaScript functionality.

Actual testing results should be added after final testing.

---

# Version Control

The project was developed using Git and GitHub.

Development commits should document major changes including:

- Initial website development.
- Visual design changes.
- Responsive design.
- JavaScript functionality.
- Property functionality.
- Accessibility improvements.
- Property image updates.
- Bug fixes.
- Code cleanup.
- Documentation updates.

Commit messages should clearly describe the changes made so that the development history can be followed.

---

# Future Improvements

Potential future improvements include:

- Adding additional property listings.
- Further improving accessibility.
- Connecting enquiry forms to a backend service.
- Adding more advanced property search functionality.
- Adding user accounts.
- Adding property saving or favourites.
- Adding a database for property listings.
- Adding an online property management system.
- Adding property comparison functionality.
- Adding map-based property searching.
- Adding additional filtering options.
- Adding additional interactive features.

---

# Changelog Summary

| Version | Date | Main Development Area |
|---|---|---|
| 1.0 | 03 August 2026 | Initial website development |
| 1.1 | 07 August 2026 | Visual design and branding |
| 1.2 | 12 August 2026 | Responsive design |
| 1.3 | 16 August 2026 | JavaScript and property functionality |
| 1.4 | 18 August 2026 | Property image integration |
| 1.5 | 19 August 2026 | Accessibility and content |
| 1.6 | 20 August 2026 | Property details improvements |
| 1.7 | 21 August 2026 | Property image gallery refinements |
| 1.8 | 22 August 2026 | Property image display |
| 1.9 | 24 August 2026 | Code cleanup and integration |
| 2.0 | 01 September 2026 | Project documentation |
| 2.1 | 17 September 2026 | Final website refinements |
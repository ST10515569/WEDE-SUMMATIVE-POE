# Pawsitive Obedience Academy

## Project Overview

Pawsitive Obedience Academy is a responsive website created for a professional dog-training organisation. The website provides information about the academy, its training services, contact locations and allows potential clients to make enquiries.

The purpose of the website is to provide users with an easy-to-use platform where they can learn about the organisation, explore training programmes and contact the academy.

---

## Website Features

The website consists of five main pages:

### 1. Home Page

The Home page introduces Pawsitive Obedience Academy and provides an overview of the organisation.

It includes:
- Hero section
- Introduction to the academy
- Overview of training services
- Call-to-action buttons
- Navigation menu
- Footer

### 2. About Us

The About Us page provides information about the organisation and its approach to dog training.

It includes:
- Organisation story
- Mission statement
- Vision statement
- Training philosophy
- Trainer information

### 3. Services

The Services page provides information about the different training programmes offered.

These include:
- Puppy Training
- Basic Obedience
- Advanced Training
- Behaviour Training

Each service includes a description, relevant image and an enquiry button.

Additional interactive features include:
- Search bar for filtering training services.
- Frequently Asked Questions (FAQ) accordion.
- Clickable service images with a lightbox feature.
- Hover animations on service cards, buttons and images.
- JavaScript scroll-reveal animations.

### 4. Enquiry

The Enquiry page contains a form that allows users to submit information about themselves and their dog.

The form includes:
- Full name
- Email address
- Phone number
- Dog's name
- Dog's age
- Training service selection
- Message
- Submit button

JavaScript and HTML validation are used to check required fields, input formats and character limits.

A customised success message is displayed when valid information is submitted.

### 5. Contact

The Contact page provides users with ways to contact the academy.

It includes:
- Contact information
- Training locations
- Durban location
- Umhlanga location
- Embedded Google Maps
- Contact form

The Contact form uses JavaScript validation and a mailto link to prepare an email containing the customer's name, email address and message.

The user must send the prepared email through their configured email application.

---

## JavaScript Functionality

JavaScript was implemented to improve website functionality and user interaction.

### Form Validation
- Checks required fields.
- Validates email addresses.
- Checks phone number formats.
- Validates dog age.
- Applies minimum and maximum character limits.
- Displays customised error messages.
- Displays successful submission feedback.

### FAQ Accordion
- Allows visitors to expand and collapse frequently asked questions.
- Uses JavaScript click events to display and hide answers.

### Image Gallery and Lightbox
- Makes service images clickable.
- Displays enlarged images in a lightbox overlay.
- Includes a close button.
- Allows users to close the lightbox by clicking outside the image or pressing Escape.

### Dynamic Service Search
- Allows visitors to search for training services.
- Filters service cards as users type.
- Displays a message when no matching services are found.
- Restores all services when the search field is cleared.

### Animations
- CSS hover transitions on service cards, buttons and images.
- JavaScript scroll-reveal animations.
- Smooth transitions when service cards appear on screen.

### Email Functionality
- Uses a mailto link to prepare customer enquiries.
- Automatically includes the customer's name, email and message.
- Opens the user's configured email application.
- Requires the customer to send the email manually.

---

## Search Engine Optimisation (SEO)

SEO improvements were implemented across all five HTML pages.

These include:
- Unique page titles.
- Individual meta descriptions.
- Relevant dog-training keywords.
- Descriptive image alternative text.
- Structured HTML headings.
- Internal navigation links.
- Mobile viewport settings.

Two additional SEO files were created:

**sitemap.xml**
- Lists the five main website pages.
- Helps search engines discover website content.
- Requires the final published website URL.

**robots.txt**
- Provides instructions to search engine crawlers.
- Allows access to public website pages.
- Includes a sitemap reference.

---

## CSS Styling

The website uses an external CSS stylesheet named `style.css`, linked to all five HTML pages.

The CSS was used to create a consistent visual design across the website.

### CSS Features
- CSS reset for consistent margins and padding.
- Consistent font family and typography.
- Typography scale for headings and paragraphs.
- Pink and purple colour scheme.
- CSS Grid for major content layouts.
- Flexbox for navigation and alignment.
- Buttons with hover, focus and active states.
- Borders, border-radius and box shadows.
- Consistent spacing and sizing.
- Responsive media queries.
- FAQ accordion styling.
- Search bar styling.
- Lightbox styling.
- Card hover animations.
- Scroll-reveal animation styling.

---

## Responsive Design

The website was designed to work across desktop, tablet and mobile screen sizes.

### Desktop
The desktop layout uses multi-column layouts for sections such as the hero area, service cards and location sections.

### Tablet
A breakpoint at 1024px was added to adjust content widths and change some multi-column layouts.

### Mobile
A breakpoint at 768px was used to adapt the website for smaller screens.

On mobile devices:
- Navigation changes to a vertical layout.
- Multi-column layouts change to single-column layouts.
- Font sizes are reduced where appropriate.
- The logo is reduced in size.
- Images adjust to fit the available screen width.
- Service and location sections stack vertically.

Relative units including `rem`, `em` and `%` were used to improve responsive behaviour.

---

## Responsive Images

Responsive image techniques were implemented for the main hero image.

Different image sizes were created:
- `dog-training-small.jpg`
- `dog-training-medium.jpg`
- `dog-training.jpg`

The HTML uses `srcset` and `sizes` to allow the browser to select an appropriate image based on the available screen size.

---

## Accessibility

Accessibility was considered during the development of the website.

Examples include:
- Alternative text was added to website images.
- Descriptive navigation links were used.
- Form labels were included.
- Accessible names were provided for the service search field.
- Focus states were added to interactive elements.
- Content was tested at different screen sizes.
- The website was checked to ensure that content remains readable and usable on smaller screens.

---

## Performance and Security

Basic website performance and security considerations were included.

These include:
- Responsive image implementation.
- Lazy loading for embedded Google Maps.
- Semantic HTML elements.
- Client-side form validation.
- Appropriate iframe attributes.
- Responsive layouts to support different devices.

---

## Testing

The website was tested using Google Chrome and Chrome Developer Tools.

Testing was performed at different viewport sizes, including:
- Desktop: approximately 1440px
- Tablet: approximately 1024px
- Mobile: approximately 390px

The following were tested:
- Navigation
- Page layouts
- Images
- Buttons
- Enquiry form validation
- Contact form validation
- FAQ accordion
- Image lightbox
- Service search functionality
- CSS hover animations
- JavaScript scroll animations
- Email preparation
- Typography
- Responsive breakpoints
- Mobile layouts
- Content alignment
- Horizontal scrolling

Interactive features were tested to ensure that they function correctly.

---

## GitHub and Version Control

GitHub is used to store and manage the website project.

The project is regularly committed and pushed to the remote repository.

Descriptive commit messages are used to document development changes.

Examples include:
- `Add organisation logo to all website pages`
- `Implement Part 2 CSS and responsive design`
- `Add responsive image support`
- `Implement JavaScript form validation`
- `Add interactive FAQ accordion`
- `Implement image gallery lightbox`
- `Add dynamic service search`
- `Add CSS and JavaScript animations`
- `Implement SEO metadata and sitemap`
- `Update Part 3 documentation`

---

## Changelog

A separate `Changelog.md` file is included in the project.

The changelog records the development and changes made throughout the project, including:
- Initial website development.
- Part 1 feedback corrections.
- CSS improvements.
- Responsive design.
- Responsive image implementation.
- JavaScript functionality.
- Form validation.
- Interactive website features.
- SEO improvements.
- Testing and debugging.
- Documentation updates.

---

## Project Planning

The website was planned using a sitemap and low-fidelity wireframes.

The sitemap represents the structure of the website and the content and options available to users on each page.

Low-fidelity wireframes were created using draw.io to plan the layout and information hierarchy before development.

---

## AI and Design Acknowledgement

OpenAI's ChatGPT was used as a design and development support tool during the project.

It was used to assist with layout suggestions, colour scheme ideas, content organisation, JavaScript guidance, CSS guidance and troubleshooting.

The final design, content, code and implementation were reviewed, adapted and customised by the student according to the project requirements.

---

## References

The following resources were used during the planning and development of the website:

- draw.io – used for creating low-fidelity wireframes.
- MDN Web Docs – used as a reference for HTML, CSS and JavaScript development.
- W3Schools – used as a reference for HTML, CSS, JavaScript and responsive web design.
- The Smart Dog Training Centre – used for research into dog-training website content and structure.
- Morningside K9 Academy – used for research into dog-training services and website presentation.
- OpenAI ChatGPT – used as design and development support.

Full reference details are included in the project proposal and reference documentation.

---

## Project Status

**Part 1:** Completed

**Part 2:** CSS styling and responsive design completed.

**Part 3:** JavaScript functionality and SEO enhancements implemented.

**Responsive testing:** Completed.

**Interactive features:** Implemented and tested.

**Documentation:** Updated.

**GitHub repository:** Updated with project files and documentation.

---

## Technologies Used

The website was developed using the following technologies:

- HTML5
- CSS3
- JavaScript
- Visual Studio Code
- Google Chrome Developer Tools
- draw.io for low-fidelity wireframes
- GitHub for version control

---

## Website Structure

The project is organised into separate HTML, CSS, JavaScript and image folders.

```text
Pawsitive-Obedience-Academy/
│
├── index.html
├── about-us.html
├── services.html
├── enquiry.html
├── contact.html
├── sitemap.xml
├── robots.txt
├── README.md
├── Changelog.md
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── images/
    └── Website images and logo
```

**Note:** Update the sitemap and robots.txt with the actual published website URL before deployment. The enquiry form currently displays a success message but does not transmit submissions to a database or email service. The Contact form prepares an email using the visitor's email application.
# Interactive Card Details Form

This project is an interactive credit card details form that allows users to input cardholder information, with real-time updates reflected on a visual card representation. The form includes input validation, error handling, and a success state upon valid submission. Built with HTML, CSS, and JavaScript, it features a responsive design optimized for both mobile and desktop devices.

## Features

- ### Real-Time Card Updates:

  - Cardholder name updates on the card front in uppercase as the user types, defaulting to "JANE APPLESEED" if empty.
  - Card number updates with automatic space formatting (every 4 digits), defaulting to "0000 0000 0000 0000" if empty.
  - Expiry date (MM/YY) updates with padded zeros, defaulting to "00/00" if empty.
  - CVC updates on the card back, defaulting to "000" if empty.

- ### Form Validation:

  - Cardholder Name: Cannot be empty.
  - Card Number: Must be 16 digits; non-digits are stripped, and spaces are added automatically.
  - Expiry Date: Month (1–12) and year (not expired, compared to current date) must be valid.
  - CVC: Must be 3 or 4 digits.
  - Error messages display below invalid fields with a red border.

- ### Success State:

  - Displays a "Thank You" message with a checkmark icon upon valid submission.
  - A "Continue" button resets the form and card displays, returning to the input state.

- ### Responsive Design:

  - Mobile: Card display and form are stacked vertically, with a white band at the bottom of the card area.
  - Desktop (≥1440px): Card display on the left (33.33% width), form centered on the right.

- ### Styling:
  Uses Tailwind CSS (via CDN) for responsive layouts and custom CSS for card visuals.
  Features gradient focus effects on inputs, hover animations on buttons, and a clean, modern aesthetic with the Space Grotesk font.

# Installation

### 1. Clone the Repository:

```
git clone https://github.com/Jaymieblaze/interactive-card-details-form-main.git
cd interactive-card-details-form
```

### 2. Install Dependencies:

- No external dependencies are required, as Tailwind CSS is included via CDN and JavaScript runs natively.
- Ensure you have a modern web browser (e.g., Chrome, Firefox, Edge) to run the project.

### 3. File Setup:

- Place the following files in the project directory:
- `index.html`: Main HTML structure.
- `style.css`: Custom styles for card visuals and form.
- `script.js`: JavaScript for real-time updates, validation, and state management.
- `images/`: Folder containing `bg-main-mobile.png`, `bg-main-desktop.png`, `bg-card-front.png`, `bg-card-back.png`, `favicon-32x32.png`, and `icon-complete.svg`.

### 4. Run the Project:

- Open index.html in a web browser directly, or serve it using a local development server (e.g., Live Server in VS Code or npx http-server).

# Usage

### 1. Open the Application:

- Load index.html in a browser to view the interactive card form.

### 2. Interact with the Form:

- **Cardholder Name**: Enter a name (e.g., "Jane Appleseed"). Updates on the card front in uppercase.
- **Card Number**: Enter up to 16 digits. Non-digits are removed, and spaces are added every 4 digits (e.g., "1234 5678 9123 0000").
- **Expiry Date**: Enter month (MM) and year (YY). Month must be 1–12, and the date must not be expired.
- **CVC**: Enter a 3- or 4-digit code, displayed on the card back.
- **Validation**: Invalid inputs trigger error messages and red borders on fields.
- **Submit**: Click the "Confirm" button to validate. If valid, the form hides, and a success message appears.

### 3. Success State:

- A "Thank You" message with a checkmark icon appears after valid submission.
- Click the "Continue" button to reset the form and card displays (name to "JANE APPLESEED", number to "0000 0000 0000 0000", expiry to "00/00", CVC to "000") and return to the form.

### 4. Responsive Behavior:

- On mobile, the card display (with a white band at the bottom) and form are stacked vertically.
- On desktop (≥1440px), the card display occupies the left 33.33% of the viewport, with the form centered on the right.

# File Structure
```
interactive-card-details-form/
├── images/
│ ├── bg-main-mobile.png # Mobile background for card display
│ ├── bg-main-desktop.png # Desktop background for card display
│ ├── bg-card-front.png # Card front background
│ ├── bg-card-back.png # Card back background
│ ├── favicon-32x32.png # Favicon
│ └── icon-complete.svg # Success icon
├── index.html # Main HTML file
├── style.css # Custom CSS styles
├── script.js # JavaScript for interactivity and validation
└── README.md # Project documentation
```

# Technologies Used

- **HTML5**: Structure for the card display, form, and success state.
- **CSS3**: Custom styles with Tailwind CSS (via CDN) for responsive design, gradient focus effects, and button animations.
JavaScript: Handles real-time input updates, form validation (card number, expiry date, CVC), and toggling between form and success states.
Fonts: Space Grotesk (via Google Fonts) for typography.

# Notes

- ### JavaScript Functionality:
  - Real-time updates use input event listeners to sync form inputs with card displays.
  - Card number formatting uses regex to strip non-digits and add spaces every 4 digits.
  - Validation checks for empty fields, correct formats, and non-expired dates (relative to the current date).
The success state toggles visibility of the form (formContainer) and success message (successContainer) using display styles.

- ### Known Issues:
  - The card front and back elements overlap in the card display area due to identical positioning (top: 50%, left: 50%). Consider offsetting them vertically (e.g., top: 40% and top: 60%) for better visibility.
  - A thin line may appear at the bottom of the .card-display-band on mobile due to rendering gaps. This is mitigated with bottom: -1px and z-index: 3 in the CSS.

- ### Improvements:
  - Add accessibility features (e.g., ARIA labels, focus management for screen readers).
  - Implement unit tests for validation logic using a testing framework (e.g., Jest).
  - Optimize background images for faster loading (e.g., compress or use modern formats like WebP).
  - Add support for keyboard-only navigation (e.g., ensure "Continue" button is focusable).

- **License**: This project is unlicensed. Contact the repository owner for usage permissions.

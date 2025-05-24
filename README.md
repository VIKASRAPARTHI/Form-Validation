# React Form Validation Application

A comprehensive React form application with validation for user registration, built without third-party validation libraries.

## Features

### Form Fields
- **First Name** (required)
- **Last Name** (required)
- **Username** (required)
- **Email** (required with email format validation)
- **Password** (required with show/hide toggle, minimum 6 characters)
- **Phone Number** (required with country code, 10-digit validation)
- **Country** (required dropdown)
- **City** (required dropdown, dependent on country selection)
- **PAN Number** (required with format validation: ABCDE1234F)
- **Aadhar Number** (required with 12-digit validation)

### Validation Features
- Real-time validation with error messages
- Submit button disabled until all fields are valid
- Format validation for email, PAN, Aadhar, and phone numbers
- Country-dependent city selection
- Automatic country code assignment based on country selection

### Navigation
- Form submission redirects to details page
- Details page displays all submitted information
- Navigation back to form
- Clear data functionality

### User Experience
- Responsive design for mobile and desktop
- Accessible form controls with proper focus management
- Password visibility toggle
- Loading states and animations
- Error highlighting and success states

## Technology Stack

- **React 18** - Frontend framework
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and development server
- **CSS3** - Styling with modern features
- **JavaScript ES6+** - Modern JavaScript features

## Installation and Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Assignment-1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173/`

## Project Structure

```
src/
├── components/
│   ├── UserForm.jsx          # Main form component
│   ├── UserForm.css          # Form styling
│   ├── UserDetails.jsx       # Details display component
│   └── UserDetails.css       # Details styling
├── test/
│   └── FormValidation.test.js # Validation tests
├── App.jsx                   # Main app with routing
├── App.css                   # Global styles
└── main.jsx                  # App entry point
```

## Validation Rules

### Email
- Must contain @ symbol
- Must have domain extension
- Format: `user@domain.com`

### Phone Number
- Must be exactly 10 digits
- Only numeric characters allowed
- Automatically prefixed with country code

### PAN Number
- Format: 5 letters + 4 digits + 1 letter
- Example: `ABCDE1234F`
- Case sensitive (uppercase required)

### Aadhar Number
- Must be exactly 12 digits
- Only numeric characters allowed

### Password
- Minimum 6 characters
- Show/hide toggle available

## Countries and Cities

The application includes predefined data for:
- **India**: Mumbai, Delhi, Bangalore, Chennai, Kolkata, Hyderabad, Pune, Ahmedabad
- **USA**: New York, Los Angeles, Chicago, Houston, Phoenix, Philadelphia, San Antonio
- **UK**: London, Birmingham, Manchester, Glasgow, Liverpool, Leeds, Sheffield
- **Canada**: Toronto, Montreal, Vancouver, Calgary, Edmonton, Ottawa, Winnipeg
- **Australia**: Sydney, Melbourne, Brisbane, Perth, Adelaide, Gold Coast, Newcastle

## Testing

### Manual Testing
1. Fill out the form with valid data
2. Try submitting with invalid data to see validation errors
3. Test the show/hide password functionality
4. Test country/city dependency
5. Verify form submission and navigation to details page

### Validation Testing
Open browser console and run:
```javascript
// Load test functions
runFormTests()
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Accessibility Features

- Proper form labels and ARIA attributes
- Keyboard navigation support
- Focus management
- High contrast mode support
- Screen reader friendly

## Performance Features

- Optimized re-renders with proper state management
- Lazy loading of validation
- Efficient form state updates
- Minimal bundle size

## Future Enhancements

- Add more countries and cities
- Implement form data persistence
- Add file upload for profile picture
- Email verification
- Multi-step form wizard
- Dark mode support
- Internationalization (i18n)

## Deployment

This application is ready for deployment on Vercel. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Quick Deploy to Vercel

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Deploy using Vercel CLI:**
   ```bash
   npx vercel
   ```

3. **Or deploy via GitHub:**
   - Push to GitHub repository
   - Connect to Vercel dashboard
   - Auto-deploy on every push

### Build Information

- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Framework:** Vite + React
- **Node Version:** 18+

## License

This project is created for educational purposes.

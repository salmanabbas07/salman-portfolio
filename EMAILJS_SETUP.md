# EmailJS Setup Instructions

## Current Status: ❌ NOT CONFIGURED

The Contact form is currently using placeholder values and **cannot send emails**. The `.env` file contains:
```
VITE_EMAILJS_SERVICE_ID=your_key
VITE_EMAILJS_TEMPLATE_ID=your_key
VITE_EMAILJS_PUBLIC_KEY=your_key
```

These are placeholder values that must be replaced with real EmailJS credentials.

---

## What is EmailJS?

EmailJS is a service that allows you to send emails directly from client-side JavaScript without a backend server. It works by:
1. Connecting to your email service (Gmail, Outlook, etc.)
2. Using email templates you create in the EmailJS dashboard
3. Sending form data through EmailJS servers to your email inbox

---

## Required Setup Steps

### Step 1: Create an EmailJS Account

1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Add an Email Service

1. Log in to EmailJS dashboard
2. Go to "Email Services" → "Add New Service"
3. Select "Gmail" (or your preferred email provider)
4. **For Gmail**, you have two options:

   **Option A: OAuth Connection (Recommended)**
   - Click "Connect Account"
   - Sign in with your Google account
   - Grant EmailJS permission to send emails on your behalf
   - This is the easiest and most secure method

   **Option B: SMTP with App Password**
   - Enable 2-factor authentication on your Google account
   - Generate an App Password: https://myaccount.google.com/apppasswords
   - Use the App Password when configuring the SMTP service in EmailJS

5. After connecting, you'll receive a **Service ID** (e.g., `service_abc123`)

### Step 3: Create an Email Template

1. In EmailJS dashboard, go to "Email Templates" → "Create New Template"
2. Configure the template:

   **Subject Line:**
   ```
   New Contact Form Message from {{from_name}}
   ```

   **Email Body (HTML):**
   ```html
   <h3>New Contact Form Submission</h3>
   
   <p><strong>Name:</strong> {{from_name}}</p>
   <p><strong>Contact:</strong> {{contact_info}}</p>
   <p><strong>Subject:</strong> {{subject}}</p>
   
   <hr>
   
   <h4>Message:</h4>
   <p>{{message}}</p>
   
   <hr>
   
   <p><em>Sent from your portfolio contact form</em></p>
   ```

3. **Important:** The template variables must match exactly:
   - `{{from_name}}` - Sender's name
   - `{{contact_info}}` - Sender's email or phone
   - `{{subject}}` - Message subject
   - `{{message}}` - Message content

4. Set the "To Email" to your Gmail address: `abbassalman813@gmail.com`
5. Save the template
6. You'll receive a **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Your Public Key

1. In EmailJS dashboard, go to "Account" → "General"
2. Copy your **Public Key** (starts with a random string)
3. This key is safe to use in frontend code (it's not a secret)

### Step 5: Update Your .env File

Replace the placeholder values in your `.env` file with your actual credentials:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key_here
```

**Important:**
- Do not use quotes around the values
- Do not add extra spaces
- Make sure the file is named exactly `.env` (not `.env.txt`)

### Step 6: Restart the Development Server

After updating the `.env` file, you must restart the server:

```bash
# Stop the current server (Ctrl+C)
# Then start it again:
npm run dev
```

Vite only loads environment variables at startup.

---

## Testing the Email Functionality

1. Open your browser to http://localhost:5173/contact
2. Open the browser console (F12)
3. Fill out the contact form with test data
4. Click "Send Message"
5. Check the console for:
   - ✅ "EmailJS initialized successfully"
   - ✅ "Email sent successfully!"
6. Check your Gmail inbox for the test email

---

## Troubleshooting

### Error: "The Public Key is invalid"
- **Cause:** The public key in `.env` is incorrect or still a placeholder
- **Fix:** Copy the public key from EmailJS dashboard and update `.env`

### Error: "Service ID not found"
- **Cause:** Service ID is incorrect or service was deleted
- **Fix:** Check EmailJS dashboard for the correct Service ID

### Error: "Template ID not found"
- **Cause:** Template ID is incorrect or template was deleted
- **Fix:** Check EmailJS dashboard for the correct Template ID

### Error: "Failed to send"
- **Cause:** Email service not connected or template variables don't match
- **Fix:** 
  - Verify your email service is connected in EmailJS
  - Check that template variables match: `{{name}}`, `{{contact}}`, `{{subject}}`, `{{message}}`

### No error but no email received
- **Cause:** Email might be in spam folder or "To Email" not set correctly
- **Fix:**
  - Check spam folder
  - Verify template "To Email" is set to your Gmail address
  - Check EmailJS dashboard "Email History" for delivery status

---

## Security Notes

- **Public Key is safe to expose** - It's designed for client-side use
- **Never share your Private Key** - This is only for backend use
- **Rate limits apply** - Free EmailJS account has monthly limits
- **Email service credentials** are stored securely by EmailJS, not in your code

---

## What Happens When Someone Submits the Form

1. User fills out the Contact form
2. Form data is sent to EmailJS servers
3. EmailJS applies your email template with the form data
4. EmailJS sends the email through your connected Gmail service
5. Email arrives in your Gmail inbox
6. User sees "✅ Message sent successfully!" message

---

## Summary

To enable email functionality, you need to:

1. ✅ Create EmailJS account
2. ✅ Connect Gmail service (get Service ID)
3. ✅ Create email template with correct variables (get Template ID)
4. ✅ Copy Public Key from EmailJS dashboard
5. ✅ Update `.env` file with real credentials
6. ✅ Restart development server
7. ✅ Test the contact form

**Without completing these steps, the contact form cannot send emails.**

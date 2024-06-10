const nodemailer = require('nodemailer');
const Handlebars = require('handlebars');
const fs = require('fs');

// Create a transporter using SMTP settings
const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 587,
  secure: true, 
  secureConnection: false,
  tls: {
   ciphers: "SSLv3",
  },
  requireTLS: true,
  port: 465,
  debug: true,
  connectionTimeout: 10000,
  auth: {
    user: 'admin@manozagahostinger.online', // Your email address
    pass: '@Manozaga0', // Your email password
  },
});

const htmlTemplatePath = './email.hbs';
const html = fs.readFileSync(htmlTemplatePath, 'utf-8')

const template = Handlebars.compile(html);

const data = {
  managerEmail: "wama.skyhi@gmail.com",
  managerName: "Phivama Chum",
  employeeId: "00842", // Replace with actual ID
  employeeName: "Harry Parki", // Replace with actual name
  department: "SEA", // Replace with actual department
  leaveType: "Sick Leave", // Replace with actual leave type
  startDate: "10/June/2024", // Replace with actual start date
  endDate: "11/June/2024", // Replace with actual end date
  backToWork: "12/June/2024", // Replace with actual back to work date
  remark: "Headache", // Replace with actual remark (optional)
  createdAt: "09/June/2024" // Get current date and time
};


const compiled = template(data);



// Email details
const mailOptions = {
  from: '',
  to: 'phivama.chum@bowker-gfc.com.kh', // Recipient address
  cc: 'wama.skyhi@gmail.com',
  subject: 'E-Leaving Request',
  html: compiled// Add other replacements as needed
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});

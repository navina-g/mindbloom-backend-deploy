# MindBloom: Mental Wellness Application

A full-stack web application designed to support mental well-being by offering mood tracking, self-help resources, and therapist appointment bookings. Built using **React.js**, **Django REST Framework**, and **PostgreSQL**, and deployed on **Azure** with CI/CD via **Azure DevOps**.

Link: https://orange-desert-0473b9e00.6.azurestaticapps.net/

##  Features

###  User Registration & Login
- Secure signup/login with JWT authentication
- Logout functionality
![Screenshot 2025-05-29 232326](https://github.com/user-attachments/assets/65404f74-4651-447d-905e-877ddf020fbf)

 ### Application Dashboard
- Centralized hub for all features
- Seamless navigation across mood tracking, self-help, and appointments
- Responsive UI designed for accessibility and user experience
  ![Dashboard](https://github.com/user-attachments/assets/0477ee80-8d14-4530-9ac0-cbedd4acde37)

###  Mood Tracker
- Daily mood entry with timestamp
- Real-time mood history visualization on dashboard

###  Self-Help Resources
- Curated articles, exercises, and audio content
- Individual detail view for each resource

###  Appointment Booking
- Book therapist appointments with date & time
- View appointment history with status
![Untitled design](https://github.com/user-attachments/assets/79a51fd0-7a84-4a86-a70c-0157b646d453)

### User Dashboard
- Personalized mood trends and visual analytics
- Quick access to booked appointments and resource highlights
![Screenshot 2025-05-29 233306](https://github.com/user-attachments/assets/64c46c4e-7a0f-4c4e-b403-fa72bbb3d233)

---

## Tech Stack

| Category        | Technology                        |
|----------------|------------------------------------|
| Frontend       | React.js, Tailwind CSS, vite       |
| Backend        | Django, Django REST Framework      |
| Database       | PostgreSQL (or SQLite for local)   |
| Authentication | JWT (djangorestframework-simplejwt)|
| Deployment     | Azure App Service, Azure DevOps    |
| Version Control| Git, GitHub                        |

---

##  Installation & Setup

### Backend (Django) 

```bash
cd backend
python -m venv venv
source venv/Scripts/activate  # On Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```
###Frontend (React + vite)

```bash
cd frontend
npm install
npm start
```

### SOLID Principles Applied
  1. S – Single Responsibility Principle (SRP)
    Each Django view handles one responsibility (e.g., SignupView, LoginView, MoodEntryView).
    
    React components are modular (e.g., MoodForm, AppointmentCard), each focused on one UI task.
  
  2. O – Open/Closed Principle (OCP)
    New features (e.g., new mood types or appointment filters) can be added without modifying existing logic.
    
    Django REST Framework serializers and views are extensible.
    
  3. L – Liskov Substitution Principle (LSP)
    Inheritance used properly in Django views/serializers can be swapped or extended without breaking functionality.
  
  4. I – Interface Segregation Principle (ISP)
    APIs are separated by functionality (e.g., /api/moods/, /api/appointments/, /api/selfhelp/), so clients only access what they need.
  
  5. D – Dependency Inversion Principle (DIP)
    Frontend doesn't depend on backend implementation details — it uses clean APIs (abstractions).
    Axios or fetch in React handles communication without knowing backend internals.
    
    
  
  

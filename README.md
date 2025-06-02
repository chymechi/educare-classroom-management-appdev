# EDUCARE HUB

A mobile and web application that helps manage Early Childhood Care and Development (ECCD) centers across 27 barangays in Naga City. It streamlines daily tasks such as classroom observations, reporting, communication, student progress tracking, etc — making work easier for teachers, administrators, and parents.

Out of the four main modules, this documentation focuses on the **Classroom Management Module**, particularly the **Center Observation** feature used by the ECCD Office-in-Charge to evaluate teachers.

## Key Features

### Login & User Accounts

- Supports four types of users:
  - ECCD Office-in-Charge
  - SEED Teacher
  - Educare Teacher
  - Parent
- Secure login with password visibility toggle
- Keeps users logged in
- Works on both mobile and desktop

### Dashboard

- Role-based dashboard showing relevant menus
- Easy navigation:
  - Tab-based navigation for mobile
  - Sidebar navigation for desktop
- Clean and responsive layout for all screen sizes

### Classroom Observation

- Allows ECCD Office-in-Charge to evaluate teachers
- Covers observations across 28 barangays
- Filters available by barangay, center type, and school year
- Color-coded observation status (e.g., Pending, Done)
- Real-time updates and data synchronization

### Mobile & Desktop Friendly

- Optimized for mobile (card-based layout)
- Desktop layout includes full tables and advanced filters
- Seamless experience across iOS, Android, and Web

## User Roles

| Role                  | Access Description                   |
|-----------------------|--------------------------------------|
| ECCD Office-in-Charge | Full control of all centers          |
| SEED Teacher          | Teaching and evaluation access       |
| Educare Teacher       | Basic teaching access                |
| Parent                | View child progress and communication |

## Technologies Used

- **React Native** – Cross-platform mobile development
- **Expo** – Development tools and build system
- **Expo Router** – File-based routing system
- **React Context** – Handles login state and user sessions
- **Ionicons** – Icon set used for UI elements
- **React Native Picker** – Enhanced dropdown selection

## Status

This module is under active development. The following features are completed:

- Multi-role login system
- Classroom observation system with real-time updates
- Advanced filtering and search for observations

## Interfaces

## Desktop Screenshots

### Login Page
![Screenshot 2025-06-02 234317](https://github.com/user-attachments/assets/d5c2517e-6ea4-4cbe-9060-62fd49585d63)

### Login Page with the roles
![Screenshot 2025-06-02 234332](https://github.com/user-attachments/assets/09998ade-792d-4c35-91b3-98d86761f084)

### Dashboard with Sidebar (dashboard as default)
![Screenshot 2025-06-02 234532](https://github.com/user-attachments/assets/9c37450e-2a25-4c82-8318-dac974d58ba3)

### Sidebar-Observation Interface
![Screenshot 2025-06-02 234544](https://github.com/user-attachments/assets/09ed7ed9-c409-4dd9-8c08-fed2a9d5aca3)

### Center Observation Form
![Screenshot 2025-06-02 234600](https://github.com/user-attachments/assets/36ebae49-9700-48ea-afc6-7a336f316d91)

## Presentation

### Watch the video explanation here: https://drive.google.com/drive/folders/1RDd7kSVIfoVkAGQQssfOkQd9wuyRMrQ8?usp=sharing

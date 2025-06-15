# EDUCARE HUB

A mobile and web application that helps manage Early Childhood Care and Development (ECCD) Educare centers across Naga City. It facilitates daily tasks such as classroom observations, reporting, communication, student progress tracking, etc — making work easier for teachers, administrators, and parents.

Out of the four main modules, this documentation focuses on the **Classroom Management Module**.

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
- Covers observations across 27 barangays
- Filters available by barangay, center type, and school year
- Color-coded observation status (e.g., Pending, Done)
- Real-time updates and data synchronization

### Mobile & Desktop Friendly

- Optimized for mobile (card-based layout)
- Desktop layout includes full tables and advanced filters
- Seamless experience across iOS, Android, and Web

## User Roles

| Role                  | Access Description                    |
|-----------------------|---------------------------------------|
| ECCD Office-in-Charge | Full control of all centers           |
| SEED Teacher          | Teaching access (private)             |
| Educare Teacher       | Teaching access (public)              |
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
will update soon...

### Desktop 

#### Login Page
![Screenshot 2025-06-02 234317](https://github.com/user-attachments/assets/d5c2517e-6ea4-4cbe-9060-62fd49585d63)

#### Login Page with the roles
![Screenshot 2025-06-02 234332](https://github.com/user-attachments/assets/09998ade-792d-4c35-91b3-98d86761f084)

#### Dashboard with Sidebar (dashboard as default)
![Screenshot 2025-06-02 234532](https://github.com/user-attachments/assets/9c37450e-2a25-4c82-8318-dac974d58ba3)

#### Sidebar-Observation Interface
![Screenshot 2025-06-02 234544](https://github.com/user-attachments/assets/09ed7ed9-c409-4dd9-8c08-fed2a9d5aca3)

#### Center Observation Form
![Screenshot 2025-06-02 234600](https://github.com/user-attachments/assets/36ebae49-9700-48ea-afc6-7a336f316d91)

### Mobile

#### Login Page
![Screenshot_20250603_020013](https://github.com/user-attachments/assets/c1f12a10-c770-4fd8-9d77-4e914c6b068c)

#### Login Page with the roles
![Screenshot_20250603_020017](https://github.com/user-attachments/assets/62007cb3-3b51-4fa4-a767-64ab4e2765c3)

#### Dashboard with Sidebar (dashboard as default)
![Screenshot_20250603_020033](https://github.com/user-attachments/assets/b32bb104-9ba4-4f93-bdd9-bdf0d3709ed2)

#### Sidebar-Observation Interface
![Screenshot_20250603_020147](https://github.com/user-attachments/assets/610ca4d3-fb7d-4442-9dcc-93bc9638e5f8)

#### Center Observation Form
![Screenshot_20250603_020150](https://github.com/user-attachments/assets/0e690b3b-c160-46ae-9dca-c9c0d9780cc3)

## Presentation

#### Watch the video explanation here: https://drive.google.com/drive/folders/1RDd7kSVIfoVkAGQQssfOkQd9wuyRMrQ8?usp=sharing

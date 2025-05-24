# Ticketz Documentation

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Setup and Installation](#setup-and-installation)
- [Backend Documentation](#backend-documentation)
  - [API Endpoints](#api-endpoints)
  - [Data Models](#data-models)
  - [Key Libraries and Modules](#key-libraries-and-modules)
- [Frontend Documentation](#frontend-documentation)
  - [Components and Pages](#components-and-pages)
  - [State Management](#state-management)
  - [Key Libraries and Modules](#key-libraries-and-modules-frontend)
- [Key Features](#key-features)
  - [Ticketing System](#ticketing-system)
  - [Chat Functionality](#chat-functionality)
  - [WhatsApp Integration](#whatsapp-integration)
  - [Campaign Management](#campaign-management)
  - [User Management](#user-management)
- [Contributing](#contributing)
- [License](#license)

## Overview

Ticketz is a communicator with CRM and helpdesk features that utilizes WhatsApp as a means of communication with clients. This project was initiated as an Open Source project and has undergone various improvements. The objective of this project is to improve and keep open updates about the published Whaticket SaaS, mainly focused on application quality and ease of installation and use.

## Architecture

Ticketz employs a classic client-server architecture:

*   **Backend:** A robust Node.js application built with the Express.js framework and written in TypeScript. It serves a RESTful API for data operations and utilizes WebSockets for real-time communication. Key technologies include:
    *   **Node.js:** JavaScript runtime environment.
    *   **Express.js:** Web application framework for Node.js, used to build the REST API.
    *   **TypeScript:** Superset of JavaScript that adds static typing.
    *   **Sequelize:** (Likely) A promise-based Node.js ORM (Object-Relational Mapper) such as Sequelize is presumed for database interactions, supporting databases like PostgreSQL, MySQL, etc. This is suggested by the `./database` import in `app.ts` and common practices in Node.js applications of this type.
    *   **Socket.IO:** Enables real-time, bidirectional event-based communication (e.g., for chat messages, live updates, and notifications).
    *   **CORS (Cross-Origin Resource Sharing):** Middleware to enable controlled access to resources from different domains.
    *   **Cookie-Parser:** Middleware for parsing HTTP cookie headers.
    *   **Sentry:** An error tracking and monitoring platform.
    *   **Queueing System (e.g., BullMQ with Redis):** (Strongly implied by `messageQueue` and `sendScheduledMessages` in `app.ts`) Used for managing background jobs, processing message queues, and handling asynchronous tasks like sending scheduled messages.

*   **Frontend:** A dynamic single-page application (SPA) built with React. It interacts with the backend's RESTful API for data operations and uses WebSockets for real-time features. Key technologies include:
    *   **React:** A JavaScript library for building user interfaces.
    *   **Material-UI:** A popular React UI framework for pre-built components and styling.
    *   **React Query:** For data fetching, caching, synchronization, and server state management.
    *   **React Router:** For handling client-side routing and navigation within the SPA.
    *   **Socket.IO Client:** To connect with the backend WebSocket server for real-time updates.
    *   **Context API & Hooks:** For state management within components (e.g., `AuthContext`, `TicketsContext`, `SocketContext`).

*   **Communication Protocol:**
    *   The frontend and backend primarily communicate via a **RESTful API** for standard CRUD (Create, Read, Update, Delete) operations.
    *   **WebSockets** are used for features requiring real-time updates, such as live chat messages, notifications, and status changes, ensuring a responsive user experience.

## Setup and Installation

### Very Quick Start on a public Server

There are Docker images provided from the project, so you can get **ticketz** to work very easily on a public server (baremetal or VPS).

#### First setup

Before starting you must complete this checklist:

- [ ] Have a clean server running Ubuntu 20 or newer
- [ ] Ports 80 and 443 available and not filtered by firewall
- [ ] One hostname with configured DNS pointing to your server

After this, just log in to your server and issue the following command, replacing the hostnames you already configured and your email address:

```bash
curl -sSL get.ticke.tz | sudo bash -s app.example.com name@example.com
```

After a few minutes you will have the server running at the hostname you defined.

The default login will be the email address provided in the installation command and the default password is `123456`, you must change it right away.

#### Upgrade

The upgrade is just easy as the instalation, you just need to login to your server using the same username you used on the installation and issue the following command:

```bash
curl -sSL update.ticke.tz | sudo bash
```

Your server will go down and after some minutes it will be running in the latest released version.

#### Inspect logs

As all elements are running in containers the logs must be checked through the docker command.

You must login to your server using the same user you used for the installation.

First you need to move the current directory to the installation folder:

```bash
cd ~/ticketz-docker-acme
```

After this you can get a full log report with the following command:

```bash
docker compose logs -t
```

If you want to "tail follow" the logs just add a `-f` parameter to that command:

```bash
docker compose logs -t -f
```

### Running from Source code Using Docker

For installation, you need to have Docker Community Edition and the Git client installed. It is ideal to find the best way to install these resources on your preferred operating system. [The official Docker installation guide can be found here](https://docs.docker.com/engine/install/).

In both cases, it is necessary to clone the repository, then open a command terminal:

```bash
git clone https://github.com/allgood/ticketz.git
cd ticketz
```

#### Running Locally

By default, the configuration is set to run the system only on the local computer. To run it on a local network, you need to edit the `.env-backend-local` and `.env-frontend-local` files and change the backend and frontend addresses from `localhost` to the desired IP, for example, `192.168.0.10`.

To run the system, simply execute the following command:

```bash
docker compose -f docker-compose-local.yaml up -d
```

On the first run, the system will initialize the databases and tables, and after a few minutes, Ticketz will be accessible through port 3000.

The default username is `admin@ticketz.host`, and the default password is 123456.

The application will restart automatically after each server reboot.

Execution can be stopped with the command:

```bash
docker compose -f docker-compose-local.yaml down
```

#### Running and Serving on the Internet

Having a server accessible via the internet, it is necessary to adjust two DNS names of your choice, one for the backend and another for the frontend, and also an email address for certificate registration, for example:

* **backend:** api.ticketz.example.com
* **frontend:** ticketz.example.com
* **email:** ticketz@example.com

You need to edit the `.env-backend-acme` and `.env-frontend-acme` files, defining these values in them.

If you want to use reCAPTCHA in the company signup, you also need to insert the secret and site keys in the backend and frontend files, respectively.

This guide assumes that the terminal is open and logged in with a regular user who has permission to use the `sudo` command to execute commands as root.

Being in the project's root folder, execute the following command to start the service:

```bash
sudo docker compose -f docker-compose-acme.yaml up -d
```

On the first run, Docker will compile the code and create the containers, and then Ticketz will initialize the databases and tables. This operation can take quite some time, after which Ticketz will be accessible at the provided frontend address.

The default username is the email address provided on the `.env-backend-acme` file and the default password is 123456.

The application will restart automatically after each server reboot.

To terminate the service, use the following command:

```bash
sudo docker compose -f docker-compose-acme.yaml down
```

## Backend Documentation

### API Endpoints

The backend exposes a RESTful API with the following main groups of endpoints:

*   `/auth`: Handles authentication, including login, logout, and signup processes.
*   `/users`: Manages user accounts, profiles, and permissions.
*   `/settings`: Provides endpoints for configuring application-level settings.
*   `/contacts`: Manages contact information for clients and users.
*   `/tickets`: Core functionality for creating, updating, and managing support tickets.
*   `/tickettags`: Manages tags associated with tickets.
*   `/ticketnotes`: Handles notes or internal comments related to tickets.
*   `/whatsapp`: Manages WhatsApp channel integrations and configurations.
*   `/whatsappsession`: Handles WhatsApp session management (e.g., QR code, status).
*   `/messages`: Deals with sending and receiving messages through integrated channels like WhatsApp.
*   `/queues`: Manages queues for ticket routing and agent assignment.
*   `/queueoptions`: Configuration for options within specific queues.
*   `/companies`: Manages company-specific information, potentially for multi-tenant setups.
*   `/plans`: Handles different subscription plans or service tiers.
*   `/subscriptions`: Manages user or company subscriptions to plans.
*   `/invoices`: Deals with billing and invoice generation.
*   `/quickmessages`: Manages predefined or canned responses for quick replies.
*   `/helps`: Provides access to help articles or documentation.
*   `/dashboard`: Endpoints for fetching data displayed on administrative dashboards.
*   `/schedules`: Manages scheduled tasks or events within the application.
*   `/tags`: General purpose tagging for various resources (e.g., contacts, tickets).
*   `/contactlists`: Manages lists of contacts, often used for campaigns.
*   `/contactlistitems`: Manages individual contacts within a contact list.
*   `/campaigns`: Handles marketing or notification campaigns.
*   `/campaignsettings`: Configuration related to campaign functionalities.
*   `/announcements`: Manages system-wide announcements or notifications.
*   `/chats`: Provides endpoints for internal chat functionalities, if separate from ticketing.
*   `/pwa`: Endpoints related to Progressive Web App functionalities.
*   `/version`: Provides application version information.
*   `/ticketzoss`: Endpoints related to Ticketz Open Source Software specific features or information.

Note: The exact base path for some routes (e.g., `userRoutes` typically maps to `/users`) depends on the main router configuration in `server.ts` or `app.ts`. The descriptions above assume conventional RESTful naming.

### Data Models

The backend relies on several data models, likely managed by an ORM like Sequelize, to represent the application's core entities and their relationships. These models define the structure of the data stored in the database. Key models include:

*   Announcement
*   Baileys (related to WhatsApp integration)
*   BaileysKeys (related to WhatsApp integration)
*   Campaign
*   CampaignSetting
*   CampaignShipping
*   Chat
*   ChatMessage
*   ChatUser
*   Company
*   Contact
*   ContactCustomField
*   ContactList
*   ContactListItem
*   ContactTag
*   Counter
*   Help
*   Invoices
*   Message
*   OldMessage
*   OutOfTicketMessages
*   Plan
*   Queue
*   QueueOption
*   QuickMessage
*   Schedule
*   Setting
*   Subscriptions
*   Tag
*   Ticket
*   TicketNote
*   TicketTag
*   TicketTraking
*   User
*   UserQueue
*   UserRating
*   UserSocketSession
*   Whatsapp (representing WhatsApp connections)
*   WhatsappQueue

These models define the structure of the data (e.g., users, tickets, messages) and their relationships (e.g., a ticket belongs to a contact and a user, messages belong to a ticket). They are used throughout the backend services to interact with the database.

### Key Libraries and Modules

The backend leverages several key Node.js libraries and modules to provide its functionality. The definitive list of dependencies can be found in the `package.json` file in the `backend` directory. Prominent libraries observed or inferred include:

*   **`express`**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. Used for API routing, middleware, and handling HTTP requests.
*   **`sequelize`**: (Likely) A promise-based Node.js ORM for database interaction. It supports databases like Postgres, MySQL, MariaDB, SQLite, and MSSQL, and helps in mapping model definitions (like those listed above) to database tables.
*   **`jsonwebtoken`**: (Likely) Used for creating and verifying JSON Web Tokens (JWTs) for secure authentication and authorization.
*   **`socket.io`**: (Likely) Enables real-time, bidirectional, and event-based communication. Used for features like live chat and instant notifications.
*   **`cors`**: A Node.js package for providing a Connect/Express middleware that can be used to enable Cross-Origin Resource Sharing (CORS) with various options.
*   **`cookie-parser`**: Middleware to parse `Cookie` headers and populate `req.cookies` with an object keyed by the cookie names, useful for session management or authentication tokens.
*   **`@sentry/node`**: Sentry's SDK for Node.js, facilitating real-time error tracking and performance monitoring.
*   **`multer`**: (Likely) A Node.js middleware for handling `multipart/form-data`, which is primarily used for uploading files (e.g., attachments, profile pictures). The presence of `uploadConfig` suggests its use.
*   **`reflect-metadata`**: Used in conjunction with TypeScript decorators, often required by ORMs and dependency injection frameworks for their reflective capabilities.
*   **`express-async-errors`**: A utility that patches Express to automatically handle errors in asynchronous route handlers, simplifying error management.
*   **`./utils/logger`**: A custom-built logging module, likely wrapping a popular logging library (e.g., Pino, Winston), for recording application events, errors, and debugging information.
*   **Queueing System (e.g., BullMQ)**: (Strongly implied by `messageQueue` and `sendScheduledMessages` imports from `./queues`) Used for managing background jobs, processing message queues, and ensuring tasks like sending scheduled messages are handled efficiently without blocking the main application thread.

These libraries, along with others specified in the `backend/package.json` file, form the core of the backend system.

## Frontend Documentation

### Components and Pages

The frontend is structured into **Pages** (top-level views corresponding to routes) and **Components** (reusable UI building blocks).

**Key Pages (`frontend/src/pages/`) include:**

*   **Core Application & Ticketing:**
    *   `Dashboard`: The main landing page after login, providing an overview and statistics.
    *   `TicketResponsiveContainer` / `Tickets*`: Central area for viewing, managing, and interacting with support tickets.
    *   `Contacts`: Page for managing user and client contact information.
    *   `Chat`: Interface for real-time chat functionalities.
*   **Authentication & User Management:**
    *   `Login` / `Signup`: Pages for user authentication and registration.
    *   `Users`: Page for administrators to manage user accounts.
*   **Settings & Configuration:**
    *   `SettingsCustom` / `Settings`: Allows users and administrators to configure application settings, user preferences, and system parameters.
    *   `Connections`: Likely for managing integrations, primarily WhatsApp connections (linking QR codes, etc.).
    *   `Queues`: Interface for setting up and managing ticket/chat queues.
    *   `QuickMessages`: For creating and managing predefined responses or canned messages.
    *   `Tags`: Managing tags for organizing tickets, contacts, etc.
*   **Campaigns & Outreach:**
    *   `Campaigns`, `CampaignsConfig`, `CampaignReport`: For creating, configuring, and viewing reports of outreach campaigns.
    *   `ContactLists`, `ContactListItems`: Managing lists of contacts for campaigns.
    *   `Annoucements`: For administrators to create and display system-wide announcements.
*   **Financial & Subscription:**
    *   `Financeiro`: Section for viewing financial information or managing billing (details depend on implementation).
    *   `Subscription`: Page for users to manage their subscription plans.
*   **Other Features:**
    *   `MessagesAPI`: Provides an interface for developers or external systems to interact with the messaging API.
    *   `Helps`: Displays help articles, FAQs, or support documentation.
    *   `Schedules`: For managing scheduled tasks or events.
    *   `ToDoList`: A simple to-do list feature.

**Key Components (`frontend/src/components/`) include:**

The `components` directory contains a wide array of reusable UI elements, broadly categorized as:

*   **Layout & Navigation:**
    *   `MainHeader`: The primary header that typically appears across the top of the application.
    *   `MainContainer`: A general-purpose container for wrapping the main content of pages.
    *   `Sidebar`: (Presumed, as it's a common pattern in such applications) A main navigation sidebar, likely containing links to various pages.
*   **Ticketing & Chat:**
    *   `MessagesList`: Displays a scrollable list of messages within a ticket or chat interface.
    *   `MessageInputCustom`: The customized input field used for composing and sending messages.
    *   `TicketListItem`: (Presumed common component, as lists of tickets are fundamental) Represents a single item in a list of tickets, displaying summary information.
    *   `ContactDrawer`: A panel that slides in to display details of a selected contact.
*   **Modals & Notifications:**
    *   A variety of modals for different purposes, e.g., `ConfirmationModal`, `ContactModal`, `NewTicketModal`, `QrcodeModal` (for WhatsApp linking), `AnnouncementModal`.
    *   `NotificationsPopOver`: Displays notifications to the user.
*   **Forms & Inputs:**
    *   `ContactForm`: For creating or editing contact details.
    *   `FormFields/*`: A collection of standardized form input elements like text fields, select dropdowns, date pickers.
    *   `ButtonWithSpinner`: A button that indicates loading states.
*   **Data Display & Interaction:**
    *   `Table` components (e.g., `EnhancedTableHead`, `TablePagination`): For displaying tabular data.
    *   `SearchInput`: A common search input field.
    *   `ColorPicker`: For selecting colors, used in theming or tagging.
*   **Feature-Specific:**
    *   `CheckoutPage/*`: Components for handling payments and subscriptions.
    *   `PlansManager`: UI for managing different service plans.

This modular structure allows for a maintainable and scalable frontend codebase.

### State Management

The frontend employs a combination of strategies for managing state:

*   **React Context API:** For global and shared state accessible across different parts of the application. This is the primary method for managing client-side global state. Key contexts include:
    *   `AuthContext`: Manages user authentication state, such as user identity and login status.
    *   `TicketsContext`: Handles state related to tickets, potentially including lists of tickets, active ticket data, and filters.
    *   `SocketContext`: Manages the WebSocket connection and related state for real-time communication.
    *   `WhatsAppsContext`: Holds state concerning WhatsApp connections and their configurations.
    *   `EditingMessageContext`: Manages the state when a user is editing a message.
    *   `ReplyingMessageContext`: Manages the state when a user is replying to a specific message.
    *   `ColorModeContext`: Manages UI theme settings like dark/light mode and primary color preferences. (Defined in `frontend/src/layout/themeContext.js` and used in `App.js`).

*   **React Query (`QueryClientProvider`):** Used extensively for managing server state. This includes fetching, caching, synchronizing, and updating data from the backend API. React Query simplifies data fetching logic and provides features like automatic refetching and optimistic updates.

*   **Local Component State (`useState`, `useReducer`):** For state that is local to individual components and doesn't need to be shared globally, React's built-in `useState` and `useReducer` hooks are utilized.

This multi-layered approach allows for efficient state management: React Query handles server state, Context API manages global client state, and local state hooks manage component-specific UI state.

<a name="key-libraries-and-modules-frontend"></a>
### Key Libraries and Modules

The frontend is built upon React and leverages a number of important libraries and modules. The definitive list of dependencies can be found in the `package.json` file in the `frontend` directory. Key libraries include:

*   **`react`**: The core JavaScript library for building the user interface with its component-based architecture and hooks system.
*   **`react-router-dom`**: Used for declarative client-side routing within the single-page application (SPA), enabling navigation between different views/pages without full page reloads.
*   **`@material-ui/core`**: A comprehensive suite of pre-built UI components that helps in creating a consistent and visually appealing user interface, adhering to Material Design principles.
*   **`react-query`**: A powerful library for managing server state. It handles data fetching, caching, synchronization with the backend, and provides features like optimistic updates and automatic refetching.
*   **`axios`**: (Likely) A promise-based HTTP client for making API requests to the backend. It's often wrapped in service modules (e.g., within `frontend/src/services/`) to centralize API communication.
*   **`socket.io-client`**: (Used within `SocketContext`) The client-side library for establishing WebSocket connections with the backend, crucial for real-time features like chat and notifications.
*   **`react-toastify`**: A library for displaying non-intrusive toast notifications to provide feedback to the user (e.g., success messages, error alerts).
*   **`date-fns` or similar date utility**: (Likely) Used for formatting, manipulating, and displaying dates and times throughout the application in a user-friendly way.
*   **Internationalization library (e.g., `i18next`, `react-i18next`)**: (Implied by language settings and locale imports in `App.js`) Used to support multiple languages in the UI, making the application accessible to a broader audience.
*   **`formik` / `yup`**: (Potentially) Popular libraries for simplifying form creation, managing form state, and handling validation with schema-based rules.
*   **`react-favicon`**: A utility to dynamically update the browser's favicon, potentially based on application state or notifications.

These libraries, along with various custom React Hooks (`frontend/src/hooks/`) and Context API providers (`frontend/src/context/`), form the foundation of the frontend application, enabling a rich and interactive user experience.

## Key Features

Ticketz offers a range of integrated features designed to streamline customer communication, support operations, and user engagement. The primary functionalities are built around a comprehensive ticketing system, real-time chat capabilities, direct WhatsApp integration, tools for campaign management, and robust user administration.

### Ticketing System

The core of Ticketz is its robust ticketing system, which allows businesses to manage customer inquiries and support requests efficiently. Key aspects include:

*   **Ticket Creation & Management:** Users can create new tickets, view existing ones, and update their status (e.g., open, pending, closed).
*   **Message History:** Each ticket maintains a complete history of communication between the customer and support agents.
*   **Ticket Assignment & Queues:** Tickets can be assigned to specific agents or routed through predefined queues (e.g., sales, support) to ensure they reach the right team.
*   **Internal Notes:** Agents can add internal notes to tickets for collaboration or to keep track of specific details not visible to the customer.
*   **Tagging:** Tickets can be tagged for categorization, prioritization, or to trigger specific workflows.
*   **Quick Messages (Canned Responses):** Agents can use predefined messages for common inquiries to speed up response times.
*   **Ticket Tracking:** The system likely tracks ticket progress and may offer metrics on response times and resolution rates.

### Chat Functionality

Ticketz includes real-time chat capabilities, enhancing direct communication:

*   **Live Chat:** Enables real-time text-based conversations between users/agents and customers. This is facilitated by WebSockets.
*   **Message History:** Chat conversations are stored, allowing users to review past interactions.
*   **Internal Team Chat:** The presence of `Chat`, `ChatMessage`, and `ChatUser` models, along with associated API routes and frontend components, strongly suggests a dedicated internal chat system. This allows for direct messages between team members or within defined groups, facilitating internal collaboration separately from customer-facing ticket communications.

### WhatsApp Integration

A cornerstone of Ticketz is its direct integration with WhatsApp, enabling businesses to manage customer interactions on this widely used messaging platform from within the Ticketz application:

*   **Account Linking:** Users can connect their WhatsApp Business accounts to Ticketz, typically through a QR code scanning process managed via the `Connections` page and `QrcodeModal`.
*   **Send & Receive Messages:** Once linked, businesses can send and receive WhatsApp messages directly within the Ticketz interface. These messages are part of the ticketing or chat system.
*   **Session Management:** The system manages WhatsApp sessions to maintain connectivity. The `Baileys` models suggest the use of the Baileys WhatsApp library for this integration.

### Campaign Management

Ticketz provides tools for managing outreach and marketing campaigns:

*   **Campaign Creation:** Users can create and configure campaigns, likely defining messages and target audiences.
*   **Contact Lists:** Campaigns can utilize predefined contact lists for targeted messaging. The system allows for managing these lists and the contacts within them.
*   **Campaign Scheduling & Sending:** (Implied by the nature of campaign tools) Functionality to schedule campaigns for future delivery or send them immediately to the target contact lists.
*   **Reporting & Analytics:** The `CampaignReport` page indicates that users can view performance metrics for their campaigns, such as delivery rates, open rates (if trackable), and engagement.

### User Management

The platform includes comprehensive user management features to control access and manage user roles within the system:

*   **Authentication:** Secure user login and signup processes (`/auth` routes, `Login` / `Signup` pages).
*   **User Accounts:** Administrators can create and manage user accounts, including profiles and potentially passwords.
*   **Company Association:** Users can be associated with specific companies, which is useful for multi-tenant deployments or organizing users by client/department.
*   **Queue Assignment:** Users (agents) can be assigned to specific queues, determining which tickets or chats they handle.
*   **User Ratings:** The `UserRating` model suggests a system for evaluating agent performance or customer satisfaction with specific users.
*   **Roles & Permissions:** (Implied, though not explicitly detailed by model names, this is a standard feature in multi-user applications) The system likely supports different user roles (e.g., administrator, agent, supervisor) with varying levels of access and permissions to control what actions users can perform and what data they can see.

## Contributing

Whenever possible, the project intends to backport some adjustments made here to the original projects. If you make changes to the code, you must change the link to a repository or another way to obtain the code for your changes.

If this project has helped you with a complex task, consider making a donation to the author via PayPal or Brazilian PIX. Details can be found in the original README.md.

## License

This project is relicensed under the AGPL. This requires that every user who has access to the system can obtain the source code. Therefore, if you directly utilize this version, it is **very important to keep the link on the "About Ticketz" screen, which provides access to the repository**. If you wish, you can move the link to the source code elsewhere, but it must be easily accessible to any system user.

If you make changes to the code, you must change the link to a repository or another way to obtain the code for your changes.

If you wish to use parts of the code for your own use, feel free to do so and you don't need to worry about the AGPL license. However, if you want to use any part added in this project in a system that you commercialize, you must either provide the code of your entire system to its users, or you must contact the author of the code to license it under different criteria.

This project is not affiliated with Meta, WhatsApp, or any other company. The use of the provided code is the sole responsibility of the users and does not imply any liability for the author or project collaborators.

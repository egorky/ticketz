const messages = {
  en: {
    translations: {
      common: {
        search: "Search",
        edit: "Edit",
        delete: "Delete",
        cancel: "Cancel",
        save: "Save",
        confirm: "Confirm",
        close: "Close",
        error: "Error",
        success: "Success",
        actions: "Actions",
        add: "Add",
        name: "Name",
        email: "Email",
        phone: "Phone",
        company: "Company",
        user: "User",
        connection: "Connection",
        queue: "Queue",
        contact: "Contact",
        whatsappNumber: "WhatsApp Number",
        dueDate: "Due Date",
        copy: "Copy",
        paste: "Paste",
        proceed: "Proceed",
        enabled: "Enabled",
        disabled: "Disabled",
        noqueue: "No queue",
        rating: "Rating",
        transferTo: "Transfer to",
      },
      signup: {
        title: "Sign Up",
        toasts: {
          success: "User created successfully! Log in now!", // Corrected: "Log in now!!!" to "Log in now!"
          fail: "Error creating user. Check the provided data.",
        },
        form: {
          name: "Name",
          email: "Email",
          password: "Password",
        },
        buttons: {
          submit: "Sign Up",
          login: "Already have an account? Log in!",
        },
      },
      login: {
        title: "Login",
        form: {
          email: "Email",
          password: "Password",
        },
        buttons: {
          submit: "Log In",
          register: "Don't have an account? Sign up!",
        },
      },
      companies: {
        title: "Register Company",
        form: {
          name: "Company Name",
          plan: "Plan",
          token: "Token",
          submit: "Register",
          success: "Company created successfully!",
        },
      },
      auth: {
        toasts: {
          success: "Login successful!",
        },
        token: "Token",
      },
      dashboard: {
        usersOnline: "Users online",
        ticketsWaiting: "Tickets waiting",
        ticketsOpen: "Open tickets",
        ticketsDone: "Resolved tickets",
        totalTickets: "Total tickets",
        newContacts: "New contacts",
        avgServiceTime: "Average service time",
        avgWaitTime: "Average wait time",
        ticketsOnPeriod: "Tickets in the period",
        userCurrentStatus: "Current status",
        filter: {
          period: "Period",
          custom: "Custom",
          last3days: "Last 3 days",
          last7days: "Last 7 days",
          last14days: "Last 14 days",
          last30days: "Last 30 days",
          last90days: "Last 90 days"
        },
        date: {
          start: "Start date",
          end: "End date",
        },
        ticketCountersLabels: {
          created: "Created",
          closed: "Closed",
        },
      },
      connections: {
        title: "Connections",
        toasts: {
          deleted: "WhatsApp connection successfully deleted!",
        },
        confirmationModal: {
          deleteTitle: "Delete",
          deleteMessage: "Are you sure? This action cannot be undone.",
          disconnectTitle: "Disconnect",
          disconnectMessage: "Are you sure? You will need to scan the QR Code again.",
        },
        buttons: {
          add: "Add WhatsApp",
          disconnect: "Disconnect",
          tryAgain: "Try Again",
          qrcode: "QR CODE",
          newQr: "New QR CODE",
          connecting: "Connecting",
        },
        toolTips: {
          disconnected: {
            title: "Failed to initiate WhatsApp session",
            content: "Make sure your phone is connected to the internet and try again, or request a new QR Code.",
          },
          qrcode: {
            title: "Waiting for QR Code scan",
            content: "Click the 'QR CODE' button and scan the QR Code with your phone to start the session.",
          },
          connected: {
            title: "Connection established!",
          },
          timeout: {
            title: "Connection to the phone has been lost",
            content: "Make sure your phone is connected to the internet and WhatsApp is open, or click 'Disconnect' to get a new QR Code.",
          },
          refresh: "Refresh",
          disconnect: "Disconnect",
          scan: "Scan QR Code",
          newQr: "Request new QR Code",
          retry: "Try Again",
        },
        table: {
          name: "Name",
          status: "Status",
          lastUpdate: "Last Update",
          default: "Default",
          actions: "Actions",
          session: "Session",
        },
      },
      internalChat: {
        title: "Internal Chat",
      },
      whatsappModal: {
        title: {
          add: "Add WhatsApp",
          edit: "Edit WhatsApp",
        },
        form: {
          name: "Name",
          default: "Default",
        },
        buttons: {
          okAdd: "Add",
          okEdit: "Save",
          cancel: "Cancel",
        },
        success: "WhatsApp saved successfully.",
      },
      qrCode: {
        message: "Scan the QR Code to start the session",
      },
      contacts: {
        title: "Contacts",
        toasts: {
          deleted: "Contact successfully deleted!",
        },
        searchPlaceholder: "Search...",
        confirmationModal: {
          deleteTitle: "Delete ",
          importTitlte: "Import Contacts",
          deleteMessage: "Are you sure you want to delete this contact? All related interactions will be lost.",
          importMessage: "Do you want to import all contacts from the phone?",
        },
        buttons: {
          import: "Import Contacts",
          add: "Add Contact",
        },
        table: {
          name: "Name",
          whatsapp: "WhatsApp",
          email: "Email",
          actions: "Actions",
        },
      },
      contactModal: {
        title: {
          add: "Add Contact",
          edit: "Edit Contact",
        },
        form: {
          mainInfo: "Contact Information",
          extraInfo: "Additional Information",
          name: "Name",
          number: "WhatsApp Number",
          email: "Email",
          extraName: "Field Name",
          extraValue: "Value",
          disableBot: "Disable chatbot",
        },
        buttons: {
          addExtraInfo: "Add Information",
          okAdd: "Add",
          okEdit: "Save",
          cancel: "Cancel",
        },
        success: "Contact saved successfully.",
      },
      queueModal: {
        title: {
          add: "Add Queue",
          edit: "Edit Queue",
        },
        form: {
          name: "Name",
          color: "Color",
          greetingMessage: "Greeting Message",
          complationMessage: "Completion Message",
          outOfHoursMessage: "Out of Hours Message",
          ratingMessage: "Rating Message",
          transferMessage: "Transfer Message",
          token: "Token",
        },
        buttons: {
          okAdd: "Add",
          okEdit: "Save",
          cancel: "Cancel",
          attach: "Attach File",
        },
        serviceHours: {
          dayWeek: "Day of the week",
          startTimeA: "Start Time - Shift A",
          endTimeA: "End Time - Shift A",
          startTimeB: "Start Time - Shift B",
          endTimeB: "End Time - Shift B",
          monday: "Monday",
          tuesday: "Tuesday",
          wednesday: "Wednesday",
          thursday: "Thursday",
          friday: "Friday",
          saturday: "Saturday",
          sunday: "Sunday",
        },
      },
      userModal: {
        title: {
          add: "Add User",
          edit: "Edit User",
        },
        form: {
          name: "Name",
          email: "Email",
          password: "Password",
          profile: "Profile",
        },
        buttons: {
          okAdd: "Add",
          okEdit: "Save",
          cancel: "Cancel",
        },
        success: "User saved successfully.",
      },
      scheduleModal: {
        title: {
          add: "New Schedule",
          edit: "Edit Schedule",
        },
        form: {
          body: "Message",
          contact: "Contact",
          sendAt: "Scheduled Date",
          sentAt: "Sent Date",
          saveMessage: "Save Message in Ticket",
        },
        buttons: {
          okAdd: "Add",
          okEdit: "Save",
          cancel: "Cancel",
        },
        success: "Schedule saved successfully.",
      },
      tagModal: {
        title: {
          add: "New Tag",
          edit: "Edit Tag",
          addKanban: "New Lane",
          editKanban: "Edit Lane",
        },
        form: {
          name: "Name",
          color: "Color",
          kanban: "Kanban",
        },
        buttons: {
          okAdd: "Add",
          okEdit: "Save",
          cancel: "Cancel",
        },
        success: "Tag saved successfully.",
        successKanban: "Lane saved successfully.",
      },
      chat: {
        noTicketMessage: "Select a ticket to start the conversation.",
      },
      uploads: {
        titles: {
          titleUploadMsgDragDrop: "DRAG AND DROP FILES IN THE FIELD BELOW",
          titleFileList: "List of file(s)"
        },
      },
      ticketsManager: {
        buttons: {
          newTicket: "New",
        },
      },
      ticketsQueueSelect: {
        placeholder: "Queues",
      },
      tickets: {
        toasts: {
          deleted: "The ticket you were working on has been deleted.",
        },
        notification: {
          message: "Message from",
        },
        tabs: {
          open: { title: "Open" },
          closed: { title: "Closed" },
          groups: { title: "Groups" },
          search: { title: "Search" },
        },
        search: {
          placeholder: "Search for ticket and messages",
        },
        buttons: {
          showAll: "All",
        },
      },
      transferTicketModal: {
        title: "Transfer Ticket",
        fieldLabel: "Type to search for users",
        fieldQueueLabel: "Transfer to queue",
        fieldQueuePlaceholder: "Select a queue",
        noOptions: "No user found with that name",
        buttons: {
          ok: "Transfer",
          cancel: "Cancel",
        },
      },
      ticketsList: {
        pendingHeader: "Pending",
        assignedHeader: "Assigned",
        noTicketsTitle: "Nothing here!",
        noTicketsMessage: "No ticket found with this status or searched term",
        buttons: {
          accept: "Accept",
        },
      },
      newTicketModal: {
        title: "Create Ticket",
        fieldLabel: "Type to search for contact",
        add: "Add",
        buttons: {
          ok: "Save",
          cancel: "Cancel",
        },
      },
      mainDrawer: {
        listItems: {
          dashboard: "Dashboard",
          connections: "Connections",
          tickets: "Tickets",
          quickMessages: "Quick Responses",
          contacts: "Contacts",
          queues: "Queues & Chatbot",
          tags: "Tags",
          administration: "Administration",
          service: "Service",
          users: "Users",
          settings: "Settings",
          helps: "Help",
          messagesAPI: "API",
          schedules: "Schedules",
          campaigns: "Campaigns",
          annoucements: "Announcements",
          chats: "Internal Chat",
          financeiro: "Financial",
          logout: "Logout",
          management: "Management",
          kanban: "Kanban"
        },
        appBar: {
          i18n: {
            language: "English",
            language_short: "EN"
          },
          user: {
            profile: "Profile",
            darkmode: "Dark mode",
            lightmode: "Light mode",
            language: "Select language",
            about: "About", // Added from pt.js
            logout: "Logout",
          },
        },
      },
      messagesAPI: {
        title: "API",
        textMessage: {
          number: "Number",
          body: "Message",
          token: "Registered Token",
        },
        mediaMessage: {
          number: "Number",
          body: "File Name",
          media: "File",
          token: "Registered Token",
        },
      },
      notifications: {
        noTickets: "No notifications.",
      },
      quickMessages: {
        title: "Quick Responses",
        buttons: {
          add: "New Response",
        },
        dialog: {
          shortcode: "Shortcut",
          message: "Response",
        },
      },
      kanban: {
        title: "Kanban",
        searchPlaceholder: "Search",
        subMenus: {
          list: "Panel",
          tags: "Lanes"
        }
      },
      tagsKanban: {
        title: "Lanes",
        laneDefault: "Open",
        confirmationModal: {
          deleteTitle: "Are you sure you want to delete this Lane?",
          deleteMessage: "This action cannot be undone.",
        },
        table: {
          name: "Name",
          color: "Color",
          tickets: "Tickets",
          actions: "Actions",
        },
        buttons: {
          add: "New Lane",
        },
        toasts: {
          deleted: "Lane deleted successfully.",
        },
      },
      contactLists: {
        title: "Contact Lists",
        table: {
          name: "Name",
          contacts: "Contacts",
          actions: "Actions",
        },
        buttons: {
          add: "New List",
        },
        dialog: {
          name: "Name",
          company: "Company",
          okEdit: "Edit",
          okAdd: "Add",
          add: "Add",
          edit: "Edit",
          cancel: "Cancel",
        },
        confirmationModal: {
          deleteTitle: "Delete",
          deleteMessage: "This action cannot be undone.",
        },
        toasts: {
          deleted: "Record deleted",
          created: "Record created",
        },
      },
      contactListItems: {
        title: "Contacts",
        searchPlaceholder: "Search",
        buttons: {
          add: "New",
          lists: "Lists",
          import: "Import",
        },
        dialog: {
          name: "Name",
          number: "Number",
          whatsapp: "WhatsApp",
          email: "Email",
          okEdit: "Edit",
          okAdd: "Add",
          add: "Add",
          edit: "Edit",
          cancel: "Cancel",
        },
        table: {
          name: "Name",
          number: "Number",
          whatsapp: "WhatsApp",
          email: "Email",
          actions: "Actions",
        },
        confirmationModal: {
          deleteTitle: "Delete",
          deleteMessage: "This action cannot be undone.",
          importMessage: "Do you want to import the contacts from this spreadsheet? ",
          importTitlte: "Import",
        },
        toasts: {
          deleted: "Record deleted",
        },
      },
      campaigns: {
        title: "Campaigns",
        searchPlaceholder: "Search",
        buttons: {
          add: "New Campaign",
          contactLists: "Contact Lists",
        },
        table: {
          name: "Name",
          whatsapp: "Connection",
          contactList: "Contact List",
          status: "Status",
          scheduledAt: "Scheduled",
          completedAt: "Completed",
          confirmation: "Confirmation",
          actions: "Actions",
        },
        dialog: {
          new: "New Campaign",
          update: "Edit Campaign",
          readonly: "Read-only",
          form: {
            name: "Name",
            message1: "Message 1",
            message2: "Message 2",
            message3: "Message 3",
            message4: "Message 4",
            message5: "Message 5",
            confirmationMessage1: "Confirmation Message 1",
            confirmationMessage2: "Confirmation Message 2",
            confirmationMessage3: "Confirmation Message 3",
            confirmationMessage4: "Confirmation Message 4",
            confirmationMessage5: "Confirmation Message 5",
            messagePlaceholder: "Message content",
            whatsapp: "Connection",
            status: "Status",
            scheduledAt: "Scheduled",
            confirmation: "Confirmation",
            contactList: "Contact List",
          },
          buttons: {
            add: "Add",
            edit: "Update",
            okadd: "Ok",
            cancel: "Cancel Dispatches",
            restart: "Restart Dispatches",
            close: "Close",
            attach: "Attach File",
          },
        },
        confirmationModal: {
          deleteTitle: "Delete",
          deleteMessage: "This action cannot be undone.",
        },
        toasts: {
          success: "Operation completed successfully",
          cancel: "Campaign canceled",
          restart: "Campaign restarted",
          deleted: "Record deleted",
        },
      },
      announcements: {
        title: "Announcements",
        searchPlaceholder: "Search",
        buttons: {
          add: "New Announcement",
          contactLists: "Announcement Lists", // Assuming this should be "Announcement Lists", pt.js has "Listas de Informativos"
        },
        table: {
          priority: "Priority",
          title: "Title",
          text: "Text",
          mediaName: "File",
          status: "Status",
          actions: "Actions",
        },
        dialog: {
          edit: "Announcement Edit",
          add: "New Announcement",
          update: "Edit Announcement",
          readonly: "Read-only",
          form: {
            priority: "Priority",
            title: "Title",
            text: "Text",
            mediaPath: "File",
            status: "Status",
          },
          buttons: {
            add: "Add",
            edit: "Update",
            okadd: "Ok",
            cancel: "Cancel",
            close: "Close",
            attach: "Attach File",
          },
        },
        confirmationModal: {
          deleteTitle: "Delete",
          deleteMessage: "This action cannot be undone.",
        },
        toasts: {
          success: "Operation completed successfully",
          deleted: "Record deleted",
        },
      },
      campaignsConfig: {
        title: "Campaign Configurations",
      },
      queues: { // Section from pt.js, was buttons in en.js
        title: "Queues & Chatbot",
        table: {
          name: "Name",
          color: "Color",
          greeting: "Greeting Message",
          actions: "Actions",
        },
        buttons: { // This sub-object was directly under queues in en.js before
          add: "Add Queue",
        },
        confirmationModal: { // This sub-object was directly under queues in en.js before
          deleteTitle: "Delete",
          deleteMessage:
            "Are you sure? This action cannot be undone! The tickets from this queue will still exist but will no longer be assigned to any queue.",
        },
      },
      // Removed the separate buttons and confirmationModal that were directly under queues in the old en.js
      queueSelect: {
        inputLabel: "Queues",
      },
      users: {
        title: "Users",
        table: {
          name: "Name",
          email: "Email",
          profile: "Profile",
          actions: "Actions",
        },
        buttons: {
          add: "Add User",
        },
        toasts: {
          deleted: "User deleted successfully.",
        },
        confirmationModal: {
          deleteTitle: "Delete",
          deleteMessage:
            "All user data will be lost. Open tickets from this user will be moved to the queue.",
        },
      },
      helps: {
        title: "Help Center",
      },
      about: { // Matched with pt.js structure and translated where needed.
        aboutthe: "About", // Changed from "About the" to match pt.js "Sobre o" -> "About"
        copyright: "© 2024 - Powered by ticketz", // Kept English version
        buttonclose: "Close",
        title: "About ticketz",
        abouttitle: "Origin and improvements",
        aboutdetail: "Ticketz is indirectly derived from the Whaticket project with improvements shared by the developers of the EquipeChat system through the VemFazer channel on YouTube, later improved by Claudemir Todo Bom.", // Ensured translation
        aboutauthorsite: "Author's site",
        aboutwhaticketsite: "Whaticket Community site on Github",
        aboutvemfazersite: "Vem Fazer channel site on Github",
        licenseheading: "Open Source License",
        licensedetail: "Ticketz is licensed under the GNU Affero General Public License version 3, which means that any user who has access to this application has the right to obtain access to the source code. More information at the links below:", // Ensured translation
        licensefulltext: "Full text of the license",
        licensesourcecode: "Ticketz source code"
      },
      schedules: {
        title: "Schedules",
        confirmationModal: {
          deleteTitle: "Are you sure you want to delete this Schedule?",
          deleteMessage: "This action cannot be undone.",
        },
        table: {
          contact: "Contact",
          body: "Message",
          sendAt: "Scheduling Date",
          sentAt: "Sending Date", // Corrected from "Sending Date" to "Sent Date" as in en.js
          status: "Status",
          actions: "Actions",
        },
        buttons: {
          add: "New Schedule",
        },
        toasts: {
          deleted: "Schedule deleted successfully.",
        },
      },
      tags: {
        title: "Tags",
        confirmationModal: {
          deleteTitle: "Are you sure you want to delete this Tag?",
          deleteMessage: "This action cannot be undone.",
        },
        table: {
          name: "Name",
          color: "Color",
          tickets: "Records", // pt.js has "Registros", en.js had "Records"
          actions: "Actions",
          id: "Id",
          kanban: "Kanban",
        },
        buttons: {
          add: "New Tag",
        },
        toasts: {
          deleted: "Tag deleted successfully.",
        },
      },
      whitelabel: {
        primaryColorLight: "Primary color light",
        primaryColorDark: "Primary color dark",
        lightLogo: "App logo light",
        darkLogo: "App logo dark",
        favicon: "App logo favicon",
        appname: "App name",
        logoHint: "Prefer SVG and aspect of 28:10",
        faviconHint: "Prefer square SVG image or 512x512 PNG",
      },
      settings: {
        group: {
          general: "General",
          timeouts: "Timeouts",
          officeHours: "Office Hours",
          groups: "Groups",
          confidenciality: "Confidentiality",
          api: "API",
          externalServices: "External Services",
          serveradmin: "Server Administration",
        },
        success: "Setting saved successfully.",
        copiedToClipboard: "Copied to clipboard",
        title: "Settings",
        chatbotTicketTimeout: "Chatbot ticket timeout (minutes)",
        chatbotTicketTimeoutAction: "Action after chatbot timeout",
        settings: { // This nested 'settings' seems redundant with the parent 'settings'. pt.js also has it.
          userCreation: {
            name: "User creation",
            options: {
              enabled: "Enabled",
              disabled: "Disabled",
            },
          },
        },
        validations: { // pt.js: "Avaliações" -> "Ratings" or "Reviews", not "validations"
          title: "Ratings", // Corrected from "validations"
          options: {
            enabled: "Enabled", // pt.js: Habilitado
            disabled: "Disabled", // pt.js: Desabilitado
          },
        },
        OfficeManagement: {
          title: "Office Management", // pt.js: "Gerenciamento de Expediente"
          options: {
            disabled: "Disabled", // pt.js: "Desabilitado"
            ManagementByDepartment: "Management By Queue", // pt.js: "Gerenciamento Por Fila"
            ManagementByCompany: "Management By Company", // pt.js: "Gerenciamento Por Empresa"
          },
        },
        outOfHoursAction: {
          title: "Out of Hours Action",
          options: {
            pending: "Leave as pending",
            closed: "Close ticket",
          },
        },
        IgnoreGroupMessages: {
          title: "Ignore Group Messages",
          options: {
            enabled: "Enabled", // pt.js: "Ativado"
            disabled: "Disabled", // pt.js: "Desativado"
          },
        },
        soundGroupNotifications: {
          title: "Sound on Group Notifications",
          options: {
            enabled: "Enabled", // pt.js: "Ativado"
            disabled: "Disabled", // pt.js: "Desativado"
          },
        },
        groupsTab: {
          title: "Groups Tab",
          options: {
            enabled: "Enabled", // pt.js: "Ativado"
            disabled: "Disabled", // pt.js: "Desativado"
          },
        },
        VoiceAndVideoCalls: {
          title: "Voice and video calls",
          options: {
            enabled: "Ignore", // pt.js: "Ignorar"
            disabled: "Report unavailability", // pt.js: "informar indisponibilidade"
          },
        },
        AutomaticChatbotOutput: {
          title: "Automatic Chatbot Output", // pt.js: "Saída automática de chatbot"
          options: {
            enabled: "Enabled", // pt.js: "Activado"
            disabled: "Disabled", // pt.js: "Desativado"
          },
        },
        QuickMessages: {
          title: "Quick Messages", // pt.js: "Mensagens Rápidas"
          options: {
            enabled: "By company", // pt.js: "Por empresa"
            disabled: "By User", // pt.js: "Por Usuário"
          },
        },
        AllowRegistration: {
          title: "Allow Registration", // pt.js: "Permitir cadastro"
          options: {
            enabled: "Enabled", // pt.js: "Ativado"
            disabled: "Disabled", // pt.js: "Desativado"
          },
        },
        FileUploadLimit: {
          title: "File Upload Limit (MB)",
        },
        FileDownloadLimit: {
          title: "File Download Limit (MB)",
        },
        "messageVisibility": {
          "title": "Message Visibility", // pt.js: "Visibilidade da mensagem"
          "options": {
            "respectMessageQueue": "Respect message queue", // pt.js: "Respeitar fila da mensagem"
            "respectTicketQueue": "Respect ticket queue" // pt.js: "Respeitar fila do ticket"
          }
        },
        "keepQueueAndUser": {
          "title": "Keep queue and user on closed ticket", // pt.js: "Manter fila e usuário no ticket fechado"
          "options": {
            "enabled": "Enabled", // pt.js: "Ativado"
            "disabled": "Disabled" // pt.js: "Desativado"
          }
        },
        WelcomeGreeting: {
          greetings: "Hello", // pt.js: Olá
          welcome: "Welcome to", // pt.js: Seja bem-vindo a
          expirationTime: "Active until", // pt.js: Ativo até
        },
        Options: {
          title: "Options",
        },
        Companies: {
          title: "Companies",
        },
        schedules: { // pt.js: "Horários"
          title: "Office Hours", // Corrected to be more specific than "schedules"
        },
        Plans: {
          title: "Plans",
        },
        Help: {
          title: "Help",
        },
        Whitelabel: {
          title: "Whitelabel",
        },
        PaymentGateways: {
          title: "Payment Gateways", // Corrected from "Pasarelas de pago"
        },
        AIProvider: { // Added from pt.js
          title: "AI Provider", // pt.js: "Serviço de IA"
        },
        AudioTranscriptions: { // Added from pt.js
          title: "Audio Transcriptions", // pt.js: "Transcrição de áudio"
        },
        TagsMode: { // Ensured this is present
          title: "Tags Mode",
          options: {
            ticket: "Ticket",
            contact: "Contact",
            both: "Ticket and Contact"
          },
        },
      },
      messagesList: {
        header: {
          assignedTo: "Assigned to:",
          buttons: {
            return: "Return",
            resolve: "Resolve",
            reopen: "Reopen",
            accept: "Accept",
          },
        },
      },
      messagesInput: {
        placeholderOpen: "Type a message",
        placeholderClosed:
          "Reopen or accept this ticket to send a message.",
        signMessage: "Sign",
        replying: "Replying",
        editing: "Editing",
      },
      message: {
        edited: "Edited",
        forwarded: "Forwarded",
      },

      contactDrawer: {
        header: "Contact Information",
        buttons: {
          edit: "Edit Contact",
        },
        extraInfo: "Other information",
      },
      ticketOptionsMenu: {
        schedule: "Schedule",
        delete: "Delete",
        transfer: "Transfer",
        registerAppointment: "Contact Notes",
        appointmentsModal: {
          title: "Contact Notes",
          textarea: "Note",
          placeholder: "Insert the information you want to record here",
        },
        confirmationModal: {
          title: "Delete contact ticket",
          message:
            "Attention! All messages related to the ticket will be lost.",
        },
        buttons: {
          delete: "Delete",
          cancel: "Cancel",
        },
      },
      confirmationModal: { // Generic confirmation modal buttons
        buttons: {
          confirm: "Ok",
          cancel: "Cancel",
        },
      },
      messageOptionsMenu: {
        delete: "Delete",
        edit: "Edit",
        forward: "Forward",
        history: "History",
        reply: "Reply",
        confirmationModal: {
          title: "Delete message?",
          message: "This action cannot be undone.",
        },
      },
      messageHistoryModal: {
        close: "Close",
        title: "Message edit history"
      },
      presence: {
        unavailable: "Unavailable",
        available: "Available",
        composing: "Composing...",
        recording: "Recording...",
        paused: "Paused",
      },
      privacyModal: {
        title: "Edit Whatsapp Privacy",
        buttons: {
          cancel: "Cancel",
          okEdit: "Save",
        },
        form: {
          menu: {
            all: "All",
            none: "Nobody",
            contacts: "My contacts",
            contact_blacklist: "Selected contacts",
            match_last_seen: "Match Last Seen",
            known: "Known",
            disable: "Disabled", // pt.js: "Desativada" -> "Disabled"
            hrs24: "24 Hours",
            dias7: "7 Days",
            dias90: "90 Days",
          },
          readreceipts: "To update the Read Receipts privacy",
          profile: "To update the Profile Picture privacy",
          status: "To update the Status privacy", // pt.js: "recados" -> "Status" (common term for WhatsApp status)
          online: "To update the Online privacy",
          last: "To update the Last Seen privacy", // pt.js: "Último Visto"
          groupadd: "To update the Groups Add privacy",
          calladd: "To update the Call Add privacy",
          disappearing: "To update the Default Disappearing Mode",
        },
      },
      backendErrors: {
        ERR_UNAUTHORIZED: "You are not authorized to perform this action.",
        ERR_FORBIDDEN: "You do not have permission to access this resource.",
        ERR_CHECK_NUMBER: "Check the number and try again.",
        ERR_NO_OTHER_WHATSAPP: "There must be at least one default WhatsApp.",
        ERR_NO_DEF_WAPP_FOUND: "No default WhatsApp found. Check the connections page.",
        ERR_WAPP_NOT_INITIALIZED: "This WhatsApp session has not been initialized. Check the connections page.",
        ERR_WAPP_CHECK_CONTACT: "Could not check WhatsApp contact. Check the connections page.",
        ERR_WAPP_INVALID_CONTACT: "This is not a valid WhatsApp number.",
        ERR_WAPP_DOWNLOAD_MEDIA: "Could not download media from WhatsApp. Check the connections page.",
        ERR_INVALID_CREDENTIALS: "Authentication error. Please try again.",
        ERR_SENDING_WAPP_MSG: "Error sending WhatsApp message. Check the connections page.",
        ERR_DELETE_WAPP_MSG: "Could not delete WhatsApp message.",
        ERR_EDITING_WAPP_MSG: "Could not edit WhatsApp message.",
        ERR_OTHER_OPEN_TICKET: "There is already an open ticket for this contact.",
        ERR_SESSION_EXPIRED: "Session expired. Please log in.",
        ERR_USER_CREATION_DISABLED: "User creation has been disabled by the administrator.",
        ERR_NO_PERMISSION: "You do not have permission to access this resource.", // Same as ERR_FORBIDDEN, but kept as is if backend sends distinct codes
        ERR_DUPLICATED_CONTACT: "A contact with this number already exists.",
        ERR_NO_SETTING_FOUND: "No setting found with this ID.",
        ERR_NO_CONTACT_FOUND: "No contact found with this ID.",
        ERR_NO_TICKET_FOUND: "No ticket found with this ID.",
        ERR_NO_USER_FOUND: "No user found with this ID.",
        ERR_NO_WAPP_FOUND: "No WhatsApp found with this ID.", // This covers pt.js's ERR_NO_WAPP_FOUND
        ERR_WAPP_NOT_FOUND: "Connection unavailable.", // Added from pt.js (Conexão indisponível)
        ERR_CREATING_MESSAGE: "Error creating message in the database.",
        ERR_CREATING_TICKET: "Error creating ticket in the database.",
        ERR_FETCH_WAPP_MSG: "Error fetching message from WhatsApp, perhaps it is too old.",
        ERR_QUEUE_COLOR_ALREADY_EXISTS: "This color is already in use, choose another.",
        ERR_WAPP_GREETING_REQUIRED: "Greeting message is mandatory when there is more than one queue.",
        ERR_SUBSCRIPTION_CHECK_FAILED: "Invalid or missing subscription.", // Translated from "Assinatura inválida ou não encontrada"
        ERR_SUBSCRIPTION_EXPIRED: "Subscription expired.", // Translated from "Assinatura expirada"
        ERR_UNKOWN: "Unknown error.", // Translated from "Erro desconhecido"
      },
      ticketz: { // Added from pt.js and translated
        registration: {
          header: "Register in the Ticketz user base",
          description: "Fill in the fields below to register in the Ticketz user base and receive news about the project.",
          name: "Name",
          country: "Country",
          phoneNumber: "Whatsapp Number",
          submit: "Register",
        },
        support: {
          title: "Support Ticketz Open Source project", // pt.js: "Apoie o projeto Ticketz Open Source"
          mercadopagotitle: "Credit Card",
          recurringbrl: "Recurring donations in BRL", // Kept BRL as it's specific
          paypaltitle: "Credit Card", // Same as mercadopago, but fine
          international: "International in USD", // pt.js: "Internacional em US$"
        }
      },
    },
  },
};

export { messages };

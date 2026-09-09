
const companies = [

    {
        company_id: "COM001",

        name: "Nova Web Labs",
        website: "https://www.novaweblabs.example",

        industry: "Software Development",
        focus: "Web Development",

        company_phone: "+44 20 1234 5678",
        company_email: "hello@novaweblabs.example",
        career_email: "careers@novaweblabs.example",

        postcode: "EC1A 1AA",

        linkedin:
            "https://linkedin.com/company/nova-web-labs",

        linkedin_employee_size: "11-50",
        linkedin_followers: 3200,

        website_design_quality: "High",

        london_presence: true,
        uk_presence: true,
        international_presence: false,

        number_of_london_offices: 1,
        number_of_uk_offices: 2,
        number_of_international_offices: 0,

        hq_city: "London",
        hq_country: "United Kingdom",

        research_status: "researched",

        created_at: "2026-09-01T12:00:00"
    },


    {
        company_id: "COM002",

        name: "PixelBridge Digital",
        website: "https://www.pixelbridge.example",

        industry: "Digital Agency",
        focus: "Web Development",

        company_phone: "+44 161 555 0199",
        company_email: "hello@pixelbridge.example",
        career_email: null,

        postcode: "M1 1AE",

        linkedin:
            "https://linkedin.com/company/pixelbridge-digital",

        linkedin_employee_size: "1-10",
        linkedin_followers: 850,

        website_design_quality: "Medium",

        london_presence: false,
        uk_presence: true,
        international_presence: true,

        number_of_london_offices: 0,
        number_of_uk_offices: 1,
        number_of_international_offices: 1,

        hq_city: "Manchester",
        hq_country: "United Kingdom",

        research_status: "researched",

        created_at: "2026-09-02T15:30:00"
    }

];



// =====================================================
// CONTACTS
// =====================================================

const contacts = [

    {
        contact_id: "CON001",
        company_id: "COM001",

        name: "Sarah Collins",
        role: "Recruitment Manager",

        email: "sarah@novaweblabs.example",
        phone: "+44 7700 100001",

        whatsapp: false,

        linkedin:
            "https://linkedin.com/in/sarah-collins-example"
    },


    {
        contact_id: "CON002",
        company_id: "COM001",

        name: "Daniel Reed",
        role: "CEO",

        email: "daniel@novaweblabs.example",
        phone: "+44 7700 100002",

        whatsapp: true,

        linkedin:
            "https://linkedin.com/in/daniel-reed-example"
    },


    {
        contact_id: "CON003",
        company_id: "COM002",

        name: "Amelia Grant",
        role: "Founder",

        email: "amelia@pixelbridge.example",
        phone: "+44 7700 200001",

        whatsapp: true,

        linkedin:
            "https://linkedin.com/in/amelia-grant-example"
    }

];



// =====================================================
// APPLICATIONS
// =====================================================

const applications = [

    {
        application_id: "APP001",
        company_id: "COM001",

        role: "Junior Web Developer",

        role_url:
            "https://uk.indeed.com/viewjob?jk=fake001",

        source: "Indeed",

        employment_type: "Full Time",

        level: "Entry",

        application_date: "2026-09-03",

        cv_url:
            "documents/basaam-cv-v3.pdf",

        cover_letter_url:
            "documents/nova-web-labs-cover-letter.pdf"
    },


    {
        application_id: "APP002",
        company_id: "COM002",

        role: "Web Development Intern",

        role_url:
            "https://www.pixelbridge.example/careers/junior-developer",

        source: "Company Website",

        employment_type: "Internship",

        level: "Entry",

        application_date: "2026-09-01",

        cv_url:
            "documents/basaam-cv-v3.pdf",

        cover_letter_url:
            "documents/pixelbridge-cover-letter.pdf"
    }

];



// =====================================================
// ACTIVITIES
// =====================================================

const activities = [

    {

        activity_id: "ACT001",

        company_id: "COM001",
        application_id: "APP001",

        direction: "outbound",

        channel: "Indeed",

        type: "application_sent",

        occurred_at:
            "2026-09-03T10:15:00",

        contact_id: null,

        content:
            "Application submitted through Indeed."
    },


    {

        activity_id: "ACT002",

        company_id: "COM001",
        application_id: "APP001",

        direction: "inbound",

        channel: "Email",

        type: "application_acknowledged",

        occurred_at:
            "2026-09-03T14:40:00",

        contact_id: "CON001",

        content:
            "Hi Basaam, thank you for your application. We have received it and our team will review it.",

        expected_response_date:
            "2026-09-10"
    },


    {

        activity_id: "ACT003",

        company_id: "COM001",
        application_id: "APP001",

        direction: "outbound",

        channel: "LinkedIn",

        type: "linkedin_connection",

        occurred_at:
            "2026-09-05T12:20:00",

        contact_id: "CON001",

        content:
            "Sent LinkedIn connection request to recruitment manager."
    },


    {

        activity_id: "ACT004",

        company_id: "COM002",
        application_id: "APP002",

        direction: "outbound",

        channel: "Career Form",

        type: "application_sent",

        occurred_at:
            "2026-09-01T11:30:00",

        contact_id: null,

        content:
            "Application submitted through company careers form."
    },


    {

        activity_id: "ACT005",

        company_id: "COM002",
        application_id: "APP002",

        direction: "outbound",

        channel: "Email",

        type: "follow_up",

        occurred_at:
            "2026-09-07T09:30:00",

        contact_id: "CON003",

        content:
            "Follow-up email sent regarding the application."
    }

];



// =====================================================
// ACTIONS
// =====================================================

const actions = [

    {

        action_id: "ACTION001",

        company_id: "COM001",
        application_id: "APP001",

        type: "check_for_decision",

        description:
            "Check whether Nova Web Labs has responded.",

        due_date:
            "2026-09-10",

        channel:
            "Email",

        priority:
            "Medium",

        status:
            "pending",

        reason:
            "Recruitment manager said the application was under review."

    },


    {

        action_id: "ACTION002",

        company_id: "COM002",
        application_id: "APP002",

        type:
            "follow_up_again",

        description:
            "Send another follow-up if PixelBridge still has not replied.",

        due_date:
            "2026-09-09",

        channel:
            "Email",

        priority:
            "High",

        status:
            "pending",

        reason:
            "No response after application and first follow-up."

    }

];

// =====================================================
// EXTRA TEST DATA
// Stage 3 preparation
// =====================================================


// =====================================================
// MORE COMPANIES
// =====================================================

companies.push(

    // -------------------------------------------------
    // COM003 — RESEARCHING / NO APPLICATION
    // -------------------------------------------------

    {
        company_id: "COM003",

        name: "CodeHarbour Studio",
        website: "https://www.codeharbour.example",

        industry: "Digital Agency",
        focus: "Web Development",

        company_phone: "+44 20 8000 1003",
        company_email: "hello@codeharbour.example",
        career_email: "jobs@codeharbour.example",

        postcode: "SE1 2AA",

        linkedin:
            "https://linkedin.com/company/codeharbour",

        linkedin_employee_size: "1-10",
        linkedin_followers: 420,

        website_design_quality: "High",

        london_presence: true,
        uk_presence: true,
        international_presence: false,

        number_of_london_offices: 1,
        number_of_uk_offices: 1,
        number_of_international_offices: 0,

        hq_city: "London",
        hq_country: "United Kingdom",

        research_status: "researching",

        created_at: "2026-09-06T10:00:00"
    },


    // -------------------------------------------------
    // COM004 — APPLICATION SENT / NO CONFIRMATION
    // -------------------------------------------------

    {
        company_id: "COM004",

        name: "Atlas Digital Works",
        website: "https://www.atlasdigital.example",

        industry: "Software Development",
        focus: "Web Development",

        company_phone: "+44 121 700 4000",
        company_email: "hello@atlasdigital.example",
        career_email: null,

        postcode: "B1 1BB",

        linkedin:
            "https://linkedin.com/company/atlas-digital-works",

        linkedin_employee_size: "11-50",
        linkedin_followers: 1750,

        website_design_quality: "High",

        london_presence: false,
        uk_presence: true,
        international_presence: false,

        number_of_london_offices: 0,
        number_of_uk_offices: 1,
        number_of_international_offices: 0,

        hq_city: "Birmingham",
        hq_country: "United Kingdom",

        research_status: "researched",

        created_at: "2026-09-04T13:30:00"
    },


    // -------------------------------------------------
    // COM005 — CONFIRMED / WAITING DECISION
    // -------------------------------------------------

    {
        company_id: "COM005",

        name: "CloudNest Technologies",
        website: "https://www.cloudnest.example",

        industry: "Technology",
        focus: "General Software Development",

        company_phone: "+44 113 555 2000",
        company_email: "contact@cloudnest.example",
        career_email: "careers@cloudnest.example",

        postcode: "LS1 4AB",

        linkedin:
            "https://linkedin.com/company/cloudnest-technologies",

        linkedin_employee_size: "51-200",
        linkedin_followers: 8200,

        website_design_quality: "Medium",

        london_presence: true,
        uk_presence: true,
        international_presence: true,

        number_of_london_offices: 1,
        number_of_uk_offices: 3,
        number_of_international_offices: 2,

        hq_city: "Leeds",
        hq_country: "United Kingdom",

        research_status: "researched",

        created_at: "2026-09-03T09:00:00"
    },


    // -------------------------------------------------
    // COM006 — INTERVIEW
    // -------------------------------------------------

    {
        company_id: "COM006",

        name: "BrightStack Labs",
        website: "https://www.brightstack.example",

        industry: "Software Development",
        focus: "Web Development",

        company_phone: "+44 20 7000 6000",
        company_email: "hello@brightstack.example",
        career_email: "talent@brightstack.example",

        postcode: "E1 6AN",

        linkedin:
            "https://linkedin.com/company/brightstack-labs",

        linkedin_employee_size: "11-50",
        linkedin_followers: 4500,

        website_design_quality: "High",

        london_presence: true,
        uk_presence: true,
        international_presence: true,

        number_of_london_offices: 1,
        number_of_uk_offices: 1,
        number_of_international_offices: 1,

        hq_city: "London",
        hq_country: "United Kingdom",

        research_status: "researched",

        created_at: "2026-09-01T08:30:00"
    },


    // -------------------------------------------------
    // COM007 — REJECTED
    // -------------------------------------------------

    {
        company_id: "COM007",

        name: "NorthByte Systems",
        website: "https://www.northbyte.example",

        industry: "IT Services",
        focus: "General Technology",

        company_phone: "+44 161 700 7000",
        company_email: "info@northbyte.example",
        career_email: "recruitment@northbyte.example",

        postcode: "M2 5DB",

        linkedin:
            "https://linkedin.com/company/northbyte-systems",

        linkedin_employee_size: "51-200",
        linkedin_followers: 12100,

        website_design_quality: "Medium",

        london_presence: false,
        uk_presence: true,
        international_presence: false,

        number_of_london_offices: 0,
        number_of_uk_offices: 2,
        number_of_international_offices: 0,

        hq_city: "Manchester",
        hq_country: "United Kingdom",

        research_status: "researched",

        created_at: "2026-08-28T11:00:00"
    },


    // -------------------------------------------------
    // COM008 — OFFER
    // -------------------------------------------------

    {
        company_id: "COM008",

        name: "PixelForge Creative",
        website: "https://www.pixelforge.example",

        industry: "Digital Agency",
        focus: "Web Development",

        company_phone: "+44 20 7555 8000",
        company_email: "hello@pixelforge.example",
        career_email: "careers@pixelforge.example",

        postcode: "W1D 3QF",

        linkedin:
            "https://linkedin.com/company/pixelforge-creative",

        linkedin_employee_size: "11-50",
        linkedin_followers: 6600,

        website_design_quality: "High",

        london_presence: true,
        uk_presence: true,
        international_presence: false,

        number_of_london_offices: 1,
        number_of_uk_offices: 1,
        number_of_international_offices: 0,

        hq_city: "London",
        hq_country: "United Kingdom",

        research_status: "researched",

        created_at: "2026-08-25T10:00:00"
    }

);



// =====================================================
// MORE CONTACTS
// =====================================================

contacts.push(

    {
        contact_id: "CON004",
        company_id: "COM003",

        name: "James Walker",
        role: "Founder",

        email: "james@codeharbour.example",
        phone: "+44 7700 300004",

        whatsapp: true,

        linkedin:
            "https://linkedin.com/in/james-walker-example"
    },


    {
        contact_id: "CON005",
        company_id: "COM004",

        name: "Emma Patel",
        role: "Operations Manager",

        email: "emma@atlasdigital.example",
        phone: "+44 7700 400005",

        whatsapp: false,

        linkedin:
            "https://linkedin.com/in/emma-patel-example"
    },


    {
        contact_id: "CON006",
        company_id: "COM005",

        name: "David Morris",
        role: "Recruiter",

        email: "david@cloudnest.example",
        phone: "+44 7700 500006",

        whatsapp: false,

        linkedin:
            "https://linkedin.com/in/david-morris-example"
    },


    {
        contact_id: "CON007",
        company_id: "COM006",

        name: "Rachel Green",
        role: "Talent Manager",

        email: "rachel@brightstack.example",
        phone: "+44 7700 600007",

        whatsapp: true,

        linkedin:
            "https://linkedin.com/in/rachel-green-example"
    },


    {
        contact_id: "CON008",
        company_id: "COM008",

        name: "Michael Adams",
        role: "Managing Director",

        email: "michael@pixelforge.example",
        phone: "+44 7700 800008",

        whatsapp: true,

        linkedin:
            "https://linkedin.com/in/michael-adams-example"
    }

);



// =====================================================
// MORE APPLICATIONS
// =====================================================

applications.push(

    // COM004

    {
        application_id: "APP003",
        company_id: "COM004",

        role: "Junior Front-End Developer",

        role_url:
            "https://www.atlasdigital.example/jobs/frontend",

        source: "Company Website",

        employment_type: "Full Time",
        level: "Entry",

        application_date: "2026-09-07",

        cv_url: "documents/basaam-cv-v3.pdf",

        cover_letter_url:
            "documents/atlas-cover-letter.pdf"
    },


    // COM005

    {
        application_id: "APP004",
        company_id: "COM005",

        role: "Graduate Software Developer",

        role_url:
            "https://www.cloudnest.example/careers/graduate",

        source: "LinkedIn",

        employment_type: "Full Time",
        level: "Graduate",

        application_date: "2026-09-06",

        cv_url: "documents/basaam-cv-v3.pdf",

        cover_letter_url:
            "documents/cloudnest-cover-letter.pdf"
    },


    // COM006

    {
        application_id: "APP005",
        company_id: "COM006",

        role: "Junior Web Developer",

        role_url:
            "https://www.brightstack.example/jobs/web-developer",

        source: "Indeed",

        employment_type: "Full Time",
        level: "Entry",

        application_date: "2026-09-02",

        cv_url: "documents/basaam-cv-v3.pdf",

        cover_letter_url:
            "documents/brightstack-cover-letter.pdf"
    },


    // COM007

    {
        application_id: "APP006",
        company_id: "COM007",

        role: "Software Developer",

        role_url:
            "https://www.northbyte.example/careers/software-developer",

        source: "Career Form",

        employment_type: "Full Time",
        level: "Junior",

        application_date: "2026-08-30",

        cv_url: "documents/basaam-cv-v3.pdf",

        cover_letter_url:
            "documents/northbyte-cover-letter.pdf"
    },


    // COM008

    {
        application_id: "APP007",
        company_id: "COM008",

        role: "Front-End Developer",

        role_url:
            "https://www.pixelforge.example/jobs/frontend",

        source: "Direct Email",

        employment_type: "Full Time",
        level: "Entry",

        application_date: "2026-08-27",

        cv_url: "documents/basaam-cv-v3.pdf",

        cover_letter_url:
            "documents/pixelforge-cover-letter.pdf"
    }

);



// =====================================================
// MORE ACTIVITIES
// =====================================================

activities.push(

    // =================================================
    // ATLAS DIGITAL
    // Application sent, no reply
    // =================================================

    {
        activity_id: "ACT006",

        company_id: "COM004",
        application_id: "APP003",

        direction: "outbound",
        channel: "Career Form",

        type: "application_sent",

        occurred_at: "2026-09-07T14:00:00",

        contact_id: null,

        content:
            "Application submitted through the company careers page."
    },


    // =================================================
    // CLOUDNEST
    // Application + acknowledgement
    // =================================================

    {
        activity_id: "ACT007",

        company_id: "COM005",
        application_id: "APP004",

        direction: "outbound",
        channel: "LinkedIn",

        type: "application_sent",

        occurred_at: "2026-09-06T10:00:00",

        contact_id: null,

        content:
            "Application submitted through LinkedIn."
    },


    {
        activity_id: "ACT008",

        company_id: "COM005",
        application_id: "APP004",

        direction: "inbound",
        channel: "Email",

        type: "application_acknowledged",

        occurred_at: "2026-09-08T09:15:00",

        contact_id: "CON006",

        content:
            "Thank you for applying. We are reviewing your application and expect to contact you shortly.",

        expected_response_date:
            "2026-09-12"
    },


    // =================================================
    // BRIGHTSTACK
    // Application → acknowledgement → interview
    // =================================================

    {
        activity_id: "ACT009",

        company_id: "COM006",
        application_id: "APP005",

        direction: "outbound",
        channel: "Indeed",

        type: "application_sent",

        occurred_at: "2026-09-02T11:00:00",

        contact_id: null,

        content:
            "Application submitted through Indeed."
    },


    {
        activity_id: "ACT010",

        company_id: "COM006",
        application_id: "APP005",

        direction: "inbound",
        channel: "Email",

        type: "application_acknowledged",

        occurred_at: "2026-09-03T08:45:00",

        contact_id: "CON007",

        content:
            "We have received your application and will review it."
    },


    {
        activity_id: "ACT011",

        company_id: "COM006",
        application_id: "APP005",

        direction: "inbound",
        channel: "Email",

        type: "interview_invitation",

        occurred_at: "2026-09-08T16:30:00",

        contact_id: "CON007",

        content:
            "We would like to invite you to a first-stage interview.",

        event_at:
            "2026-09-11T14:00:00"
    },


    // =================================================
    // NORTHBYTE
    // Application → rejection
    // =================================================

    {
        activity_id: "ACT012",

        company_id: "COM007",
        application_id: "APP006",

        direction: "outbound",
        channel: "Career Form",

        type: "application_sent",

        occurred_at: "2026-08-30T13:15:00",

        contact_id: null,

        content:
            "Application submitted through careers form."
    },


    {
        activity_id: "ACT013",

        company_id: "COM007",
        application_id: "APP006",

        direction: "inbound",
        channel: "Email",

        type: "rejection",

        occurred_at: "2026-09-08T11:20:00",

        contact_id: null,

        content:
            "Thank you for your interest. Unfortunately, we will not be progressing your application."
    },


    // =================================================
    // PIXELFORGE
    // Application → interview → offer
    // =================================================

    {
        activity_id: "ACT014",

        company_id: "COM008",
        application_id: "APP007",

        direction: "outbound",
        channel: "Email",

        type: "application_sent",

        occurred_at: "2026-08-27T09:00:00",

        contact_id: "CON008",

        content:
            "CV and cover letter sent directly to the company."
    },


    {
        activity_id: "ACT015",

        company_id: "COM008",
        application_id: "APP007",

        direction: "inbound",
        channel: "Email",

        type: "application_acknowledged",

        occurred_at: "2026-08-28T10:15:00",

        contact_id: "CON008",

        content:
            "Thank you Basaam. We have received your application."
    },


    {
        activity_id: "ACT016",

        company_id: "COM008",
        application_id: "APP007",

        direction: "inbound",
        channel: "Email",

        type: "interview_invitation",

        occurred_at: "2026-09-01T12:30:00",

        contact_id: "CON008",

        content:
            "We would like to invite you for an interview.",

        event_at:
            "2026-09-04T15:00:00"
    },


    {
        activity_id: "ACT017",

        company_id: "COM008",
        application_id: "APP007",

        direction: "outbound",
        channel: "Video Meeting",

        type: "interview_completed",

        occurred_at: "2026-09-04T16:00:00",

        contact_id: "CON008",

        content:
            "First interview completed."
    },


    {
        activity_id: "ACT018",

        company_id: "COM008",
        application_id: "APP007",

        direction: "inbound",
        channel: "Email",

        type: "offer",

        occurred_at: "2026-09-09T10:30:00",

        contact_id: "CON008",

        content:
            "We are pleased to offer you the Front-End Developer position."
    }

);



// =====================================================
// MORE ACTIONS
// =====================================================

actions.push(

    // Atlas

    {
        action_id: "ACTION003",

        company_id: "COM004",
        application_id: "APP003",

        type: "follow_up",

        description:
            "Follow up with Atlas Digital Works if no confirmation is received.",

        due_date:
            "2026-09-11",

        channel:
            "Email",

        priority:
            "Medium",

        status:
            "pending",

        reason:
            "Application was submitted but no acknowledgement has been received."
    },


    // CloudNest

    {
        action_id: "ACTION004",

        company_id: "COM005",
        application_id: "APP004",

        type: "check_for_decision",

        description:
            "Check whether CloudNest has responded.",

        due_date:
            "2026-09-12",

        channel:
            "Email",

        priority:
            "Medium",

        status:
            "pending",

        reason:
            "The recruiter indicated that the application is under review."
    },


    // BrightStack

    {
        action_id: "ACTION005",

        company_id: "COM006",
        application_id: "APP005",

        type: "prepare_interview",

        description:
            "Prepare for BrightStack interview.",

        due_date:
            "2026-09-10",

        channel:
            "Personal",

        priority:
            "High",

        status:
            "pending",

        reason:
            "Interview is scheduled for 11 September at 14:00."
    },


    {
        action_id: "ACTION006",

        company_id: "COM006",
        application_id: "APP005",

        type: "attend_interview",

        description:
            "Attend BrightStack first-stage interview.",

        due_date:
            "2026-09-11",

        channel:
            "Video Meeting",

        priority:
            "High",

        status:
            "pending",

        reason:
            "Interview invitation received."
    },


    // PixelForge

    {
        action_id: "ACTION007",

        company_id: "COM008",
        application_id: "APP007",

        type: "review_offer",

        description:
            "Review PixelForge job offer.",

        due_date:
            "2026-09-12",

        channel:
            "Email",

        priority:
            "High",

        status:
            "pending",

        reason:
            "Job offer received on 9 September."
    }

);
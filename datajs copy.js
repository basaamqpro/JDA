// =====================================================
// CAREER APPLICATION DASHBOARD
// FAKE DATABASE
// =====================================================
//
// Stage 3 test data
//
// Main structures:
//
// 1. companies
// 2. contacts
// 3. applications
// 4. activities
// 5. actions
//
// RULE:
//
// One company can have:
// - zero applications
// OR
// - one application
//
// =====================================================



// =====================================================
// 1. COMPANIES
// =====================================================

const companies = [


    // =================================================
    // COM001
    //
    // STATUS:
    // Awaiting Decision
    //
    // Application sent
    // Confirmation received
    // Waiting for company decision
    // =================================================

    {
        company_id: "COM001",

        name: "Nova Web Labs",

        website:
            "https://www.novaweblabs.example",

        industry:
            "Software Development",

        focus:
            "Web Development",

        company_phone:
            "+44 20 1234 5678",

        company_email:
            "hello@novaweblabs.example",

        career_email:
            "careers@novaweblabs.example",

        postcode:
            "EC1A 1AA",

        linkedin:
            "https://linkedin.com/company/nova-web-labs",

        linkedin_employee_size:
            "11-50",

        linkedin_followers:
            3200,

        facebook:
            "https://facebook.com/novaweblabs",

        website_design_quality:
            "High",

        london_presence:
            true,

        uk_presence:
            true,

        international_presence:
            false,

        number_of_london_offices:
            1,

        number_of_uk_offices:
            2,

        number_of_international_offices:
            0,

        hq_city:
            "London",

        hq_country:
            "United Kingdom",

        research_status:
            "researched",

        created_at:
            "2026-09-01T12:00:00"
    },



    // =================================================
    // COM002
    //
    // STATUS:
    // Awaiting Response
    //
    // Application sent
    // Follow-up sent
    // No company response
    // =================================================

    {
        company_id:
            "COM002",

        name:
            "PixelBridge Digital",

        website:
            "https://www.pixelbridge.example",

        industry:
            "Digital Agency",

        focus:
            "Web Development",

        company_phone:
            "+44 161 555 0199",

        company_email:
            "hello@pixelbridge.example",

        career_email:
            null,

        postcode:
            "M1 1AE",

        linkedin:
            "https://linkedin.com/company/pixelbridge-digital",

        linkedin_employee_size:
            "1-10",

        linkedin_followers:
            850,

        facebook:
            null,

        website_design_quality:
            "Medium",

        london_presence:
            false,

        uk_presence:
            true,

        international_presence:
            true,

        number_of_london_offices:
            0,

        number_of_uk_offices:
            1,

        number_of_international_offices:
            1,

        hq_city:
            "Manchester",

        hq_country:
            "United Kingdom",

        research_status:
            "researched",

        created_at:
            "2026-09-02T15:30:00"
    },



    // =================================================
    // COM003
    //
    // STATUS:
    // Researching
    //
    // Company added
    // Research not completed
    // No application
    // =================================================

    {
        company_id:
            "COM003",

        name:
            "CodeHarbour Studio",

        website:
            "https://www.codeharbour.example",

        industry:
            "Digital Agency",

        focus:
            "Web Development",

        company_phone:
            "+44 20 8000 1003",

        company_email:
            "hello@codeharbour.example",

        career_email:
            "jobs@codeharbour.example",

        postcode:
            "SE1 2AA",

        linkedin:
            "https://linkedin.com/company/codeharbour",

        linkedin_employee_size:
            "1-10",

        linkedin_followers:
            420,

        facebook:
            null,

        website_design_quality:
            "High",

        london_presence:
            true,

        uk_presence:
            true,

        international_presence:
            false,

        number_of_london_offices:
            1,

        number_of_uk_offices:
            1,

        number_of_international_offices:
            0,

        hq_city:
            "London",

        hq_country:
            "United Kingdom",

        research_status:
            "researching",

        created_at:
            "2026-09-06T10:00:00"
    },



    // =================================================
    // COM004
    //
    // STATUS:
    // Ready To Apply
    //
    // Research completed
    // No application yet
    // =================================================

    {
        company_id:
            "COM004",

        name:
            "BlueOrbit Interactive",

        website:
            "https://www.blueorbit.example",

        industry:
            "Creative Technology",

        focus:
            "Web Development",

        company_phone:
            "+44 20 7200 4400",

        company_email:
            "hello@blueorbit.example",

        career_email:
            "careers@blueorbit.example",

        postcode:
            "N1 7AA",

        linkedin:
            "https://linkedin.com/company/blueorbit-interactive",

        linkedin_employee_size:
            "11-50",

        linkedin_followers:
            2800,

        facebook:
            null,

        website_design_quality:
            "High",

        london_presence:
            true,

        uk_presence:
            true,

        international_presence:
            false,

        number_of_london_offices:
            1,

        number_of_uk_offices:
            1,

        number_of_international_offices:
            0,

        hq_city:
            "London",

        hq_country:
            "United Kingdom",

        research_status:
            "researched",

        created_at:
            "2026-09-07T11:00:00"
    },



    // =================================================
    // COM005
    //
    // STATUS:
    // Awaiting Confirmation
    //
    // Application sent
    // No confirmation received
    // =================================================

    {
        company_id:
            "COM005",

        name:
            "Atlas Digital Works",

        website:
            "https://www.atlasdigital.example",

        industry:
            "Software Development",

        focus:
            "Web Development",

        company_phone:
            "+44 121 700 4000",

        company_email:
            "hello@atlasdigital.example",

        career_email:
            null,

        postcode:
            "B1 1BB",

        linkedin:
            "https://linkedin.com/company/atlas-digital-works",

        linkedin_employee_size:
            "11-50",

        linkedin_followers:
            1750,

        facebook:
            null,

        website_design_quality:
            "High",

        london_presence:
            false,

        uk_presence:
            true,

        international_presence:
            false,

        number_of_london_offices:
            0,

        number_of_uk_offices:
            1,

        number_of_international_offices:
            0,

        hq_city:
            "Birmingham",

        hq_country:
            "United Kingdom",

        research_status:
            "researched",

        created_at:
            "2026-09-04T13:30:00"
    },



    // =================================================
    // COM006
    //
    // STATUS:
    // Follow-up Due
    //
    // Company acknowledged application
    // They said they would reply by 8 September
    // No newer response
    // =================================================

    {
        company_id:
            "COM006",

        name:
            "CloudNest Technologies",

        website:
            "https://www.cloudnest.example",

        industry:
            "Technology",

        focus:
            "General Software Development",

        company_phone:
            "+44 113 555 2000",

        company_email:
            "contact@cloudnest.example",

        career_email:
            "careers@cloudnest.example",

        postcode:
            "LS1 4AB",

        linkedin:
            "https://linkedin.com/company/cloudnest-technologies",

        linkedin_employee_size:
            "51-200",

        linkedin_followers:
            8200,

        facebook:
            null,

        website_design_quality:
            "Medium",

        london_presence:
            true,

        uk_presence:
            true,

        international_presence:
            true,

        number_of_london_offices:
            1,

        number_of_uk_offices:
            3,

        number_of_international_offices:
            2,

        hq_city:
            "Leeds",

        hq_country:
            "United Kingdom",

        research_status:
            "researched",

        created_at:
            "2026-09-03T09:00:00"
    },



    // =================================================
    // COM007
    //
    // STATUS:
    // Interview Stage
    // =================================================

    {
        company_id:
            "COM007",

        name:
            "BrightStack Labs",

        website:
            "https://www.brightstack.example",

        industry:
            "Software Development",

        focus:
            "Web Development",

        company_phone:
            "+44 20 7000 6000",

        company_email:
            "hello@brightstack.example",

        career_email:
            "talent@brightstack.example",

        postcode:
            "E1 6AN",

        linkedin:
            "https://linkedin.com/company/brightstack-labs",

        linkedin_employee_size:
            "11-50",

        linkedin_followers:
            4500,

        facebook:
            null,

        website_design_quality:
            "High",

        london_presence:
            true,

        uk_presence:
            true,

        international_presence:
            true,

        number_of_london_offices:
            1,

        number_of_uk_offices:
            1,

        number_of_international_offices:
            1,

        hq_city:
            "London",

        hq_country:
            "United Kingdom",

        research_status:
            "researched",

        created_at:
            "2026-09-01T08:30:00"
    },



    // =================================================
    // COM008
    //
    // STATUS:
    // Awaiting Interview Decision
    //
    // Interview already completed
    // No offer/rejection yet
    // =================================================

    {
        company_id:
            "COM008",

        name:
            "VectorPeak Software",

        website:
            "https://www.vectorpeak.example",

        industry:
            "Software Development",

        focus:
            "General Software Development",

        company_phone:
            "+44 117 500 8800",

        company_email:
            "contact@vectorpeak.example",

        career_email:
            "jobs@vectorpeak.example",

        postcode:
            "BS1 4DJ",

        linkedin:
            "https://linkedin.com/company/vectorpeak-software",

        linkedin_employee_size:
            "11-50",

        linkedin_followers:
            3950,

        facebook:
            null,

        website_design_quality:
            "Medium",

        london_presence:
            false,

        uk_presence:
            true,

        international_presence:
            false,

        number_of_london_offices:
            0,

        number_of_uk_offices:
            2,

        number_of_international_offices:
            0,

        hq_city:
            "Bristol",

        hq_country:
            "United Kingdom",

        research_status:
            "researched",

        created_at:
            "2026-08-29T12:30:00"
    },



    // =================================================
    // COM009
    //
    // STATUS:
    // Rejected
    // =================================================

    {
        company_id:
            "COM009",

        name:
            "NorthByte Systems",

        website:
            "https://www.northbyte.example",

        industry:
            "IT Services",

        focus:
            "General Technology",

        company_phone:
            "+44 161 700 7000",

        company_email:
            "info@northbyte.example",

        career_email:
            "recruitment@northbyte.example",

        postcode:
            "M2 5DB",

        linkedin:
            "https://linkedin.com/company/northbyte-systems",

        linkedin_employee_size:
            "51-200",

        linkedin_followers:
            12100,

        facebook:
            null,

        website_design_quality:
            "Medium",

        london_presence:
            false,

        uk_presence:
            true,

        international_presence:
            false,

        number_of_london_offices:
            0,

        number_of_uk_offices:
            2,

        number_of_international_offices:
            0,

        hq_city:
            "Manchester",

        hq_country:
            "United Kingdom",

        research_status:
            "researched",

        created_at:
            "2026-08-28T11:00:00"
    },



    // =================================================
    // COM010
    //
    // STATUS:
    // Offer Received
    // =================================================

    {
        company_id:
            "COM010",

        name:
            "PixelForge Creative",

        website:
            "https://www.pixelforge.example",

        industry:
            "Digital Agency",

        focus:
            "Web Development",

        company_phone:
            "+44 20 7555 8000",

        company_email:
            "hello@pixelforge.example",

        career_email:
            "careers@pixelforge.example",

        postcode:
            "W1D 3QF",

        linkedin:
            "https://linkedin.com/company/pixelforge-creative",

        linkedin_employee_size:
            "11-50",

        linkedin_followers:
            6600,

        facebook:
            null,

        website_design_quality:
            "High",

        london_presence:
            true,

        uk_presence:
            true,

        international_presence:
            false,

        number_of_london_offices:
            1,

        number_of_uk_offices:
            1,

        number_of_international_offices:
            0,

        hq_city:
            "London",

        hq_country:
            "United Kingdom",

        research_status:
            "researched",

        created_at:
            "2026-08-25T10:00:00"
    }

];



// =====================================================
// 2. CONTACTS
// =====================================================

const contacts = [


    // =================================================
    // NOVA WEB LABS
    // =================================================

    {
        contact_id:
            "CON001",

        company_id:
            "COM001",

        name:
            "Sarah Collins",

        role:
            "Recruitment Manager",

        email:
            "sarah@novaweblabs.example",

        phone:
            "+44 7700 100001",

        whatsapp:
            false,

        linkedin:
            "https://linkedin.com/in/sarah-collins-example"
    },


    {
        contact_id:
            "CON002",

        company_id:
            "COM001",

        name:
            "Daniel Reed",

        role:
            "CEO",

        email:
            "daniel@novaweblabs.example",

        phone:
            "+44 7700 100002",

        whatsapp:
            true,

        linkedin:
            "https://linkedin.com/in/daniel-reed-example"
    },



    // =================================================
    // PIXELBRIDGE
    // =================================================

    {
        contact_id:
            "CON003",

        company_id:
            "COM002",

        name:
            "Amelia Grant",

        role:
            "Founder",

        email:
            "amelia@pixelbridge.example",

        phone:
            "+44 7700 200001",

        whatsapp:
            true,

        linkedin:
            "https://linkedin.com/in/amelia-grant-example"
    },



    // =================================================
    // CODEHARBOUR
    // =================================================

    {
        contact_id:
            "CON004",

        company_id:
            "COM003",

        name:
            "James Walker",

        role:
            "Founder",

        email:
            "james@codeharbour.example",

        phone:
            "+44 7700 300004",

        whatsapp:
            true,

        linkedin:
            "https://linkedin.com/in/james-walker-example"
    },



    // =================================================
    // BLUEORBIT
    // =================================================

    {
        contact_id:
            "CON005",

        company_id:
            "COM004",

        name:
            "Sophia Evans",

        role:
            "People Manager",

        email:
            "sophia@blueorbit.example",

        phone:
            "+44 7700 400005",

        whatsapp:
            false,

        linkedin:
            "https://linkedin.com/in/sophia-evans-example"
    },



    // =================================================
    // ATLAS
    // =================================================

    {
        contact_id:
            "CON006",

        company_id:
            "COM005",

        name:
            "Emma Patel",

        role:
            "Operations Manager",

        email:
            "emma@atlasdigital.example",

        phone:
            "+44 7700 500006",

        whatsapp:
            false,

        linkedin:
            "https://linkedin.com/in/emma-patel-example"
    },



    // =================================================
    // CLOUDNEST
    // =================================================

    {
        contact_id:
            "CON007",

        company_id:
            "COM006",

        name:
            "David Morris",

        role:
            "Recruiter",

        email:
            "david@cloudnest.example",

        phone:
            "+44 7700 600007",

        whatsapp:
            false,

        linkedin:
            "https://linkedin.com/in/david-morris-example"
    },



    // =================================================
    // BRIGHTSTACK
    // =================================================

    {
        contact_id:
            "CON008",

        company_id:
            "COM007",

        name:
            "Rachel Green",

        role:
            "Talent Manager",

        email:
            "rachel@brightstack.example",

        phone:
            "+44 7700 700008",

        whatsapp:
            true,

        linkedin:
            "https://linkedin.com/in/rachel-green-example"
    },


    {
        contact_id:
            "CON009",

        company_id:
            "COM007",

        name:
            "Tom Harris",

        role:
            "Lead Developer",

        email:
            "tom@brightstack.example",

        phone:
            null,

        whatsapp:
            false,

        linkedin:
            "https://linkedin.com/in/tom-harris-example"
    },



    // =================================================
    // VECTORPEAK
    // =================================================

    {
        contact_id:
            "CON010",

        company_id:
            "COM008",

        name:
            "Laura Bennett",

        role:
            "Hiring Manager",

        email:
            "laura@vectorpeak.example",

        phone:
            "+44 7700 800010",

        whatsapp:
            false,

        linkedin:
            "https://linkedin.com/in/laura-bennett-example"
    },



    // =================================================
    // NORTHBYTE
    // =================================================

    {
        contact_id:
            "CON011",

        company_id:
            "COM009",

        name:
            "Andrew Lewis",

        role:
            "Recruitment Officer",

        email:
            "andrew@northbyte.example",

        phone:
            null,

        whatsapp:
            false,

        linkedin:
            "https://linkedin.com/in/andrew-lewis-example"
    },



    // =================================================
    // PIXELFORGE
    // =================================================

    {
        contact_id:
            "CON012",

        company_id:
            "COM010",

        name:
            "Michael Adams",

        role:
            "Managing Director",

        email:
            "michael@pixelforge.example",

        phone:
            "+44 7700 100012",

        whatsapp:
            true,

        linkedin:
            "https://linkedin.com/in/michael-adams-example"
    }

];



// =====================================================
// 3. APPLICATIONS
// =====================================================

const applications = [


    // =================================================
    // NOVA
    // =================================================

    {
        application_id:
            "APP001",

        company_id:
            "COM001",

        role:
            "Junior Web Developer",

        role_url:
            "https://uk.indeed.com/viewjob?jk=fake001",

        source:
            "Indeed",

        employment_type:
            "Full Time",

        level:
            "Entry",

        application_date:
            "2026-09-03",

        cv_url:
            "documents/basaam-cv-v3.pdf",

        cover_letter_url:
            "documents/nova-cover-letter.pdf"
    },



    // =================================================
    // PIXELBRIDGE
    // =================================================

    {
        application_id:
            "APP002",

        company_id:
            "COM002",

        role:
            "Web Development Intern",

        role_url:
            "https://www.pixelbridge.example/careers/web-intern",

        source:
            "Company Website",

        employment_type:
            "Internship",

        level:
            "Entry",

        application_date:
            "2026-09-01",

        cv_url:
            "documents/basaam-cv-v3.pdf",

        cover_letter_url:
            "documents/pixelbridge-cover-letter.pdf"
    },



    // =================================================
    // ATLAS
    // =================================================

    {
        application_id:
            "APP003",

        company_id:
            "COM005",

        role:
            "Junior Front-End Developer",

        role_url:
            "https://www.atlasdigital.example/jobs/frontend",

        source:
            "Career Form",

        employment_type:
            "Full Time",

        level:
            "Entry",

        application_date:
            "2026-09-07",

        cv_url:
            "documents/basaam-cv-v3.pdf",

        cover_letter_url:
            "documents/atlas-cover-letter.pdf"
    },



    // =================================================
    // CLOUDNEST
    // =================================================

    {
        application_id:
            "APP004",

        company_id:
            "COM006",

        role:
            "Graduate Software Developer",

        role_url:
            "https://www.cloudnest.example/careers/graduate",

        source:
            "LinkedIn",

        employment_type:
            "Full Time",

        level:
            "Graduate",

        application_date:
            "2026-09-03",

        cv_url:
            "documents/basaam-cv-v3.pdf",

        cover_letter_url:
            "documents/cloudnest-cover-letter.pdf"
    },



    // =================================================
    // BRIGHTSTACK
    // =================================================

    {
        application_id:
            "APP005",

        company_id:
            "COM007",

        role:
            "Junior Web Developer",

        role_url:
            "https://www.brightstack.example/jobs/web-developer",

        source:
            "Indeed",

        employment_type:
            "Full Time",

        level:
            "Entry",

        application_date:
            "2026-09-02",

        cv_url:
            "documents/basaam-cv-v3.pdf",

        cover_letter_url:
            "documents/brightstack-cover-letter.pdf"
    },



    // =================================================
    // VECTORPEAK
    // =================================================

    {
        application_id:
            "APP006",

        company_id:
            "COM008",

        role:
            "Junior Software Engineer",

        role_url:
            "https://www.vectorpeak.example/jobs/junior-engineer",

        source:
            "Direct Email",

        employment_type:
            "Full Time",

        level:
            "Junior",

        application_date:
            "2026-08-29",

        cv_url:
            "documents/basaam-cv-v3.pdf",

        cover_letter_url:
            "documents/vectorpeak-cover-letter.pdf"
    },



    // =================================================
    // NORTHBYTE
    // =================================================

    {
        application_id:
            "APP007",

        company_id:
            "COM009",

        role:
            "Software Developer",

        role_url:
            "https://www.northbyte.example/careers/software-developer",

        source:
            "Career Form",

        employment_type:
            "Full Time",

        level:
            "Junior",

        application_date:
            "2026-08-30",

        cv_url:
            "documents/basaam-cv-v3.pdf",

        cover_letter_url:
            "documents/northbyte-cover-letter.pdf"
    },



    // =================================================
    // PIXELFORGE
    // =================================================

    {
        application_id:
            "APP008",

        company_id:
            "COM010",

        role:
            "Front-End Developer",

        role_url:
            "https://www.pixelforge.example/jobs/frontend",

        source:
            "Direct Email",

        employment_type:
            "Full Time",

        level:
            "Entry",

        application_date:
            "2026-08-27",

        cv_url:
            "documents/basaam-cv-v3.pdf",

        cover_letter_url:
            "documents/pixelforge-cover-letter.pdf"
    }

];



// =====================================================
// 4. ACTIVITIES
// =====================================================

const activities = [


    // =================================================
    // NOVA WEB LABS
    // =================================================

    {
        activity_id:
            "ACT001",

        company_id:
            "COM001",

        application_id:
            "APP001",

        direction:
            "outbound",

        channel:
            "Indeed",

        type:
            "application_sent",

        occurred_at:
            "2026-09-03T10:15:00",

        contact_id:
            null,

        content:
            "Application submitted through Indeed.",

        cv_url:
            "documents/basaam-cv-v3.pdf",

        cover_letter_url:
            "documents/nova-cover-letter.pdf"
    },


    {
        activity_id:
            "ACT002",

        company_id:
            "COM001",

        application_id:
            "APP001",

        direction:
            "inbound",

        channel:
            "Email",

        type:
            "application_acknowledged",

        occurred_at:
            "2026-09-03T14:40:00",

        contact_id:
            "CON001",

        content:
            "Hi Basaam, thank you for your application. We have received it and our team will review it.",

        expected_response_date:
            "2026-09-12"
    },


    {
        activity_id:
            "ACT003",

        company_id:
            "COM001",

        application_id:
            "APP001",

        direction:
            "outbound",

        channel:
            "LinkedIn",

        type:
            "linkedin_connection",

        occurred_at:
            "2026-09-05T12:20:00",

        contact_id:
            "CON001",

        content:
            "LinkedIn connection request sent to the recruitment manager."
    },



    // =================================================
    // PIXELBRIDGE
    // =================================================

    {
        activity_id:
            "ACT004",

        company_id:
            "COM002",

        application_id:
            "APP002",

        direction:
            "outbound",

        channel:
            "Career Form",

        type:
            "application_sent",

        occurred_at:
            "2026-09-01T11:30:00",

        contact_id:
            null,

        content:
            "Application submitted through the company careers form."
    },


    {
        activity_id:
            "ACT005",

        company_id:
            "COM002",

        application_id:
            "APP002",

        direction:
            "outbound",

        channel:
            "Email",

        type:
            "follow_up",

        occurred_at:
            "2026-09-07T09:30:00",

        contact_id:
            "CON003",

        content:
            "Follow-up email sent regarding the Web Development Intern application."
    },



    // =================================================
    // ATLAS DIGITAL
    // =================================================

    {
        activity_id:
            "ACT006",

        company_id:
            "COM005",

        application_id:
            "APP003",

        direction:
            "outbound",

        channel:
            "Career Form",

        type:
            "application_sent",

        occurred_at:
            "2026-09-07T14:00:00",

        contact_id:
            null,

        content:
            "Junior Front-End Developer application submitted through the careers page."
    },



    // =================================================
    // CLOUDNEST
    // =================================================

    {
        activity_id:
            "ACT007",

        company_id:
            "COM006",

        application_id:
            "APP004",

        direction:
            "outbound",

        channel:
            "LinkedIn",

        type:
            "application_sent",

        occurred_at:
            "2026-09-03T10:00:00",

        contact_id:
            null,

        content:
            "Graduate Software Developer application submitted through LinkedIn."
    },


    {
        activity_id:
            "ACT008",

        company_id:
            "COM006",

        application_id:
            "APP004",

        direction:
            "inbound",

        channel:
            "Email",

        type:
            "application_acknowledged",

        occurred_at:
            "2026-09-04T09:15:00",

        contact_id:
            "CON007",

        content:
            "Thank you for applying. We are reviewing your application and expect to contact you shortly.",

        expected_response_date:
            "2026-09-08"
    },



    // =================================================
    // BRIGHTSTACK
    // =================================================

    {
        activity_id:
            "ACT009",

        company_id:
            "COM007",

        application_id:
            "APP005",

        direction:
            "outbound",

        channel:
            "Indeed",

        type:
            "application_sent",

        occurred_at:
            "2026-09-02T11:00:00",

        contact_id:
            null,

        content:
            "Application submitted through Indeed."
    },


    {
        activity_id:
            "ACT010",

        company_id:
            "COM007",

        application_id:
            "APP005",

        direction:
            "inbound",

        channel:
            "Email",

        type:
            "application_acknowledged",

        occurred_at:
            "2026-09-03T08:45:00",

        contact_id:
            "CON008",

        content:
            "We have received your application and will review it."
    },


    {
        activity_id:
            "ACT011",

        company_id:
            "COM007",

        application_id:
            "APP005",

        direction:
            "inbound",

        channel:
            "Email",

        type:
            "interview_invitation",

        occurred_at:
            "2026-09-08T16:30:00",

        contact_id:
            "CON008",

        content:
            "We would like to invite you to a first-stage interview.",

        event_at:
            "2026-09-11T14:00:00"
    },



    // =================================================
    // VECTORPEAK
    // =================================================

    {
        activity_id:
            "ACT012",

        company_id:
            "COM008",

        application_id:
            "APP006",

        direction:
            "outbound",

        channel:
            "Email",

        type:
            "application_sent",

        occurred_at:
            "2026-08-29T10:30:00",

        contact_id:
            "CON010",

        content:
            "CV and cover letter emailed directly to the hiring manager."
    },


    {
        activity_id:
            "ACT013",

        company_id:
            "COM008",

        application_id:
            "APP006",

        direction:
            "inbound",

        channel:
            "Email",

        type:
            "application_acknowledged",

        occurred_at:
            "2026-08-30T10:10:00",

        contact_id:
            "CON010",

        content:
            "Application received. We would like to discuss your experience."
    },


    {
        activity_id:
            "ACT014",

        company_id:
            "COM008",

        application_id:
            "APP006",

        direction:
            "inbound",

        channel:
            "Email",

        type:
            "interview_invitation",

        occurred_at:
            "2026-09-01T13:20:00",

        contact_id:
            "CON010",

        content:
            "Interview invitation for the Junior Software Engineer role.",

        event_at:
            "2026-09-05T11:00:00"
    },


    {
        activity_id:
            "ACT015",

        company_id:
            "COM008",

        application_id:
            "APP006",

        direction:
            "meeting",

        channel:
            "Video Meeting",

        type:
            "interview_completed",

        occurred_at:
            "2026-09-05T12:00:00",

        contact_id:
            "CON010",

        content:
            "Interview completed with the hiring manager."
    },



    // =================================================
    // NORTHBYTE
    // =================================================

    {
        activity_id:
            "ACT016",

        company_id:
            "COM009",

        application_id:
            "APP007",

        direction:
            "outbound",

        channel:
            "Career Form",

        type:
            "application_sent",

        occurred_at:
            "2026-08-30T13:15:00",

        contact_id:
            null,

        content:
            "Application submitted through the careers form."
    },


    {
        activity_id:
            "ACT017",

        company_id:
            "COM009",

        application_id:
            "APP007",

        direction:
            "inbound",

        channel:
            "Email",

        type:
            "application_acknowledged",

        occurred_at:
            "2026-08-31T09:00:00",

        contact_id:
            "CON011",

        content:
            "Thank you. Your application has been received."
    },


    {
        activity_id:
            "ACT018",

        company_id:
            "COM009",

        application_id:
            "APP007",

        direction:
            "inbound",

        channel:
            "Email",

        type:
            "rejection",

        occurred_at:
            "2026-09-08T11:20:00",

        contact_id:
            "CON011",

        content:
            "Thank you for your interest. Unfortunately, we will not be progressing your application."
    },



    // =================================================
    // PIXELFORGE
    // =================================================

    {
        activity_id:
            "ACT019",

        company_id:
            "COM010",

        application_id:
            "APP008",

        direction:
            "outbound",

        channel:
            "Email",

        type:
            "application_sent",

        occurred_at:
            "2026-08-27T09:00:00",

        contact_id:
            "CON012",

        content:
            "CV and cover letter emailed directly to the managing director."
    },


    {
        activity_id:
            "ACT020",

        company_id:
            "COM010",

        application_id:
            "APP008",

        direction:
            "inbound",

        channel:
            "Email",

        type:
            "application_acknowledged",

        occurred_at:
            "2026-08-28T10:15:00",

        contact_id:
            "CON012",

        content:
            "Thank you Basaam. We have received your application."
    },


    {
        activity_id:
            "ACT021",

        company_id:
            "COM010",

        application_id:
            "APP008",

        direction:
            "inbound",

        channel:
            "Email",

        type:
            "interview_invitation",

        occurred_at:
            "2026-09-01T12:30:00",

        contact_id:
            "CON012",

        content:
            "We would like to invite you to an interview.",

        event_at:
            "2026-09-04T15:00:00"
    },


    {
        activity_id:
            "ACT022",

        company_id:
            "COM010",

        application_id:
            "APP008",

        direction:
            "meeting",

        channel:
            "Video Meeting",

        type:
            "interview_completed",

        occurred_at:
            "2026-09-04T16:00:00",

        contact_id:
            "CON012",

        content:
            "Interview completed."
    },


    {
        activity_id:
            "ACT023",

        company_id:
            "COM010",

        application_id:
            "APP008",

        direction:
            "inbound",

        channel:
            "Email",

        type:
            "offer",

        occurred_at:
            "2026-09-09T10:30:00",

        contact_id:
            "CON012",

        content:
            "We are pleased to offer you the Front-End Developer position."
    }

];



// =====================================================
// 5. ACTIONS
// =====================================================

const actions = [


    // =================================================
    // NOVA
    //
    // Future check
    // =================================================

    {
        action_id:
            "ACTION001",

        company_id:
            "COM001",

        application_id:
            "APP001",

        type:
            "check_for_decision",

        description:
            "Check whether Nova Web Labs has responded.",

        due_date:
            "2026-09-12",

        channel:
            "Email",

        priority:
            "Medium",

        status:
            "pending",

        reason:
            "The recruiter confirmed that the application is under review."
    },



    // =================================================
    // PIXELBRIDGE
    //
    // Follow-up already sent.
    // Next follow-up not due yet.
    // =================================================

    {
        action_id:
            "ACTION002",

        company_id:
            "COM002",

        application_id:
            "APP002",

        type:
            "follow_up_again",

        description:
            "Follow up again if PixelBridge still has not replied.",

        due_date:
            "2026-09-14",

        channel:
            "Email",

        priority:
            "Medium",

        status:
            "pending",

        reason:
            "The first follow-up was sent on 7 September."
    },



    // =================================================
    // CODEHARBOUR
    //
    // Researching
    // =================================================

    {
        action_id:
            "ACTION003",

        company_id:
            "COM003",

        application_id:
            null,

        type:
            "research_company",

        description:
            "Finish researching CodeHarbour Studio.",

        due_date:
            "2026-09-10",

        channel:
            "Research",

        priority:
            "Medium",

        status:
            "pending",

        reason:
            "Company research has not yet been completed."
    },



    // =================================================
    // BLUEORBIT
    //
    // Research finished
    // Need to apply
    // =================================================

    {
        action_id:
            "ACTION004",

        company_id:
            "COM004",

        application_id:
            null,

        type:
            "send_application",

        description:
            "Prepare and send an application to BlueOrbit Interactive.",

        due_date:
            "2026-09-11",

        channel:
            "Career Email",

        priority:
            "High",

        status:
            "pending",

        reason:
            "Company research is complete and the company appears suitable."
    },



    // =================================================
    // ATLAS
    //
    // Awaiting confirmation
    // =================================================

    {
        action_id:
            "ACTION005",

        company_id:
            "COM005",

        application_id:
            "APP003",

        type:
            "follow_up",

        description:
            "Follow up with Atlas Digital Works if no application confirmation arrives.",

        due_date:
            "2026-09-11",

        channel:
            "Email",

        priority:
            "Medium",

        status:
            "pending",

        reason:
            "Application was sent but no confirmation has been received."
    },



    // =================================================
    // CLOUDNEST
    //
    // This is intentionally overdue TODAY.
    //
    // Since expected response date = 8 September,
    // the status calculator should also identify
    // Follow-up Due.
    // =================================================

    {
        action_id:
            "ACTION006",

        company_id:
            "COM006",

        application_id:
            "APP004",

        type:
            "follow_up",

        description:
            "Follow up with CloudNest regarding their application decision.",

        due_date:
            "2026-09-09",

        channel:
            "Email",

        priority:
            "High",

        status:
            "pending",

        reason:
            "The company's expected response date was 8 September."
    },



    // =================================================
    // BRIGHTSTACK
    //
    // Interview preparation
    // =================================================

    {
        action_id:
            "ACTION007",

        company_id:
            "COM007",

        application_id:
            "APP005",

        type:
            "prepare_interview",

        description:
            "Prepare examples, projects and questions for the BrightStack interview.",

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
        action_id:
            "ACTION008",

        company_id:
            "COM007",

        application_id:
            "APP005",

        type:
            "attend_interview",

        description:
            "Attend the BrightStack first-stage interview.",

        due_date:
            "2026-09-11",

        channel:
            "Video Meeting",

        priority:
            "High",

        status:
            "pending",

        reason:
            "Interview invitation received from Rachel Green."
    },



    // =================================================
    // VECTORPEAK
    //
    // Interview already completed.
    // Waiting for result.
    // =================================================

    {
        action_id:
            "ACTION009",

        company_id:
            "COM008",

        application_id:
            "APP006",

        type:
            "check_for_decision",

        description:
            "Follow up with VectorPeak if no interview decision is received.",

        due_date:
            "2026-09-12",

        channel:
            "Email",

        priority:
            "Medium",

        status:
            "pending",

        reason:
            "Interview was completed on 5 September."
    },



    // =================================================
    // NORTHBYTE
    //
    // Closed/rejected.
    //
    // Example completed action.
    // It should NOT show in pending Action Queue.
    // =================================================

    {
        action_id:
            "ACTION010",

        company_id:
            "COM009",

        application_id:
            "APP007",

        type:
            "record_outcome",

        description:
            "Record the NorthByte rejection.",

        due_date:
            "2026-09-08",

        channel:
            "Personal",

        priority:
            "Low",

        status:
            "completed",

        reason:
            "Application was rejected on 8 September."
    },



    // =================================================
    // PIXELFORGE
    //
    // Offer received
    // =================================================

    {
        action_id:
            "ACTION011",

        company_id:
            "COM010",

        application_id:
            "APP008",

        type:
            "review_offer",

        description:
            "Review the PixelForge job offer.",

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
    },


    {
        action_id:
            "ACTION012",

        company_id:
            "COM010",

        application_id:
            "APP008",

        type:
            "interview_preparation",

        description:
            "Prepare for PixelForge interview.",

        due_date:
            "2026-09-03",

        channel:
            "Personal",

        priority:
            "High",

        status:
            "completed",

        reason:
            "Interview preparation was completed before the 4 September interview."
    }

];



// =====================================================
// DATA LOADED
// =====================================================

console.log(
    "Career dashboard fake database loaded successfully."
);

console.log(
    "Companies:",
    companies.length
);

console.log(
    "Contacts:",
    contacts.length
);

console.log(
    "Applications:",
    applications.length
);

console.log(
    "Activities:",
    activities.length
);

console.log(
    "Actions:",
    actions.length
);
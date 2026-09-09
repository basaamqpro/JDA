// =====================================================
// CAREER DASHBOARD STORAGE
// Stage 4C
// =====================================================
//
// datajs.js provides the default / seed arrays:
//
// companies
// contacts
// applications
// activities
// actions
//
// This file loads saved data into those arrays
// and saves changes back to localStorage.
//
// =====================================================


const CAREER_STORAGE_KEY =
    "career_dashboard_database_v1";



// =====================================================
// REPLACE ARRAY CONTENT
// =====================================================
//
// Because the arrays in datajs.js are declared
// using const, we do NOT replace the array itself.
//
// Instead:
//
// companies = savedCompanies
//
// would fail.
//
// So we modify the contents:
//
// companies.splice(...)
//
// =====================================================

function replaceArrayContents(
    targetArray,
    newData
) {

    targetArray.splice(
        0,
        targetArray.length,
        ...newData
    );

}



// =====================================================
// CREATE DATABASE SNAPSHOT
// =====================================================

function createCareerDataSnapshot() {

    return {

        version: 1,

        saved_at:
            new Date().toISOString(),

        companies:
            companies,

        contacts:
            contacts,

        applications:
            applications,

        activities:
            activities,

        actions:
            actions

    };

}



// =====================================================
// SAVE DATABASE
// =====================================================

function saveCareerData() {

    try {

        const database =
            createCareerDataSnapshot();


        localStorage.setItem(
            CAREER_STORAGE_KEY,
            JSON.stringify(database)
        );


        console.log(
            "Career database saved.",
            database.saved_at
        );


        return true;

    }

    catch (error) {

        console.error(
            "Unable to save career database:",
            error
        );


        return false;

    }

}



// =====================================================
// LOAD DATABASE
// =====================================================

function loadCareerData() {

    try {

        const storedData =
            localStorage.getItem(
                CAREER_STORAGE_KEY
            );


        // -------------------------------------------------
        // FIRST EVER LOAD
        //
        // Nothing has been stored yet.
        // Use datajs.js as the starting database.
        // -------------------------------------------------

        if (!storedData) {

            console.log(
                "No saved career database found."
            );


            console.log(
                "Using datajs.js as seed data."
            );


            saveCareerData();


            return {
                loaded: true,
                source: "seed"
            };

        }



        // -------------------------------------------------
        // PARSE SAVED DATABASE
        // -------------------------------------------------

        const database =
            JSON.parse(
                storedData
            );



        // -------------------------------------------------
        // BASIC VALIDATION
        // -------------------------------------------------

        if (
            !database
            ||
            !Array.isArray(
                database.companies
            )
            ||
            !Array.isArray(
                database.contacts
            )
            ||
            !Array.isArray(
                database.applications
            )
            ||
            !Array.isArray(
                database.activities
            )
            ||
            !Array.isArray(
                database.actions
            )
        ) {

            throw new Error(
                "Saved career database has an invalid structure."
            );

        }



        // -------------------------------------------------
        // LOAD SAVED DATA INTO EXISTING ARRAYS
        // -------------------------------------------------

        replaceArrayContents(
            companies,
            database.companies
        );


        replaceArrayContents(
            contacts,
            database.contacts
        );


        replaceArrayContents(
            applications,
            database.applications
        );


        replaceArrayContents(
            activities,
            database.activities
        );


        replaceArrayContents(
            actions,
            database.actions
        );



        console.log(
            "Career database loaded from localStorage."
        );


        console.log(
            "Last saved:",
            database.saved_at
        );


        console.log(
            "Companies:",
            companies.length
        );


        console.log(
            "Applications:",
            applications.length
        );


        console.log(
            "Contacts:",
            contacts.length
        );


        console.log(
            "Activities:",
            activities.length
        );


        console.log(
            "Actions:",
            actions.length
        );


        return {
            loaded: true,
            source: "localStorage"
        };

    }

    catch (error) {

        console.error(
            "Unable to load saved career database:",
            error
        );


        console.warn(
            "Using the data from datajs.js instead."
        );


        return {
            loaded: false,
            source: "seed",
            error: error
        };

    }

}



// =====================================================
// RESET DATABASE
// =====================================================
//
// Useful during development.
//
// This deletes the localStorage database.
// Reloading the page will then copy datajs.js
// into localStorage again.
//
// =====================================================

function resetCareerData() {

    const confirmed =
        confirm(
            "Reset the career database?\n\n"
            +
            "All saved changes will be deleted and "
            +
            "the original datajs.js seed data will return."
        );


    if (!confirmed) {
        return;
    }


    localStorage.removeItem(
        CAREER_STORAGE_KEY
    );


    location.reload();

}



// =====================================================
// CLEAR DATABASE COMPLETELY
// =====================================================
//
// Different from reset.
//
// This creates a completely empty database.
//
// =====================================================

function clearCareerData() {

    const confirmed =
        confirm(
            "Delete ALL companies, applications, contacts, "
            +
            "activities and actions?\n\n"
            +
            "This cannot be undone unless you reset to seed data."
        );


    if (!confirmed) {
        return;
    }


    companies.splice(
        0,
        companies.length
    );


    contacts.splice(
        0,
        contacts.length
    );


    applications.splice(
        0,
        applications.length
    );


    activities.splice(
        0,
        activities.length
    );


    actions.splice(
        0,
        actions.length
    );


    saveCareerData();


    location.reload();

}



// =====================================================
// AUTOMATIC LOAD
// =====================================================
//
// Because storage.js is loaded immediately after
// datajs.js, the seed arrays already exist.
//
// We now replace them with saved data if available.
//
// =====================================================

loadCareerData();
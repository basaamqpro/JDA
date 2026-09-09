// =====================================================
// CAREER TRACKER FIREBASE DATA LAYER
// Stage 5A
// =====================================================
//
// Uses the same Firebase project as your other app.
//
// Current architecture:
//
// Firestore
//
// career_tracker
// └── main
//     ├── companies
//     ├── applications
//     ├── contacts
//     ├── activities
//     └── actions
//
// Each item uses its existing ID as the
// Firestore document ID:
//
// COM001
// APP001
// CON001
// ACT001
// ACTION001
//
// =====================================================


// =====================================================
// READY PROMISE
// =====================================================
//
// index.html and manage.html can wait for this.
//
// Because this file dynamically imports Firebase,
// it can still be included using:
//
// <script src="firedata.js"></script>
//
// =====================================================

window.fireDataReady = (

    async function () {


        // =================================================
        // IMPORT FIREBASE
        // =================================================

        const {
            initializeApp,
            getApps,
            getApp
        } =
        await import(
            "https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js"
        );


        const {
            getFirestore,
            collection,
            doc,
            getDocs,
            setDoc,
            deleteDoc
        } =
        await import(
            "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js"
        );



        // =================================================
        // FIREBASE CONFIG
        // =================================================

        const firebaseConfig = {

            apiKey:
                "AIzaSyDVh4UFpUIGLIDllXgB4V03PPHncg6llIA",

            authDomain:
                "two-todolist-project.firebaseapp.com",

            projectId:
                "two-todolist-project",

            storageBucket:
                "two-todolist-project.firebasestorage.app",

            messagingSenderId:
                "981585696379",

            appId:
                "1:981585696379:web:fcd35ed7176c86c64ef4de"

        };



        // =================================================
        // INITIALISE FIREBASE
        // =================================================

        const app =

            getApps().length > 0
                ?
                getApp()
                :
                initializeApp(
                    firebaseConfig
                );


        const database =
            getFirestore(app);



        // =================================================
        // COLLECTION INFORMATION
        // =================================================

        const collectionDefinitions = {

            companies: {

                name:
                    "companies",

                idField:
                    "company_id",

                getArray:
                    () => companies

            },


            applications: {

                name:
                    "applications",

                idField:
                    "application_id",

                getArray:
                    () => applications

            },


            contacts: {

                name:
                    "contacts",

                idField:
                    "contact_id",

                getArray:
                    () => contacts

            },


            activities: {

                name:
                    "activities",

                idField:
                    "activity_id",

                getArray:
                    () => activities

            },


            actions: {

                name:
                    "actions",

                idField:
                    "action_id",

                getArray:
                    () => actions

            }

        };



        // =================================================
        // FIRESTORE COLLECTION REFERENCE
        // =================================================

        function getCareerCollection(
            collectionName
        ) {

            return collection(
                database,

                "career_tracker",
                "main",
                collectionName
            );

        }



        // =================================================
        // FIRESTORE DOCUMENT REFERENCE
        // =================================================

        function getCareerDocument(
            collectionName,
            documentId
        ) {

            return doc(
                database,

                "career_tracker",
                "main",
                collectionName,
                documentId
            );

        }



        // =================================================
        // CLEAN OBJECT
        // =================================================
        //
        // Firestore does not like undefined values.
        //
        // JSON conversion removes undefined values while
        // keeping the simple data types used by this app.
        //
        // =================================================

        function cleanRecord(record) {

            return JSON.parse(
                JSON.stringify(record)
            );

        }



        // =================================================
        // REPLACE ARRAY CONTENT
        // =================================================

        function replaceArray(
            targetArray,
            newValues
        ) {

            targetArray.splice(
                0,
                targetArray.length,
                ...newValues
            );

        }



        // =================================================
        // LOAD ONE COLLECTION
        // =================================================

        async function loadCollection(
            definition
        ) {

            const snapshot =
                await getDocs(
                    getCareerCollection(
                        definition.name
                    )
                );


            const records = [];


            snapshot.forEach(
                documentSnapshot => {

                    records.push(
                        documentSnapshot.data()
                    );

                }
            );


            return records;

        }



        // =================================================
        // CHECK WHETHER FIREBASE HAS DATA
        // =================================================

        async function firebaseCareerDataExists() {

            const companySnapshot =
                await getDocs(
                    getCareerCollection(
                        "companies"
                    )
                );


            return (
                !companySnapshot.empty
            );

        }



        // =================================================
        // SAVE ONE RECORD
        // =================================================

        async function saveRecord(
            collectionKey,
            record
        ) {

            const definition =
                collectionDefinitions[
                    collectionKey
                ];


            if (!definition) {

                throw new Error(
                    "Unknown career collection: "
                    +
                    collectionKey
                );

            }


            const documentId =
                record[
                    definition.idField
                ];


            if (!documentId) {

                throw new Error(
                    "Record is missing "
                    +
                    definition.idField
                );

            }


            const cleaned =
                cleanRecord(record);


            await setDoc(

                getCareerDocument(
                    definition.name,
                    documentId
                ),

                cleaned

            );


            console.log(
                "Firebase saved:",
                collectionKey,
                documentId
            );


            return cleaned;

        }



        // =================================================
        // DELETE ONE RECORD
        // =================================================

        async function deleteRecord(
            collectionKey,
            documentId
        ) {

            const definition =
                collectionDefinitions[
                    collectionKey
                ];


            if (!definition) {

                throw new Error(
                    "Unknown career collection: "
                    +
                    collectionKey
                );

            }


            await deleteDoc(

                getCareerDocument(
                    definition.name,
                    documentId
                )

            );


            console.log(
                "Firebase deleted:",
                collectionKey,
                documentId
            );

        }



        // =================================================
        // SAVE AN ENTIRE COLLECTION
        // =================================================

        async function saveWholeCollection(
            collectionKey
        ) {

            const definition =
                collectionDefinitions[
                    collectionKey
                ];


            const localArray =
                definition.getArray();


            const remoteSnapshot =
                await getDocs(
                    getCareerCollection(
                        definition.name
                    )
                );


            const localIds =
                new Set(
                    localArray.map(
                        record =>
                            record[
                                definition.idField
                            ]
                    )
                );



            // ---------------------------------------------
            // SAVE / UPDATE LOCAL RECORDS
            // ---------------------------------------------

            const savePromises =
                localArray.map(
                    record =>
                        saveRecord(
                            collectionKey,
                            record
                        )
                );


            await Promise.all(
                savePromises
            );



            // ---------------------------------------------
            // DELETE FIREBASE RECORDS
            // THAT NO LONGER EXIST LOCALLY
            // ---------------------------------------------

            const deletePromises = [];


            remoteSnapshot.forEach(
                remoteDocument => {

                    if (
                        !localIds.has(
                            remoteDocument.id
                        )
                    ) {

                        deletePromises.push(

                            deleteDoc(

                                getCareerDocument(
                                    definition.name,
                                    remoteDocument.id
                                )

                            )

                        );

                    }

                }
            );


            await Promise.all(
                deletePromises
            );

        }



        // =================================================
        // SAVE ENTIRE CAREER DATABASE
        // =================================================
        //
        // This is deliberately simple for Stage 5A.
        //
        // Later we can optimise it so only the changed
        // record gets written.
        //
        // =================================================

        async function saveAllCareerDataToFirebase() {

            console.log(
                "Saving career database to Firebase..."
            );


            await saveWholeCollection(
                "companies"
            );


            await saveWholeCollection(
                "applications"
            );


            await saveWholeCollection(
                "contacts"
            );


            await saveWholeCollection(
                "activities"
            );


            await saveWholeCollection(
                "actions"
            );


            console.log(
                "Career database saved to Firebase."
            );


            return true;

        }



        // =================================================
        // LOAD ENTIRE DATABASE FROM FIREBASE
        // =================================================

        async function loadCareerDataFromFirebase() {

            console.log(
                "Loading career data from Firebase..."
            );


            const [

                firebaseCompanies,

                firebaseApplications,

                firebaseContacts,

                firebaseActivities,

                firebaseActions

            ] =

            await Promise.all([

                loadCollection(
                    collectionDefinitions
                        .companies
                ),

                loadCollection(
                    collectionDefinitions
                        .applications
                ),

                loadCollection(
                    collectionDefinitions
                        .contacts
                ),

                loadCollection(
                    collectionDefinitions
                        .activities
                ),

                loadCollection(
                    collectionDefinitions
                        .actions
                )

            ]);



            replaceArray(
                companies,
                firebaseCompanies
            );


            replaceArray(
                applications,
                firebaseApplications
            );


            replaceArray(
                contacts,
                firebaseContacts
            );


            replaceArray(
                activities,
                firebaseActivities
            );


            replaceArray(
                actions,
                firebaseActions
            );



            console.log(
                "Firebase career data loaded."
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


            // ---------------------------------------------
            // Keep localStorage cache updated too
            // ---------------------------------------------

            if (
                typeof saveCareerData ===
                "function"
            ) {

                saveCareerData();

            }


            return true;

        }



        // =================================================
        // FIRST FIREBASE START
        // =================================================
        //
        // If Firebase has no career data yet:
        //
        // datajs.js / localStorage
        //          ↓
        //      Firebase
        //
        // If Firebase already contains career data:
        //
        // Firebase
        //    ↓
        // JavaScript arrays
        //
        // =================================================

        async function initialiseCareerFirebase() {

            const dataExists =
                await firebaseCareerDataExists();


            if (!dataExists) {

                console.log(
                    "Firebase career database is empty."
                );


                console.log(
                    "Uploading current career data as the initial database."
                );


                await saveAllCareerDataToFirebase();


                return {
                    source:
                        "local-seed"
                };

            }


            await loadCareerDataFromFirebase();


            return {
                source:
                    "firebase"
            };

        }



        // =================================================
        // EXPOSE FIREBASE FUNCTIONS GLOBALLY
        // =================================================

        window.fireCareer = {

            database:
                database,


            saveRecord:
                saveRecord,


            deleteRecord:
                deleteRecord,


            saveAll:
                saveAllCareerDataToFirebase,


            loadAll:
                loadCareerDataFromFirebase,


            initialise:
                initialiseCareerFirebase

        };



        // =================================================
        // INITIALISE
        // =================================================

        const result =
            await initialiseCareerFirebase();


        console.log(
            "Career Firebase ready.",
            result
        );


        return result;

    }

)().catch(

    error => {

        console.error(
            "Career Firebase failed to initialise:",
            error
        );


        return {
            source:
                "error",

            error:
                error
        };

    }

);
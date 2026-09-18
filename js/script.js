console.log("CBD OPS JavaScript loaded");


// =====================================================
// PROPERTY DATA
// =====================================================

const properties = {

    "modern-home": {

        title: "Modern Family Home",

        status: "For Sale",

        location: "Durban",

        type: "House",

        price: "R2,850,000",

        bedrooms: "4",

        bathrooms: "3",

        garages: "2",

        description:
            "A beautiful modern family home in Durban with spacious living areas, stylish finishes, and a comfortable outdoor space.",

        mainImage: "Images/Front hous 2.jpg",

        gallery: [

            "Images/Front hous 2.jpg",

            "Images/Kitchen.jpg",

            "Images/EXTERIOR.jpg",

            "Images/Backyard 2.jpeg"

        ]

    },


    // =================================================
    // COASTAL HOME
    // =================================================

    "coastal-home": {
    title: "Contemporary Coastal Home",
    status: "For Sale",
    location: "Ballito",
    type: "House",
    price: "R1,450,000",
    bedrooms: "3",
    bathrooms: "2",
    garages: "2",
    description:
        "Enjoy coastal living in this beautiful home located in Ballito. Perfect for families looking for comfort and style.",
    mainImage: "Images/BACKYARD 2.jpeg",
    gallery: [
        "Images/BACKYARD 2.jpeg",
        "Images/MAIN ENTRANCE.jpg",
        "Images/EXTERIOR.jpg",
        "Images/house 1.jpg"
    ]
},
    // =================================================
    // LUXURY FOUR BEDROOM HOME
    // =================================================

    "luxury-home": {

        title: "Luxury Four Bedroom Home",

        status: "For Rent",

        location: "Umhlanga",

        type: "House",

        price: "R18,500/month",

        bedrooms: "4",

        bathrooms: "3",

        garages: "2",

        description:
            "A luxury four-bedroom rental home in Umhlanga featuring spacious interiors and modern finishes.",

        mainImage: "Images/int 4 bedroom.jpg",

        gallery: [

            "Images/int 4 bedroom.jpg",

            "Images/int 3.jpg",

            "Images/int 4.jpg",

            "Images/EXTERIOR.jpg"

        ]

    },


    // =================================================
    // CITY APARTMENT
    // =================================================

    "city-apartment": {

        title: "Modern City Apartment",

        status: "For Rent",

        location: "Durban",

        type: "Apartment",

        price: "R11,500/month",

        bedrooms: "2",

        bathrooms: "2",

        garages: "1",

        description:
            "A modern two-bedroom apartment in Durban, ideal for professionals and small families.",

        mainImage: "Images/int2.jpg",

        gallery: [

            "Images/int2.jpg",

            "Images/flat pic 2.jpg",

            "Images/flat pic 3.jpg",

            "Images/flat.jpg"

        ]

    }

};


// =====================================================
// PAGE INITIALISATION
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("CBD OPS page loaded");

    setupMobileMenu();

    loadPropertyDetails();

    setupPropertyFilters();

    setupHomeSearch();

    setupContactForm();

    applyHomeSearchParameters();

});


// =====================================================
// MOBILE NAVIGATION
// =====================================================

function setupMobileMenu() {

    const menuToggle =
        document.querySelector(".menu-toggle");

    const navLinks =
        document.querySelector(".nav-links");


    if (!menuToggle || !navLinks) {
        return;
    }


    menuToggle.addEventListener(
        "click",
        function () {

            const isOpen =
                navLinks.classList.toggle("show");


            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        }
    );


    const links =
        navLinks.querySelectorAll("a");


    links.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                navLinks.classList.remove("show");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });


    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                navLinks.classList.remove("show");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );

}


// =====================================================
// LOAD PROPERTY DETAILS
// =====================================================

function loadPropertyDetails() {

    const titleElement =
        document.getElementById("propertyTitle");


    // Only run on property-details.html
    if (!titleElement) {
        return;
    }


    // -------------------------------------------------
    // GET PROPERTY ID FROM URL
    // -------------------------------------------------

    const urlParams =
        new URLSearchParams(
            window.location.search
        );


    const propertyId =
    urlParams.get("id") || "coastal-home";


    console.log(
        "Property ID from URL:",
        propertyId
    );


    // -------------------------------------------------
    // FIND PROPERTY
    // -------------------------------------------------

    const property =
        properties[propertyId];


    if (!property) {

        console.error(
            "PROPERTY NOT FOUND:",
            propertyId
        );


        titleElement.textContent =
            "Property Not Found";


        const descriptionElement =
            document.getElementById("description");


        if (descriptionElement) {

            descriptionElement.textContent =
                "Sorry, the property you are looking for could not be found.";

        }


        return;
    }


    console.log(
        "Property selected:",
        property.title
    );


    // -------------------------------------------------
    // GET HTML ELEMENTS
    // -------------------------------------------------

    const statusElement =
        document.getElementById(
            "propertyStatus"
        );


    const locationElement =
        document.getElementById(
            "propertyLocation"
        );


    const priceElement =
        document.getElementById(
            "propertyPrice"
        );


    const bedroomsElement =
        document.getElementById(
            "bedrooms"
        );


    const bathroomsElement =
        document.getElementById(
            "bathrooms"
        );


    const garagesElement =
        document.getElementById(
            "garages"
        );


    const descriptionElement =
        document.getElementById(
            "description"
        );


    const mainImage =
        document.getElementById(
            "mainImage"
        );


    // -------------------------------------------------
    // PROPERTY INFORMATION
    // -------------------------------------------------

    titleElement.textContent =
        property.title;


    if (statusElement) {

        statusElement.textContent =
            property.status;

    }


    if (locationElement) {

        locationElement.textContent =
            property.location;

    }


    if (priceElement) {

        priceElement.textContent =
            property.price;

    }


    if (bedroomsElement) {

        bedroomsElement.textContent =
            property.bedrooms;

    }


    if (bathroomsElement) {

        bathroomsElement.textContent =
            property.bathrooms;

    }


    if (garagesElement) {

        garagesElement.textContent =
            property.garages;

    }


    if (descriptionElement) {

        descriptionElement.textContent =
            property.description;

    }


    // -------------------------------------------------
    // MAIN IMAGE
    // -------------------------------------------------

    if (mainImage) {

        mainImage.src =
            property.mainImage;

        mainImage.alt =
            property.title;

    }


    // -------------------------------------------------
    // GALLERY IMAGES
    // -------------------------------------------------

    if (property.gallery) {

        property.gallery.forEach(
            function (image, index) {

                const galleryImage =
                    document.getElementById(
                        "gallery" + (index + 1)
                    );


                if (galleryImage) {

                    galleryImage.src =
                        image;

                    galleryImage.alt =
                        property.title +
                        " image " +
                        (index + 1);

                }

            }
        );

    }


    console.log(
        "PROPERTY LOADED SUCCESSFULLY:",
        property.title
    );

}


// =====================================================
// PROPERTY FILTERING
// =====================================================

function setupPropertyFilters() {

    const filterForm =
        document.getElementById(
            "propertyFilters"
        );


    if (!filterForm) {
        return;
    }


    const locationFilter =
        document.getElementById(
            "filterLocation"
        );


    const typeFilter =
        document.getElementById(
            "filterType"
        );


    const bedroomsFilter =
        document.getElementById(
            "filterBedrooms"
        );


    const statusFilter =
        document.getElementById(
            "filterStatus"
        );


    const resultCount =
        document.getElementById(
            "resultCount"
        );


    const propertyCards =
        document.querySelectorAll(
            ".searchable"
        );


    function filterProperties() {

        const selectedLocation =
            locationFilter
                ? locationFilter.value.toLowerCase()
                : "";


        const selectedType =
            typeFilter
                ? typeFilter.value.toLowerCase()
                : "";


        const selectedBedrooms =
            bedroomsFilter
                ? bedroomsFilter.value
                : "";


        const selectedStatus =
            statusFilter
                ? statusFilter.value.toLowerCase()
                : "";


        let visibleCount = 0;


        propertyCards.forEach(
            function (card) {

                const cardLocation =
                    (
                        card.dataset.location ||
                        ""
                    ).toLowerCase();


                const cardType =
                    (
                        card.dataset.type ||
                        ""
                    ).toLowerCase();


                const cardBedrooms =
                    card.dataset.bedrooms ||
                    "";


                const cardStatus =
                    (
                        card.dataset.status ||
                        ""
                    ).toLowerCase();


                const locationMatch =
                    !selectedLocation ||
                    cardLocation === selectedLocation;


                const typeMatch =
                    !selectedType ||
                    cardType === selectedType;


                const bedroomMatch =
                    !selectedBedrooms ||
                    cardBedrooms === selectedBedrooms;


                const statusMatch =
                    !selectedStatus ||
                    cardStatus === selectedStatus;


                const matches =
                    locationMatch &&
                    typeMatch &&
                    bedroomMatch &&
                    statusMatch;


                if (matches) {

                    card.style.display = "";

                    visibleCount++;

                } else {

                    card.style.display =
                        "none";

                }

            }
        );


        if (resultCount) {

            resultCount.textContent =
                visibleCount +
                (
                    visibleCount === 1
                        ? " property found"
                        : " properties found"
                );

        }


        updatePropertySections();

    }


    filterForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            filterProperties();

        }
    );


    const filterInputs =
        filterForm.querySelectorAll(
            "select"
        );


    filterInputs.forEach(
        function (input) {

            input.addEventListener(
                "change",
                filterProperties
            );

        }
    );


    filterProperties();

}


// =====================================================
// SHOW / HIDE SALE AND RENT SECTIONS
// =====================================================

function updatePropertySections() {

    const saleSection =
        document.getElementById("sale");


    const rentSection =
        document.getElementById("rent");


    if (saleSection) {

        const saleCards =
            saleSection.querySelectorAll(
                ".searchable"
            );


        let visibleSaleCards = 0;


        saleCards.forEach(function (card) {

            if (
                card.style.display !== "none"
            ) {

                visibleSaleCards++;

            }

        });


        saleSection.style.display =
            visibleSaleCards > 0
                ? ""
                : "none";

    }


    if (rentSection) {

        const rentCards =
            rentSection.querySelectorAll(
                ".searchable"
            );


        let visibleRentCards = 0;


        rentCards.forEach(function (card) {

            if (
                card.style.display !== "none"
            ) {

                visibleRentCards++;

            }

        });


        rentSection.style.display =
            visibleRentCards > 0
                ? ""
                : "none";

    }

}


// =====================================================
// HOME PAGE SEARCH
// =====================================================

function setupHomeSearch() {

    const searchForm =
        document.getElementById(
            "homeSearch"
        );


    if (!searchForm) {
        return;
    }


    searchForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const location =
                document.getElementById(
                    "homeLocation"
                )?.value || "";


            const type =
                document.getElementById(
                    "homeType"
                )?.value || "";


            const bedrooms =
                document.getElementById(
                    "homeBedrooms"
                )?.value || "";


            const params =
                new URLSearchParams();


            if (location) {

                params.set(
                    "location",
                    location
                );

            }


            if (type) {

                params.set(
                    "type",
                    type
                );

            }


            if (bedrooms) {

                params.set(
                    "bedrooms",
                    bedrooms
                );

            }


            const queryString =
                params.toString();


            window.location.href =
                "properties.html" +
                (
                    queryString
                        ? "?" + queryString
                        : ""
                );

        }
    );

}


// =====================================================
// APPLY HOME SEARCH PARAMETERS
// =====================================================

function applyHomeSearchParameters() {

    const filterForm =
        document.getElementById(
            "propertyFilters"
        );


    if (!filterForm) {
        return;
    }


    const params =
        new URLSearchParams(
            window.location.search
        );


    const location =
        params.get("location");


    const type =
        params.get("type");


    const bedrooms =
        params.get("bedrooms");


    const locationFilter =
        document.getElementById(
            "filterLocation"
        );


    const typeFilter =
        document.getElementById(
            "filterType"
        );


    const bedroomsFilter =
        document.getElementById(
            "filterBedrooms"
        );


    if (location && locationFilter) {

        locationFilter.value =
            location;

    }


    if (type && typeFilter) {

        typeFilter.value =
            type;

    }


    if (bedrooms && bedroomsFilter) {

        bedroomsFilter.value =
            bedrooms;

    }

}


// =====================================================
// CONTACT FORM
// =====================================================

function setupContactForm() {

    const form =
        document.getElementById(
            "enquiry"
        );


    if (!form) {
        return;
    }


    const formMessage =
        document.getElementById(
            "formMessage"
        );


    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "name"
                )?.value.trim();


            const email =
                document.getElementById(
                    "email"
                )?.value.trim();


            const phone =
                document.getElementById(
                    "phone"
                )?.value.trim();


            const enquiryType =
                document.getElementById(
                    "enquiryType"
                )?.value;


            const message =
                document.getElementById(
                    "message"
                )?.value.trim();


            // =================================================
            // VALIDATION
            // =================================================

            if (
                !name ||
                !email ||
                !phone ||
                !enquiryType ||
                !message
            ) {

                showFormMessage(
                    formMessage,
                    "Please complete all required fields.",
                    "error"
                );

                return;
            }


            // =================================================
            // EMAIL VALIDATION
            // =================================================

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (
                !emailPattern.test(email)
            ) {

                showFormMessage(
                    formMessage,
                    "Please enter a valid email address.",
                    "error"
                );

                return;
            }


            // =================================================
            // SUCCESS
            // =================================================

            showFormMessage(
                formMessage,
                "Thank you! Your enquiry has been submitted successfully.",
                "success"
            );


            form.reset();

        }
    );

}


// =====================================================
// FORM MESSAGE
// =====================================================

function showFormMessage(
    element,
    message,
    type
) {

    if (!element) {
        return;
    }


    element.textContent =
        message;


    element.classList.remove(
        "success",
        "error"
    );


    element.classList.add(
        type
    );

}
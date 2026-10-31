/* =====================================================
   CBD OPS - MAIN JAVASCRIPT
   
===================================================== */


/* =====================================================
   PROPERTY DATA
===================================================== */

const properties = {

    "modern-home": {
        title: "Modern Family Home",
        status: "For Sale",
        location: "Durban, KwaZulu-Natal",
        type: "House",
        price: "R2,850,000",

        bedrooms: 4,
        bathrooms: 3,
        garages: 2,

        description:
            "This modern family home in Durban offers spacious living areas, comfortable bedrooms and quality finishes. The property is designed for convenient family living and provides a welcoming combination of indoor and outdoor spaces.",

        image: "Images/Front hous 2.jpg",

        gallery: [
            "Images/Front hous 2.jpg",
            "Images/Kitchen.jpg",
            "Images/view property 2.jpg"
        ]
    },


    "coastal-home": {
        title: "Contemporary Coastal Home",
        status: "For Sale",
        location: "Ballito, KwaZulu-Natal",
        type: "House",
        price: "R1,450,000",

        bedrooms: 3,
        bathrooms: 2,
        garages: 2,

        description:
            "A contemporary coastal home in Ballito offering comfortable living spaces, modern finishes and a relaxed lifestyle close to the coast.",

        image: "Images/BACKYARD 2.jpeg",

        gallery: [
            "Images/BACKYARD 2.jpeg",
            "Images/EXTERIOR.jpg",
            "Images/int 1.jpg"
        ]
    },


    "luxury-home": {
        title: "Luxury Four Bedroom",
        status: "For Rent",
        location: "Umhlanga, KwaZulu-Natal",
        type: "House",
        price: "R18,500/month",

        bedrooms: 4,
        bathrooms: 3,
        garages: 2,

        description:
            "This luxury four-bedroom home in Umhlanga provides spacious accommodation, modern interiors and comfortable living areas suitable for families looking for a premium rental property.",

        image: "Images/int 4 bedroom.jpg",

        gallery: [
            "Images/int 4 bedroom.jpg",
            "Images/flat.jpg",
            "Images/flat pic 3.jpg"
        ]
    },


    "city-apartment": {
        title: "Modern City Apartment",
        status: "For Rent",
        location: "Durban, KwaZulu-Natal",
        type: "Apartment",
        price: "R11,500/month",

        bedrooms: 2,
        bathrooms: 2,
        garages: 1,

        description:
            "A modern city apartment in Durban offering comfortable accommodation, practical living spaces and convenient access to the surrounding city area.",

        image: "Images/int2.jpg",

        gallery: [
            "Images/int2.jpg",
            "Images/int 3.jpg",
            "Images/int 4.jpg"
        ]
    }

};


/* =====================================================
   DOM READY
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    setupMobileMenu();

    loadPropertyDetails();

    setupHomeSearch();

    applyHomeSearchParameters();

    setupPropertyFilters();

    setupContactForm();

    setupEnquiryForm();

});


/* =====================================================
   MOBILE NAVIGATION
===================================================== */

function setupMobileMenu() {

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (!menuToggle || !navLinks) {
        return;
    }

    menuToggle.addEventListener("click", function () {

        const isOpen = navLinks.classList.toggle("show");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });


    /* Close menu when a link is selected */

    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("show");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });


    /* Close menu with Escape */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            navLinks.classList.remove("show");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });

}


/* =====================================================
   PROPERTY DETAILS
===================================================== */

function loadPropertyDetails() {

    const titleElement =
        document.getElementById("propertyTitle");

    if (!titleElement) {
        return;
    }


    const params =
        new URLSearchParams(
            window.location.search
        );


    const propertyId =
        params.get("id") || "modern-home";


    const property =
        properties[propertyId];


    /* =========================================
       PROPERTY NOT FOUND
    ========================================= */

    if (!property) {

        titleElement.textContent =
            "Property Not Found";


        const statusElement =
            document.getElementById("propertyStatus");

        const locationElement =
            document.getElementById("propertyLocation");

        const priceElement =
            document.getElementById("propertyPrice");

        const bedroomsElement =
            document.getElementById("bedrooms");

        const bathroomsElement =
            document.getElementById("bathrooms");

        const garagesElement =
            document.getElementById("garages");

        const descriptionElement =
            document.getElementById("description");


        if (statusElement) {
            statusElement.textContent = "";
        }

        if (locationElement) {
            locationElement.textContent = "";
        }

        if (priceElement) {
            priceElement.textContent = "";
        }

        if (bedroomsElement) {
            bedroomsElement.textContent = "-";
        }

        if (bathroomsElement) {
            bathroomsElement.textContent = "-";
        }

        if (garagesElement) {
            garagesElement.textContent = "-";
        }

        if (descriptionElement) {

            descriptionElement.textContent =
                "The property you are looking for could not be found.";

        }

        return;
    }


    /* =========================================
       BASIC INFORMATION
    ========================================= */

    titleElement.textContent =
        property.title;


    const statusElement =
        document.getElementById("propertyStatus");

    if (statusElement) {

        statusElement.textContent =
            property.status;

    }


    const locationElement =
        document.getElementById("propertyLocation");

    if (locationElement) {

        locationElement.textContent =
            property.location;

    }


    const priceElement =
        document.getElementById("propertyPrice");

    if (priceElement) {

        priceElement.textContent =
            property.price;

    }


    /* =========================================
       PROPERTY FEATURES
    ========================================= */

    const bedroomsElement =
        document.getElementById("bedrooms");

    if (bedroomsElement) {

        bedroomsElement.textContent =
            property.bedrooms;

    }


    const bathroomsElement =
        document.getElementById("bathrooms");

    if (bathroomsElement) {

        bathroomsElement.textContent =
            property.bathrooms;

    }


    const garagesElement =
        document.getElementById("garages");

    if (garagesElement) {

        garagesElement.textContent =
            property.garages;

    }


    /* =========================================
       DESCRIPTION
    ========================================= */

    const descriptionElement =
        document.getElementById("description");

    if (descriptionElement) {

        descriptionElement.textContent =
            property.description;

    }


    /* =========================================
       MAIN IMAGE
    ========================================= */

    const mainImage =
        document.getElementById("mainImage");

    if (mainImage) {

        mainImage.src =
            property.image;

        mainImage.alt =
            `${property.title} in ${property.location}`;

    }


    /* =========================================
       GALLERY
    ========================================= */

    property.gallery.forEach(
        function (image, index) {

            const galleryImage =
                document.getElementById(
                    `gallery${index + 1}`
                );


            if (!galleryImage) {
                return;
            }


            galleryImage.src =
                image;


            galleryImage.alt =
                `${property.title} gallery image ${index + 1}`;


            galleryImage.addEventListener(
                "click",
                function () {

                    if (mainImage) {

                        mainImage.src =
                            image;

                        mainImage.alt =
                            `${property.title} gallery image ${index + 1}`;

                    }

                }
            );

        }
    );


    /* =========================================
       ENQUIRY BUTTON
    ========================================= */

    const enquiryButton =
        document.getElementById(
            "enquirePropertyButton"
        );


    if (enquiryButton) {

        enquiryButton.href =
            `enquiry.html?id=${encodeURIComponent(propertyId)}`;

    }


    /* =========================================
       OTHER ENQUIRY LINKS
    ========================================= */

    document.querySelectorAll(
        ".property-enquiry-link a, .enquire-property"
    ).forEach(
        function (link) {

            link.href =
                `enquiry.html?id=${encodeURIComponent(propertyId)}`;

        }
    );

}


/* =====================================================
   PROPERTY FILTERS
===================================================== */

function setupPropertyFilters() {

    const filterForm =
        document.getElementById("propertyFilters");

    if (!filterForm) {
        return;
    }


    const locationInput =
        document.getElementById("filterLocation");

    const typeSelect =
        document.getElementById("filterType");

    const bedroomsSelect =
        document.getElementById("filterBedrooms");

    const statusSelect =
        document.getElementById("filterStatus");

    const cards =
        document.querySelectorAll(".searchable");

    const resultCount =
        document.getElementById("resultCount");


    function filterProperties() {

        const location =
            locationInput
                ? locationInput.value.trim().toLowerCase()
                : "";

        const type =
            typeSelect
                ? typeSelect.value.toLowerCase()
                : "";

        const bedrooms =
            bedroomsSelect
                ? bedroomsSelect.value
                : "";

        const status =
            statusSelect
                ? statusSelect.value.toLowerCase()
                : "";


        let visibleCount = 0;


        cards.forEach(function (card) {

            const cardLocation =
                (card.dataset.location || "")
                    .toLowerCase();

            const cardType =
                (card.dataset.type || "")
                    .toLowerCase();

            const cardBedrooms =
                parseInt(
                    card.dataset.bedrooms || "0",
                    10
                );

            const cardStatus =
                (card.dataset.status || "")
                    .toLowerCase();


            const matchesLocation =
                !location ||
                cardLocation.includes(location);


            const matchesType =
                !type ||
                cardType === type;


            const matchesBedrooms =
                !bedrooms ||
                cardBedrooms >= parseInt(
                    bedrooms,
                    10
                );


            const matchesStatus =
                !status ||
                cardStatus === status;


            const matches =
                matchesLocation &&
                matchesType &&
                matchesBedrooms &&
                matchesStatus;


            if (matches) {

                card.classList.remove("hidden");

                visibleCount++;

            } else {

                card.classList.add("hidden");

            }

        });


        if (resultCount) {

            resultCount.textContent =
                `${visibleCount} ${visibleCount === 1 ? "property" : "properties"} found.`;

        }


        updatePropertySections();

        showNoResultsMessage(
            visibleCount === 0
        );

    }


    filterForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            filterProperties();

        }
    );


    [
        locationInput,
        typeSelect,
        bedroomsSelect,
        statusSelect
    ].forEach(function (element) {

        if (!element) {
            return;
        }

        element.addEventListener(
            "change",
            filterProperties
        );

    });


    if (locationInput) {

        locationInput.addEventListener(
            "input",
            filterProperties
        );

    }


    /* Initial filter */

    filterProperties();

}


/* =====================================================
   PROPERTY SECTION VISIBILITY
===================================================== */

function updatePropertySections() {

    const saleSection =
        document.getElementById("sale");

    const rentSection =
        document.getElementById("rent");


    if (saleSection) {

        const saleCards =
            document.querySelectorAll(
                '[data-status="sale"]'
            );

        const visibleSaleCards =
            Array.from(saleCards)
                .some(function (card) {

                    return !card.classList.contains(
                        "hidden"
                    );

                });

        saleSection.style.display =
            visibleSaleCards ? "" : "none";

    }


    if (rentSection) {

        const rentCards =
            document.querySelectorAll(
                '[data-status="rent"]'
            );

        const visibleRentCards =
            Array.from(rentCards)
                .some(function (card) {

                    return !card.classList.contains(
                        "hidden"
                    );

                });

        rentSection.style.display =
            visibleRentCards ? "" : "none";

    }

}


/* =====================================================
   NO RESULTS MESSAGE
===================================================== */

function showNoResultsMessage(show) {

    const existing =
        document.getElementById("noResultsMessage");


    if (!show) {

        if (existing) {
            existing.remove();
        }

        return;

    }


    if (existing) {
        return;
    }


    const filterResults =
        document.querySelector(".filter-results");

    if (!filterResults) {
        return;
    }


    const message =
        document.createElement("div");

    message.id =
        "noResultsMessage";

    message.className =
        "no-results";


    message.innerHTML = `
        <h3>No properties found</h3>
        <p>
            Try changing your search or filter options
            to find available properties.
        </p>
    `;


    filterResults.parentNode.insertBefore(
        message,
        filterResults
    );

}


/* =====================================================
   HOMEPAGE SEARCH
===================================================== */

function setupHomeSearch() {

    const homeSearch =
        document.getElementById("homeSearch");

    if (!homeSearch) {
        return;
    }


    homeSearch.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const location =
                document.getElementById(
                    "homeLocation"
                )?.value.trim();


            const type =
                document.getElementById(
                    "homeType"
                )?.value;


            const bedrooms =
                document.getElementById(
                    "homeBedrooms"
                )?.value;


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


            const query =
                params.toString();


            window.location.href =
                query
                    ? `properties.html?${query}`
                    : "properties.html";

        }
    );

}


/* =====================================================
   APPLY HOMEPAGE SEARCH PARAMETERS
===================================================== */

function applyHomeSearchParameters() {

    if (
        !window.location.pathname.endsWith(
            "properties.html"
        )
    ) {
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


    const locationInput =
        document.getElementById(
            "filterLocation"
        );

    const typeSelect =
        document.getElementById(
            "filterType"
        );

    const bedroomsSelect =
        document.getElementById(
            "filterBedrooms"
        );


    if (locationInput && location) {

        locationInput.value =
            location;

    }


    if (typeSelect && type) {

        typeSelect.value =
            type;

    }


    if (bedroomsSelect && bedrooms) {

        bedroomsSelect.value =
            bedrooms;

    }

}


/* =====================================================
   CONTACT FORM
===================================================== */

function setupContactForm() {

    const form =
        document.getElementById("contactForm");

    if (!form) {
        return;
    }


    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            clearFormErrors(form);


            const name =
                form.querySelector(
                    "#contactName"
                );

            const email =
                form.querySelector(
                    "#contactEmail"
                );

            const phone =
                form.querySelector(
                    "#contactPhone"
                );

            const messageType =
                form.querySelector(
                    "#messageType"
                );

            const message =
                form.querySelector(
                    "#contactMessage"
                );


            let valid = true;


            if (!name || name.value.trim().length < 2) {

                showFieldError(
                    name,
                    "Please enter your full name."
                );

                valid = false;

            }


            if (
                !email ||
                !isValidEmail(email.value.trim())
            ) {

                showFieldError(
                    email,
                    "Please enter a valid email address."
                );

                valid = false;

            }


            if (
                phone &&
                phone.value.trim() &&
                !isValidPhone(phone.value.trim())
            ) {

                showFieldError(
                    phone,
                    "Please enter a valid phone number."
                );

                valid = false;

            }


            if (
                !messageType ||
                !messageType.value
            ) {

                showFieldError(
                    messageType,
                    "Please select a message type."
                );

                valid = false;

            }


            if (
                !message ||
                message.value.trim().length < 10
            ) {

                showFieldError(
                    message,
                    "Please enter a message of at least 10 characters."
                );

                valid = false;

            }


            if (!valid) {

                showFormMessage(
                    form,
                    "Please correct the highlighted fields and try again.",
                    "error"
                );

                return;

            }


            showFormMessage(
                form,
                "Thank you! Your message has been received. CBD OPS will respond as soon as possible.",
                "success"
            );


            form.reset();

        }
    );

}


/* =====================================================
   PROPERTY ENQUIRY FORM
===================================================== */

function setupEnquiryForm() {

    console.log("ENQUIRY FORM FUNCTION STARTED");

    const form =
        document.getElementById("enquiryForm");

    if (!form) {
        return;
    }


    loadEnquiryProperty();


    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            clearFormErrors(form);


            const name =
                form.querySelector(
                    "#enquiryName"
                );

            const email =
                form.querySelector(
                    "#enquiryEmail"
                );

            const phone =
                form.querySelector(
                    "#enquiryPhone"
                );

            const enquiryType =
                form.querySelector(
                    "#enquiryType"
                );

            const property =
                form.querySelector(
                    "#enquiryProperty"
                );

            const message =
                form.querySelector(
                    "#enquiryMessage"
                );


            let valid = true;


            if (
                !name ||
                name.value.trim().length < 2
            ) {

                showFieldError(
                    name,
                    "Please enter your full name."
                );

                valid = false;

            }


            if (
                !email ||
                !isValidEmail(
                    email.value.trim()
                )
            ) {

                showFieldError(
                    email,
                    "Please enter a valid email address."
                );

                valid = false;

            }


            if (
                !phone ||
                !isValidPhone(
                    phone.value.trim()
                )
            ) {

                showFieldError(
                    phone,
                    "Please enter a valid phone number."
                );

                valid = false;

            }


            if (
                !property ||
                !property.value
            ) {

                showFieldError(
                    property,
                    "Please select a property."
                );

                valid = false;

            }


            if (
                !enquiryType ||
                !enquiryType.value
            ) {

                showFieldError(
                    enquiryType,
                    "Please select an enquiry type."
                );

                valid = false;

            }


            if (
                !message ||
                message.value.trim().length < 10
            ) {

                showFieldError(
                    message,
                    "Please enter a message of at least 10 characters."
                );

                valid = false;

            }


            if (!valid) {

                showFormMessage(
                    form,
                    "Please correct the highlighted fields and try again.",
                    "error"
                );

                return;

            }


            showFormMessage(
                form,
                "Thank you! Your property enquiry has been submitted successfully. A CBD OPS representative will contact you soon.",
                "success"
            );


            form.reset();


            /* Restore property selected from URL */

            loadEnquiryProperty();

        }
    );

}


/* =====================================================
   LOAD PROPERTY INTO ENQUIRY FORM
===================================================== */

function loadEnquiryProperty() {

    const propertySelect =
        document.getElementById(
            "enquiryProperty"
        );

    if (!propertySelect) {
        return;
    }


    const params =
        new URLSearchParams(
            window.location.search
        );


    const propertyId =
        params.get("id");


    if (
        propertyId &&
        properties[propertyId]
    ) {

        propertySelect.value =
            propertyId;

    }

}


/* =====================================================
   EMAIL VALIDATION
===================================================== */

function isValidEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        email
    );

}


/* =====================================================
   PHONE VALIDATION
===================================================== */

function isValidPhone(phone) {

    const cleaned =
        phone.replace(
            /[\s\-()+]/g,
            ""
        );

    return /^\d{9,15}$/.test(
        cleaned
    );

}


/* =====================================================
   FIELD ERROR
===================================================== */

function showFieldError(
    field,
    message
) {

    if (!field) {
        return;
    }


    field.classList.add(
        "input-error"
    );

    field.setAttribute(
        "aria-invalid",
        "true"
    );


    let errorElement =
        document.getElementById(
            `${field.id}Error`
        );


    if (!errorElement) {

        errorElement =
            document.createElement(
                "span"
            );

        errorElement.id =
            `${field.id}Error`;

        errorElement.className =
            "field-error";

        errorElement.setAttribute(
            "role",
            "alert"
        );


        field.parentNode.appendChild(
            errorElement
        );

    }


    errorElement.textContent =
        message;


    field.setAttribute(
        "aria-describedby",
        errorElement.id
    );

}


/* =====================================================
   CLEAR FORM ERRORS
===================================================== */

function clearFormErrors(form) {

    form.querySelectorAll(
        ".input-error"
    ).forEach(function (field) {

        field.classList.remove(
            "input-error"
        );

        field.removeAttribute(
            "aria-invalid"
        );

        field.removeAttribute(
            "aria-describedby"
        );

    });


    form.querySelectorAll(
        ".field-error"
    ).forEach(function (error) {

        error.remove();

    });


    const message =
        form.querySelector(
            ".form-message"
        );

    if (message) {

        message.textContent = "";

        message.className =
            "form-message";

    }

}


/* =====================================================
   FORM MESSAGE
===================================================== */

function showFormMessage(
    form,
    message,
    type
) {

    let messageElement =
        form.querySelector(
            ".form-message"
        );


    if (!messageElement) {

        messageElement =
            document.createElement(
                "p"
            );

        messageElement.className =
            "form-message";

        messageElement.setAttribute(
            "role",
            "status"
        );

        form.appendChild(
            messageElement
        );

    }


    messageElement.textContent =
        message;

    messageElement.className =
        `form-message ${type}`;

}


/* =====================================================
   END OF SCRIPT
===================================================== */
/* Snowfall animation */
const snowfall = () => {
    const numberOfSnowflakes = Math.floor(Math.random() * 250) + 250;

    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflakeElement = document.createElement("i");
        snowflakeElement.classList.add("snowflake");
        snowflakeElement.style.left = `${Math.random() * 100}%`;
        snowflakeElement.style.top = `-${Math.random() * 100}%`;
        snowflakeElement.style.opacity = `${Math.random() * 0.9 + 0.1}`;

        snowflakeElement.style.animationDuration = `${Math.random() * 20 + 2}s`;

        document.querySelector("#snow_wrapper").appendChild(snowflakeElement);
    }
};

snowfall();
/* Star twinkling animation */
const twinklingAnimation = () => {
    let typeOfTwinkling = window.innerWidth <= 650 ? "mobile" : "desktop";

    function createTwinkling() {
        for (let i = 0; i < 27; i++) {
            const starElement = document.createElement("i");
            starElement.classList.add("star");
            starElement.classList.add(typeOfTwinkling === "mobile" ?
                "mobile_star" : "desktop_star");
            starElement.style.left = typeOfTwinkling === "mobile" ?
                `${Math.random() * 100}%` : `${Math.random() * 100}%`;
            starElement.style.top = typeOfTwinkling === "mobile" ?
                `${Math.random() * 100}%` : `${Math.random() * 100}%`;
            starElement.style.animationDelay = `${i * 0.1}s`;

            document.querySelector(".star_wrapper").appendChild(starElement);
        }
    }

    function updateTypeOfTwinkling() {
        typeOfTwinkling = window.innerWidth <= 650 ? "mobile" : "desktop";
        if (typeOfTwinkling === "mobile") {
            const starElement = document.querySelectorAll(".star");
            starElement.forEach(star => star.remove());
        } else {
            const starElement = document.querySelectorAll(".star");
            starElement.forEach(star => star.remove());
        }

        createTwinkling();
    }

    createTwinkling();

    window.addEventListener("resize", updateTypeOfTwinkling);
};

twinklingAnimation();
/* Big snowflake animation */
const snowflakeHandler = () => {
    const createSnowflake = () => {
        const snowflakeElement = document.createElement("img");
        snowflakeElement.src = "images/snowflake/snowflake.png";
        snowflakeElement.alt = "A big snowflake";
        snowflakeElement.id = "snowflake";
        document.querySelector("main").appendChild(snowflakeElement);
    };

    const removeSnowflake = () => {
        const snowflakeElement = document.getElementById("snowflake");
        if (snowflakeElement) {
            snowflakeElement.remove();
        }
    };

    const checkAndCreateSnowflake = () => {
        const snowflakeElement = document.getElementById("snowflake");
        if (!snowflakeElement) {
            createSnowflake();
        }
    };

    let width = window.innerWidth;

    if (width > 1000) {
        checkAndCreateSnowflake();
    }

    window.addEventListener("resize", () => {
        if (window.innerWidth > 1000) {
            checkAndCreateSnowflake();
        } else {
            removeSnowflake();
        }
    });
};

snowflakeHandler();
/* Santa's speech cloud animation */
const speechCloud = () => {
    const speechCloudElement = document.getElementById("santa_speech_cloud");

    const displaySpeechCloud = () => {
        setTimeout(() => {
            speechCloudElement.style.opacity = "1";
        }, 3000);
    };

    const hideSpeechCloud = () => {
        speechCloudElement.style.opacity = "0";
    };

    const updateSpeechCloud = () => {
        if (window.innerWidth >= 1300) {
            displaySpeechCloud();
        } else {
            hideSpeechCloud();
        }
    };

    updateSpeechCloud();

    window.addEventListener("resize", updateSpeechCloud);
};

window.addEventListener("load", () => {
    speechCloud();
})
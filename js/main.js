"use strict";

window.onload = function () {
    initActiveTab();
};

const userTabLs = ["info_tab", "documents_tab", "id_verify_tab", "check_list_tab", "messages_tab", "notes_tab"];

function initActiveTab() {
    const defaultTabId = "transactions_tab";
    const defaultUserTabId = "info_tab";

    // Global variable to store default selection
    let currentSelection = document.getElementById(defaultTabId);
    let currentUserTab = document.getElementById(defaultUserTabId);

    const navLinks = document.querySelectorAll("div a");

    let tabList = [];
    navLinks.forEach(function (element) {
            tabList.push(element.hash)
        }
    );

    // Change active tab
    function changeActiveTab(targetAnchor) {
        const selector = targetAnchor.replace("#", "");
        if (
            userTabLs.includes(selector)
        ) {
            changeUserTab(targetAnchor)
        } else {
            currentSelection.classList.remove("show-div");
            const newTab = document.getElementById(selector);
            currentSelection = newTab;
            currentSelection.classList.add("show-div");
        }
        ;
    }


    // Change active tab
    function changeUserTab(targetAnchor) {
        const userSelector = targetAnchor.replace("#", "");
        currentUserTab.classList.remove("show-div");
        const newUserTab = document.getElementById(userSelector);
        currentUserTab = newUserTab;
        currentUserTab.classList.add("show-div");
        if (userSelector === "documents_tab") {
            genDivs();
        }
    }


    navLinks.forEach(function (e) {
        e.onclick = function () {
            const targetAnchor = e.getAttribute("href");
            changeActiveTab(targetAnchor);
        };
    });

    const hash = window.location.hash;
    if (hash.length > 0 && hash.indexOf("_tab") > 0) {
        // Load a different tab than default. If not fallback to defaultTabId.
        if (tabList.includes(hash)) {
            changeActiveTab(hash)
        } else changeActiveTab(defaultTabId);
    }

// Show default
    currentSelection.classList.add("show-div");
}

function genDivs() {
    let UserDocs = document.getElementById("documents_grid");
    for (let i = 1; i <= 6; i++) {

        for (let j = 1; j <= 6; j++) {
            UserDocs.innerHTML += '<div class="column">' + " i= " + i + " j= " + j + '</div>';
        }

    }
}

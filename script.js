// script.js

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function () {
        showToast();
    }, function (err) {
        console.error('Failed to copy text: ', err);
    });
}

function showToast() {
    var toast = document.getElementById("toast");
    toast.classList.add("show");
    setTimeout(function () {
        toast.classList.remove("show");
    }, 2000);
}

function toggleProject(projectCard) {
    const projectContent = projectCard.querySelector('p');
    projectContent.classList.toggle('hidden');
    projectCard.classList.toggle('expanded');

    if (projectCard.classList.contains('expanded')) {
        projectCard.classList.add('shadow-xl', 'transform', 'scale-105');
    } else {
        projectCard.classList.remove('shadow-xl', 'transform', 'scale-105');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    let note = document.getElementById('sticky-note');
    let saveBtn = document.getElementById('save-note');
    let clearBtn = document.getElementById('clear-note');

    chrome.storage.local.get('stickyNote', function (data) {
        if (data.stickyNote) {
            note.value = data.stickyNote;
        }
    });

    saveBtn.addEventListener('click', function () {
        chrome.storage.local.set({ 'stickyNote': note.value });
    });

    clearBtn.addEventListener('click', function () {
        note.value = '';
        chrome.storage.local.remove('stickyNote');
    });
});
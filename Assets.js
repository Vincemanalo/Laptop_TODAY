document.querySelectorAll("table tbody tr").forEach(row => {
    row.addEventListener("click", function() {
        const cells = this.getElementsByTagName("td");
        showModal(cells[0].innerText, cells[1].innerText, cells[2].innerText);
    });
});

function showModal(id, name, age) {
    document.getElementById("modalId").innerText = id;
    document.getElementById("modalName").innerText = name;
    document.getElementById("modalAge").innerText = age;
    document.getElementById("myModal").style.display = "block"; // Show modal
}

function closeModal() {
    document.getElementById("myModal").style.display = "none"; // Hide modal
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    let modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

document.getElementById("domainInfoForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const domain = document.getElementById("domain").value;

    fetch(`API.php?domain=${encodeURIComponent(domain)}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("results").innerHTML = `
                <pre> ${JSON.stringify(data, null, 2)} </pre>
                `;
        })
        .catch(error => console.error("Błąd: ", error));
});
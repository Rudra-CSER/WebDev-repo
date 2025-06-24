//declare the html with js data type
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // stop page reload

        // Get values
        const name = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Simple checks
        if (name === "" || email === "" || password === "") {
            alert("Please fill in all required fields.");
            return;
        }

        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            return;
        }

        // Everything is good — send it!
        const formData = new FormData(form);
       

        fetch("https://webhook.site/5071a8cf-bda7-45e8-a9b2-aa7117829b69", {
            method: "POST",
            body: formData
        })
        .then(res => res.text())
        .then(data => {
            console.log("Submitted:", data);
            alert("Form submitted successfully!");
            form.reset(); // clear form
        })
        .catch(err => {
            console.error("Error:", err);
            alert("Something went wrong.");
        });
    });

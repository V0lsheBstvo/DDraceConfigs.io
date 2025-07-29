const configs = [
    {
        title: "DDrace Config By FAIRUS",
        author: "FAIRUS",
        date: "04.01.2025",
        description: "This configuration is tailored for DDrace enthusiasts.",
        tags: ["DDrace"],
        link: "CfgByFAIRUS.html",
        image: "thumbnails/1.jpg"
    },
    {
        title: "Best KoG Config By xdust1n",
        author: "xdust1n",
        date: "04.01.2025",
        description: "Designed for KoG gameplay, this config enhances your speed and agility.",
        tags: ["KoG"],
        link: "CfgByFAIRUS.html",
        image: "thumbnails/2.jpg"
    },
    {
        title: "Best Block Config By klow",
        author: "klow",
        date: "04.01.2025",
        description: "This configuration is optimized for block gameplay, ensuring smooth performance and minimal lag.",
        tags: ["Block"],
        link: "CfgByFAIRUS.html",
        image: "thumbnails/3.jpg"
    },
    {
        title: "Best Config By NoName",
        author: "NoName",
        date: "04.01.2025",
        description: "This configuration is tailored for DDrace enthusiasts.",
        tags: ["DDrace"],
        link: "CfgByFAIRUS.html",
        image: "thumbnails/4.jpg"
    }
    // Add more configurations as needed
];

function renderConfigs(configs) {
    const configList = document.getElementById('configList');
    configList.innerHTML = ''; // Clear existing content

    configs.forEach(config => {
        const listItem = document.createElement('li');
        listItem.className = 'config-card';
        listItem.setAttribute('data-tags', config.tags.join(', '));

        listItem.innerHTML = `
            <div class="avatar"><img src="${config.image}" alt="Server Avatar"></div>
            <div class="config-details">
                <a href="${config.link}">
                    <h2>${config.title}</h2>
                </a>
                <div class="config-meta">
                    <div class="config-meta-div">
                        <img src="svg/time.svg" alt=""><span>${config.date}</span>
                    </div>
                    <div class="config-author">Author: ${config.author} <img src="svg/verification.svg" class="verification-icon" alt="verified author"></div>
                </div>
                <p class="config-description">${config.description}</p>
            </div>
            <div class="config-button-container">
                <a href="${config.link}" class="config-button">Open</a>
            </div>
        `;

        configList.appendChild(listItem);
    });
}

// Initial render
renderConfigs(configs);

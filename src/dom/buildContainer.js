function buildContainer() {
    const app = document.getElementById("app");
    const container = document.createElement("div");

    container.className = "container";
    app.appendChild(container);
}

export default buildContainer;

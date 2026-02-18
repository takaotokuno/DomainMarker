(() => {
    if(document.getElementById("domain-marker-bar")) return;

    const hostname = location.hostname;
    const color = window.ENV_CONFIG?.[hostname];

    if (!color) return;

    const bar = document.createElement("div");
    bar.id = "domain-marker-bar";

    Object.assign(bar.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "6px",
        backgroundColor: color,
        zIndex: "2147483647",
        pointerEvents: "none"
    });

    document.documentElement.appendChild(bar);
})();
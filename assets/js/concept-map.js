
document.addEventListener("DOMContentLoaded", function () {
    const data = {
        nodes: [
            { id: "Vector Spaces", group: "Mathematical Foundations" },
            { id: "SVD", group: "Mathematical Foundations" },
            { id: "Eigenvalues", group: "Mathematical Foundations" },
            { id: "Basic Probability", group: "Statistical Methods" },
            { id: "Bayes Rule", group: "Statistical Methods" },
            { id: "Entropy", group: "Statistical Methods" },
            { id: "Fixed Points", group: "Neural Dynamics" },
            { id: "Stability", group: "Neural Dynamics" }
        ],
        links: [
            { source: "Basic Probability", target: "Bayes Rule" },
            { source: "Vector Spaces", target: "SVD" },
            { source: "SVD", target: "Eigenvalues" }
        ]
    };

    const width = 800, height = 600;
    const color = {
        "Mathematical Foundations": "#aec6cf",
        "Statistical Methods": "#77dd77",
        "Neural Dynamics": "#fdfd96"
    };

    const svg = d3.select("#concept-map")
                  .append("svg")
                  .attr("width", width)
                  .attr("height", height);

    const simulation = d3.forceSimulation(data.nodes)
        .force("link", d3.forceLink(data.links).id(d => d.id).distance(120))
        .force("charge", d3.forceManyBody().strength(-300))
        .force("center", d3.forceCenter(width / 2, height / 2));

    const link = svg.append("g")
        .attr("stroke", "#aaa")
        .selectAll("line")
        .data(data.links)
        .join("line");

    const node = svg.append("g")
        .selectAll("circle")
        .data(data.nodes)
        .join("circle")
        .attr("r", 10)
        .attr("fill", d => color[d.group])
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

    const label = svg.append("g")
        .selectAll("text")
        .data(data.nodes)
        .join("text")
        .text(d => d.id)
        .attr("font-size", 12)
        .attr("dx", 12)
        .attr("dy", ".35em");

    simulation.on("tick", () => {
        link.attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);
        node.attr("cx", d => d.x)
            .attr("cy", d => d.y);
        label.attr("x", d => d.x)
             .attr("y", d => d.y);
    });

    function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }

    function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }
});

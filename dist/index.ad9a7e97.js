const MiniFramework = {
    createElement: (tag, props, ...children)=>{
        const element = {
            tag,
            type: tag.type,
            key: tag.key,
            props: {
                ...props,
                children
            }
        };
        return element;
    }
};
function _ref(key) {
    return key !== "children";
}
const render = (frameworkEl, container)=>{
    if ([
        "string",
        "number"
    ].includes(typeof frameworkEl)) {
        container?.appendChild(document.createTextNode(frameworkEl?.toString()));
        return;
    }
    const actualDOMElement = document.createElement(frameworkEl.tag); // Apply Props to actual DOM Element
    Object.keys(frameworkEl?.props).filter(_ref).forEach((property)=>{
        actualDOMElement[property] = frameworkEl.props[property];
    }); // Render children inside this element
    frameworkEl?.props?.children.forEach((child)=>{
        render(child, actualDOMElement);
    });
    container?.appendChild(actualDOMElement); // Happens once, unless the DOM already exists and we just need to replace something on the child element.
};
const myMarkup = ()=>{
    return MiniFramework.createElement("div", {
        "data-x": "data attribute test"
    }, MiniFramework.createElement("div", {
        id: "id-test"
    }, MiniFramework.createElement("h1", null, "Mini Framework"), MiniFramework.createElement("input", {
        type: "text",
        placeholder: "Part 2: data binding & hooks coming soon"
    })));
};
render(myMarkup(), document.querySelector("#app"));

//# sourceMappingURL=index.ad9a7e97.js.map

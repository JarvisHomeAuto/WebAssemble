interface FrameworkEl extends JSX.Element {
    tag: any;
  }
  
  const MiniFramework = {
    createElement: (
      tag: JSX.Element,
      props: any,
      ...children: any[]
    ): FrameworkEl => {
      const element = {
        tag,
        type: tag.type,
        key: tag.key,
        props: { ...props, children },
      };
      return element;
    },
  };
  
  const render = (frameworkEl: FrameworkEl, container: Element | null) => {
    if (["string", "number"].includes(typeof frameworkEl)) {
      container?.appendChild(document.createTextNode(frameworkEl?.toString()));
      return;
    }
  
    const actualDOMElement = document.createElement(frameworkEl.tag);
  
    // Apply Props to actual DOM Element
    Object.keys(frameworkEl?.props)
      .filter((key) => key !== "children")
      .forEach((property) => {
        actualDOMElement[property] = frameworkEl.props[property];
      });
  
    // Render children inside this element
    frameworkEl?.props?.children.forEach((child: FrameworkEl) => {
      render(child, actualDOMElement);
    });
  
    container?.appendChild(actualDOMElement); // Happens once, unless the DOM already exists and we just need to replace something on the child element.
  };
  
  const myMarkup = () => {
    return (
      <div data-x="data attribute test">
        <div id="id-test">
          <h1>Mini Framework</h1>
          <input
            type="text"
            placeholder="Part 2: data binding & hooks coming soon"
          />
        </div>
      </div>
    );
  };
  
  render(myMarkup() as FrameworkEl, document.querySelector("#app"));
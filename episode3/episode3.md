![alt text](image.png)


when returned - log - both are same - react elements only 


![alt text](image-1.png)



React component 
- everything in React is a component 
- types 
- Functional , class comp
- func comp : javascript func that returns a piece of jsx 
- 


React element - first letter - small  - heading
React component  - first  letter - capital - Heading 

- how to render React element  - root.render(heading);
- how to render React component  - root.render(<Heading/>);

```
script:js 


const heading = (
    <h1>Something</h1>
)

const Heading = () => {
    return (
        <>
       <h1>Something</h1> 
       {heading}
       <Title></Title>
       <Title/>
       {Title()}
    );
}

```

Component Composition : 


- [ ] https://claude.ai/chat/fb2bf921-492e-451a-b07d-df163577fe5d
- [ ] https://en.wikipedia.org/wiki/Cross-site_scripting
- [ ] https://legacy.reactjs.org/docs/introducing-jsx.html#jsx-prevents-injection-attacks
- [ ] https://stackoverflow.com/questions/57746377/react-documentation-jsx-prevents-injection-attacks
- [ ] https://www.w3schools.com/tags/att_global_tabindex.asp
- [ ] Component composition - combining multiple component /nesting or mixing to create complex UI 


![alt text](image-2.png)
//@filename: file.tsx
//@jsx: react
declare module JSX {
    interface Element { }
    interface IntrinsicElements {
        [s: string]: any;
    }
}
declare var React: any;

<div>&#123;braces&#xff;</div>;
<Element myAttr="more&hellip;" />

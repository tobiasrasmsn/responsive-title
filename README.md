# Responsive Title

A React component that displays responsive, full-width text that automatically adjusts to fit its container, regardless of character length.

## Installation

```
npm install responsive-title
```

## Usage

```tsx
import ResponsiveTitle from "responsive-title";

function MyComponent() {
    return <ResponsiveTitle text="This is a responsive title" />;
}
```

## Props

| Prop | Type                               | Description                                                     |     |     |
| ---- | ---------------------------------- | --------------------------------------------------------------- | --- | --- |
| text | String                             | The text content to display (required)                          |     |     |
| ...  | HTMLAttributes (excluding 'style') | Any valid HTML attributes for a div element (excluding 'style') |     |     |

## Known Issues and Limitations

1. Initial Layout Shift:
   The component may cause a brief layout shift when it first loads. This occurs because the initial font size is set using a CSS calc() function, which may not perfectly match the final calculated size. The component quickly adjusts to the correct size, but this adjustment can be visible.

2. Text Overflow:
   In extreme cases where the container is very narrow and the text is very long, the text might overflow its container before reaching the minimum font size of 10px.

3. Performance on Resize:
   While the resize listener is throttled, frequent resizing on lower-end devices might impact performance.

4. Server-Side Rendering:
   This component is designed for client-side rendering.

## Workarounds

-   To minimize the initial layout shift, consider setting an initial width and height on the component's container that approximates the expected final size.

# Compatibility

This component is compatible with React 16.8.0 and above. It's designed to work with Next.js 13 and above when used with the "use client" directive.

# Contributing

Contributions, issues, and feature requests are welcome!

# License

Distributed under the MIT License. See LICENSE for more information.

# Author

tobiasrasmsn - [@tobiasrasmsn](https://github.com/tobiasrasmsn)

View repository:
[Repository](https://github.com/yourusername/responsive-title)

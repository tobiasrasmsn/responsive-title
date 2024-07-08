import React, { HTMLAttributes } from 'react';

interface ResponsiveTextProps extends Omit<HTMLAttributes<HTMLDivElement>, "style"> {
    text: string;
    containerStyle?: React.CSSProperties;
}
declare const ResponsiveTitle: React.FC<ResponsiveTextProps>;

export { ResponsiveTitle };

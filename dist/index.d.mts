import React, { HTMLAttributes } from 'react';

interface ResponsiveTextProps extends HTMLAttributes<HTMLDivElement> {
    text: string;
}
declare const ResponsiveText: React.FC<ResponsiveTextProps>;

export { ResponsiveText as ResponsiveTitle };

declare namespace JSX {
    interface IntrinsicElements {
        marquee: React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement> & {
                behavior?: 'scroll' | 'slide' | 'alternate';
                direction?: 'left' | 'right' | 'up' | 'down';
                scrollamount?: number | string;
            },
            HTMLElement
        >;
    }
}

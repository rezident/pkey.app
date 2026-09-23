module.exports = {
    multipass: true,
    plugins: [
        {
            name: 'preset-default',
            params: {
                overrides: {
                    // Preserve media queries and CSS variables inside SVG.
                    inlineStyles: false,
                    minifyStyles: false,
                },
            },
        },
        // SVG size will be controlled through CSS.
        'removeDimensions',
        // Prevent gradient ID collisions for inline SVGs.
        'prefixIds',
    ],
};

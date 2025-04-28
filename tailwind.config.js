module.exports = {
    darkMode: 'class',
    content: [
        './templates/**/*.html',
        './static/js/**/*.js'
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#3E0E82',
                    dark: '#6C63FF'
                },
                secondary: {
                    light: '#6C63FF',
                    dark: '#3E0E82'
                }
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif']
            }
        }
    },
    plugins: []
}
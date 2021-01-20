export const isDark = (color) => {
    const lightColors = ['warning', 'info', 'light'];

    return !lightColors.includes(color);
};

module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    // Add custom rules here
    'prettier/prettier': 'off', // Turn off prettier if needed
    'react-hooks/exhaustive-deps': 'warn', // Ensure useEffect dependencies are correct
  },
};

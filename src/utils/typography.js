import Typography from 'typography';
import CodePlugin from 'typography-plugin-code';
import githubTheme from 'typography-theme-github';

const typography = new Typography(githubTheme);
typography.plugins = [new CodePlugin()];
export const { scale, rhythm, options } = typography;
export default typography;

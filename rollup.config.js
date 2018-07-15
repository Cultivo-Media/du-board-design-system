import jsx from 'rollup-plugin-jsx';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    exports: 'named',
    sourceMap: true,
  },
  external: ['prop-types', 'react', 'react-dom', 'styled-components', 'styled-icons'],
  plugins: [
    resolve(),
    babel({ exclude: 'node_modules/**' }),
    jsx({ factory: 'React.createElement' }),
    commonjs(),
  ],
};

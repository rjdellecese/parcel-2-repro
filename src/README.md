Repro for Parcel issue [#7585](https://github.com/parcel-bundler/parcel/issues/7585).

I tested this with `npm` 8.3.0 and `node` 17.3.0 on macOS Monterey 12.1.

To see the build failure:

```bash
npm install
npx parcel build
```

To "fix" it, either:

1. Remove line 3 in `index.ts` (importing `@codemirror/highlight`), or
2. Remove the `"browserslist"` entry in `package.json`.

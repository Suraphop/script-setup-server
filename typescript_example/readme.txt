## Typescript lesson example
#### install nodejs
- check version
```
node -v
```
#### install tsx
```
npm install -g typescript
tsc-v
```
#### create tsx project
```
tsc --init
```
complie ts to js file
```
tsc
```
config tsconfig.json
- only complie in src floder
```
 "skipLibCheck": true
  },
  "include": ["src"]
}

```
- complie at dist floder
```
"outDir": "./dist/"
```
watch mode
```
tsc -w
```
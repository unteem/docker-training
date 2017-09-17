# Builder



## The builder pattern

 - Build artifacts in one step
 - Use these artifacts in the docker build


## Multi stage build

```
FROM thredup/node:8.4.0-builder as builder

FROM thredup/node:8.4.0
COPY --from=builder /app/node_modules/ ./node_modules/
```



## Exercise!

```
cd exercises/builder
```

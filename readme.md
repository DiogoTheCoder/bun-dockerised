### Running Docker Container (Locally with Auto Reload)

```sh
docker-compose build
docker-compose up
```

### Running Docker Container (Production)

```sh
docker-compose -f docker-compose.prod build --no-cache
docker-compose -f docker-compose.prod.yml up --force-recreate
```

# team-manager

> A GitHub App built with [Probot](https://github.com/probot/probot) that Adds a repository to a team on creation

## Working with a GHES instance

If you want this app to work with your private GHES instance add GHE_HOST to your .ENV file.

Addionally, you can set the environmental the variable below:
```
# Replace this with your github server url
export GHE_HOST="github.sample.com"
```

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t team-manager .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> team-manager
```

## Contributing

If you have suggestions for how team-manager could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2021 Enyil Padilla <enyil@github.com>

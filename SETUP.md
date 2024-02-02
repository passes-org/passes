# Passes Dev Setup

## Bun

Bun is the preferred package manager for Passes.

To install:

```bash
curl -fsSL https://bun.sh/install | bash
```

Then install packages:

```bash
bun install
```

## Ngrok

Ngrok is used for end-to-end testing of development changes.

To install:

- Go to https://ngrok.com/download and download ngrok.
- Unzip the file, and move the resulting `ngrok` file to `/usr/local/bin`.
- OR: `sudo unzip ~/Downloads/ngrok-v3-stable-darwin-amd64.zip -d /usr/local/bin`
- Run `ngrok authtoken <YOUR_AUTH_TOKEN>` with your auth token

You should also edit the ngrok configuration to define a tunnel for Passes.

Setup:

- Use the CLI to edit the ngrok config:
  ```bash
  ngrok config edit
  ```
- Add a `passes-org` tunnel definition:

  ```bash
  passes-org:
      proto: http
      addr: 5174
      domain: <your-unique-subdomain>.ngrok.dev
  ```

## Running the App

- Enter the directory:

  ```bash
  cd passes/passes.org
  ```

- Install npm packages

  ```bash
  bun install
  ```

- Start dev server

  ```bash
  bun run dev --port 5174
  ```

  **It is important to use `--port 5174` when you want to use ngrok**

- At this point you should be able to view the passes site in your browser at http://localhost:3000
- **Optional**: Start `ngrok` if you want to e2e test passes
  ```bash
  ngrok start passes-org
  ```

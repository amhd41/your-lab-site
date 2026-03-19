# X Auto-Posting Setup

This repository includes a GitHub Actions workflow that can automatically post to X when a new publication is added to `src/data/publications.js`.

## What it does

- Triggers on pushes to `main` when `src/data/publications.js` changes
- Compares the current publications list with the previous commit
- Detects newly added publications
- Posts each new publication to X using `POST /2/tweets`

## Required GitHub repository secrets

Add these repository secrets before enabling the workflow:

- `X_API_KEY`
- `X_API_KEY_SECRET`
- `X_ACCESS_TOKEN`
- `X_ACCESS_TOKEN_SECRET`

## Where to get them

Create an app in the X Developer Console, then collect the app key/secret and user access token/secret for the X account that should publish the posts.

Official docs:

- [X API v2 authentication mapping](https://docs.x.com/fundamentals/authentication/guides/v2-authentication-mapping)
- [OAuth 1.0a user access tokens](https://docs.x.com/resources/fundamentals/authentication/oauth-1-0a/obtaining-user-access-tokens)
- [API key and secret](https://docs.x.com/fundamentals/authentication/oauth-1-0a/api-key-and-secret)

## Notes

- `POST /2/tweets` requires user-context authentication according to X's docs.
- This workflow uses OAuth 1.0a user context so it can run headlessly in GitHub Actions with stored secrets.
- The publication text is trimmed automatically to fit X's character limit.
- If multiple publications are added in one commit, the workflow posts each one separately.

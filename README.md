<p align="center">
  <a href="https://vuepress.vuejs.org/" target="_blank">
    <img src="https://oas.voyage.auto/hero.png" alt="logo">
  </a>
</p>

OAS is a fully open-source library of Voyage’s safety processes and testing procedures, designed to supplement existing safety programs at self-driving car startups across the world. **We aim to make OAS a standard in the industry, driving us all to safer testing and operation of autonomous vehicles.** When it comes to safety, we believe open is better, and as such we welcome contributions to make OAS better. The purpose of this project is not to benefit Voyage, but to elevate the field to a higher standard of safety.

Contributions are welcome!

## Development

> Please make sure your version of Node.js is greater than 8.

OAS uses [VuePress](https://vuepress.vuejs.org/) for site generation

### Clone OAS repository

``` bash
cd ~
git clone https://github.com/voyage/open-autonomous-safety
```

### Install Dependencies

``` bash
yarn install
```
### Run Vuepress Server Locally

``` bash
yarn dev
```

## Deployment

Any changes to `production` will automatically be pushed to production (https://oas.voyage.auto) via Circle CI. This can be done by creating & merging a PR from `master` -> `production`.

### Circle CI

The following environment vars are required for the deploy:

```
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
```

## License

MIT
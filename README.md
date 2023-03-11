## WDIO Image Comparison Demo Project

### GitHub Project Clone

---

- Clone the `wdio-image-comparison-demo` repository & install its dependencies:
  ```sh
  $ git clone https://github.com/mayankshukla94/wdio-image-comparison-demo.git
  $ cd wdio-image-comparison-demo && npm install
  ```
  
- To undestand how WebdriverIO works, refer [Wdio](https://webdriver.io/docs/gettingstarted).

### Test Run

---

1. To run a spec file, execute command `npx wdio --spec <spec_path>`

2. To run spec `mobile_screen_compare_test.js`, execute command `SERVICES="devtools" npx wdio --spec <spec_path>`

- By default, environment variable `SERVICES` is set to `chromedriver`.
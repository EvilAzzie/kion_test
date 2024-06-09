ABOUT
=====
- This is test task for Kion
- Headed test mode is used here due to unstable Dzen.ru behavior in headless mode

INSTALLATION
=====

1. Install NodeJS 20 version and dependencies
    - For example, you can do it via [Node Version Manager](https://github.com/creationix/nvm#installation)
        ```bash
        nvm install 20
        ```
    - Install dependencies
        ```bash
        yarn install
        npx playwright install
        ```

Run tests
=====

1. Run in docker (only line reporter works with docker)
    - Install docker https://docs.docker.com/desktop/install/windows-install/
    - Build image
        ```bash
        docker build --tag 'test_kion' .
        ```
    - Run container
        ```bash
        docker run -it --rm test_kion
        ```
    - Run tests
        ```bash
        xvfb-run npx playwright test
        ```
    - Exit container
        ```bash
        exit
        ```

1. Run tests
    ```bash
    npx playwright test
    ```

1. Run allure report
    - Install allure reporter https://allurereport.org/docs/install/
    - Launch reporter
        ```bash
        allure serve allure-results
        ```

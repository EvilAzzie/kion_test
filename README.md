ABOUT
=====
This is test task for Kion
Headed test mode is used here due to unstable Dzen.ru behavior in headless mode

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

1. Run in docker
    - Build image
        ```bash
        docker build --tag 'test_kion' .
        ```
    - Run container
        ```bash
        docker run -it --rm test_kion
        ```
    - Exit container
        ```bash
        docker run -it --rm test_kion
        ```

1. Run allure report
    ```bash
    allure serve allure-results
    ```

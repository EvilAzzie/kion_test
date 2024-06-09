FROM mcr.microsoft.com/playwright:v1.43.0-jammy

# Copy project (including tests)
COPY . /kion_test

WORKDIR /kion_test

# Install dependencies
RUN yarn install

RUN npx playwright install --with-deps chrome

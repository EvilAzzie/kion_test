FROM mcr.microsoft.com/playwright:v1.43.0-jammy

# Copy project (including tests)
COPY . /kion_test

WORKDIR /kion_test

# Install dependencies
RUN yarn install

# Install browsers
RUN npx playwright install

FROM ruby:2.5
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN mkdir /tttn
WORKDIR /tttn
COPY Gemfile /tttn/Gemfile
COPY Gemfile.lock /tttn/Gemfile.lock
RUN bundle install
COPY . /tttn

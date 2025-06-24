source "https://rubygems.org"

gem "jekyll", "~> 3.8.5"

# 🔧 Gems standard requises à partir de Ruby 3.4+
%w[
  base64 bigdecimal csv date delegate etc fcntl fiber
  forwardable io-console ipaddr logger net-http observer
  open-uri optparse pp prime pstore resolv rexml singleton
  strscan stringio uri webrick yaml zlib
].each do |lib|
  gem lib
end

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
  gem "jekyll-postcss"
end

# 🪟 Support Windows uniquement
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
gem "wdm", "~> 0.1.0" if Gem.win_platform?

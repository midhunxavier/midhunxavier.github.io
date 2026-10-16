source "https://rubygems.org"

# Match the native GitHub Pages dependency set.
gem "github-pages", group: :jekyll_plugins
gem "wdm", "~> 0.1.0" if Gem.win_platform?
gem "webrick", "~> 1.8"

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-sitemap"
end

group :test do
  gem "html-proofer", "~> 5.0"
end

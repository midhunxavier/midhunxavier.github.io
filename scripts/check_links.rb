require "html-proofer"
require "yaml"

config = YAML.load_file("_config.yml", aliases: true)
HTMLProofer.check_directory("./_site", {
  disable_external: true,
  checks: %w[Links Images Scripts Favicon],
  ignore_missing_alt: true,
  # The Code Flow project is published separately under this domain.
  ignore_urls: [%r{\A(?:https://midhunxavier\.com)?/code-flow(?:/|\#|$)}],
  swap_urls: { %r{\A#{Regexp.escape(config.fetch("url"))}#{Regexp.escape(config.fetch("baseurl", ""))}(?=/|$)} => "" }
}).run

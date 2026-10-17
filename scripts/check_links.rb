require "html-proofer"
require "yaml"

config = YAML.load_file("_config.yml", aliases: true)
HTMLProofer.check_directory("./_site", {
  disable_external: true,
  checks: %w[Links Images Scripts Favicon],
  ignore_missing_alt: true,
  swap_urls: { %r{\A#{Regexp.escape(config.fetch("url"))}#{Regexp.escape(config.fetch("baseurl", ""))}(?=/|$)} => "" }
}).run

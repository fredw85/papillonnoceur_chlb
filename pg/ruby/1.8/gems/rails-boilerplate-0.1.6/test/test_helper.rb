ENV["RAILS_ENV"] = 'test'

require File.expand_path("../dummy/config/environment.rb", __FILE__)
require 'rails/test_help'

Rails.backtrace_cleaner.remove_silencers!

Dir["#{File.dirname(__FILE__)}/support/**/*.rb"].each { |f| require f }

# For Generators
require 'rails/generators/test_case'

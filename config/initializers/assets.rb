# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )
=begin
Rails.application.config.assets.precompile += %w(
  teaspoon.css
  teaspoon-teaspoon.js
  teaspoon-jasmine.js
  support/phantomjs-shims.self.js
  support/bind-poly.self.js
  angular/angular.self.js
  AngularDevise/lib/devise.self.js
  angular-ui-router/release/angular-ui-router.self.js
  angular-route/angular-route.self.js
  angular-resource/angular-resource.self.js
  angular-rails-templates.self.js
  *.js *.css
)
=end

Rails.application.config.assets.precompile << proc do |path|
  if path =~ /\.(css|js)\z/
    full_path = Rails.application.assets.resolve(path).to_s
    app_assets_path = Rails.root.join('app', 'assets').to_s
    vendor_assets_path = Rails.root.join('vendor', 'assets').to_s
    if (full_path.starts_with? app_assets_path) || (full_path.starts_with? vendor_assets_path)
      puts "including asset: #{ full_path }"
      true
    else
      puts "excluding asset: #{ full_path }"
      false
    end
  else
    false
  end
end


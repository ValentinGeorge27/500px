require 'spec_helper.rb'

feature "Login users", js: true do
  scenario "Login page" do
    visit '/#login'

    expect(page).to have_content("Home")
  end
end
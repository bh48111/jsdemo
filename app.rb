require 'bundler'
Bundler.require

get '/' do
  redirect '/calculators'
end

get '/calculators' do
  erb :index
end

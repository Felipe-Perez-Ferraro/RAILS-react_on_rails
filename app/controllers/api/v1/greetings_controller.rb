class Api::V1::GreetingsController < ApplicationController
  def index
    @greetings = Greeting.all

    render json: @greetings
  end
end
